export default function relatedSentences(str, search, topN) {
  const searchWords = search.split(" ");
  const sentences = str.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/);
  const matches = [];

  sentences.forEach((sentence) => {
    if (searchWords.some((el) => sentence.includes(el))) {
      matches.push(sentence);
    }
  });

  const firstN = matches.slice(0, topN);

  if (firstN.length === 0) {
    return "No exact matches found.";
  } else if (firstN.length <= topN) {
    return firstN.join(" ... ");
  } else {
    return firstN.slice(0, topN).join(" ... ");
  }
}
