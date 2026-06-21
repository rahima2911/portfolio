// A small, self-contained NLP engine for the portfolio chatbot.
// It uses TF-IDF vectorization + cosine similarity (the same family of
// technique used in the Sentiment Analysis project) to match a visitor's
// question to the closest known intent — fully client-side, no API key.

const STOPWORDS = new Set([
  "a","an","the","is","are","am","was","were","be","been","being","to","of",
  "and","or","but","in","on","at","for","with","about","as","by","from",
  "this","that","these","those","it","its","i","you","your","my","me","do",
  "does","did","can","could","will","would","should","what","which","who",
  "whom","tell","please","know","like","just","so","up","out","if","then",
  "than","have","has","had","not","no","yes","ok","okay","hi","hey","hello",
  "her","she","his","him","hers","he","they","them","their","show","get",
  "give","let","want","need","there","here",
]);

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/'s\b/g, "")
    .replace(/[^a-z0-9\s+./#-]/g, " ")
    .split(/\s+/)
    .filter((t) => t && !STOPWORDS.has(t));
}

function termFreq(tokens) {
  const tf = {};
  tokens.forEach((t) => {
    tf[t] = (tf[t] || 0) + 1;
  });
  const len = tokens.length || 1;
  Object.keys(tf).forEach((k) => (tf[k] /= len));
  return tf;
}

export class IntentMatcher {
  constructor(intents) {
    // intents: [{ id, patterns: string[], ...rest }]
    this.intents = intents;
    this.docs = intents.map((intent) => {
      const tokens = tokenize(intent.patterns.join(" "));
      return { id: intent.id, tokens, tf: termFreq(tokens) };
    });
    this._buildIdf();
  }

  _buildIdf() {
    const df = {};
    this.docs.forEach((doc) => {
      new Set(doc.tokens).forEach((t) => {
        df[t] = (df[t] || 0) + 1;
      });
    });
    const N = this.docs.length;
    this.idf = {};
    Object.keys(df).forEach((t) => {
      this.idf[t] = Math.log(1 + N / df[t]);
    });
    // pre-compute doc vectors
    this.docVectors = this.docs.map((doc) => {
      const vec = {};
      Object.keys(doc.tf).forEach((t) => {
        vec[t] = doc.tf[t] * (this.idf[t] || 0);
      });
      return { id: doc.id, vec };
    });
  }

  _vectorize(tokens) {
    const tf = termFreq(tokens);
    const vec = {};
    Object.keys(tf).forEach((t) => {
      vec[t] = tf[t] * (this.idf[t] || 0);
    });
    return vec;
  }

  static _cosine(a, b) {
    let dot = 0;
    let normA = 0;
    let normB = 0;
    const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
    keys.forEach((k) => {
      const va = a[k] || 0;
      const vb = b[k] || 0;
      dot += va * vb;
      normA += va * va;
      normB += vb * vb;
    });
    if (normA === 0 || normB === 0) return 0;
    return dot / (Math.sqrt(normA) * Math.sqrt(normB));
  }

  match(query) {
    const tokens = tokenize(query);
    if (tokens.length === 0) return { id: null, score: 0 };
    const qVec = this._vectorize(tokens);
    let best = { id: null, score: 0 };
    this.docVectors.forEach((doc) => {
      const score = IntentMatcher._cosine(qVec, doc.vec);
      if (score > best.score) best = { id: doc.id, score };
    });

    // simple keyword-overlap fallback boost for short queries (e.g. "skills", "contact")
    if (best.score < 0.15) {
      this.docs.forEach((doc) => {
        const overlap = tokens.filter((t) => doc.tokens.includes(t)).length;
        const ratio = overlap / tokens.length;
        if (ratio > best.score) best = { id: doc.id, score: ratio * 0.6 };
      });
    }

    return best;
  }
}
