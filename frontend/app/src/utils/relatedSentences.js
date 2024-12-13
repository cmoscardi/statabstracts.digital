import HighlightSubstrings from "./highlightText";

export default function RelatedSentences({ str, search, topN }) {
  // str = the full text returned by elastic search, this is the entire pdf's text
  // search = the term the user searched for
  // topN = the number of matches that should be shown, if this is 3 then this will return 3 setences related to the search term

  let searchWords = search.split(" ");
  const joinLines = str.replace(/\n/g, " "); // replace newlines with spaces
  const regexNums = /[\d,().\s\n]{10,}/g; // matches sequences of numbers 15 characters or more ie ",202 ,204 ,205 , \n 205 ,206 ,207 (234)" helps with table data
  const strNoNums = joinLines.replace(regexNums, ""); // remove long strings to help generate better sentences
  const sentences = strNoNums.split(
    /(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/
  );
  const matches = [];
  const stopWords = [
    "i",
    "me",
    "my",
    "myself",
    "we",
    "our",
    "ours",
    "ourselves",
    "you",
    "your",
    "yours",
    "yourself",
    "yourselves",
    "he",
    "him",
    "his",
    "himself",
    "she",
    "her",
    "hers",
    "herself",
    "it",
    "its",
    "itself",
    "they",
    "them",
    "their",
    "theirs",
    "themselves",
    "what",
    "which",
    "who",
    "whom",
    "this",
    "that",
    "these",
    "those",
    "am",
    "is",
    "are",
    "was",
    "were",
    "be",
    "been",
    "being",
    "have",
    "has",
    "had",
    "having",
    "do",
    "does",
    "did",
    "doing",
    "a",
    "an",
    "the",
    "and",
    "but",
    "if",
    "or",
    "because",
    "as",
    "until",
    "while",
    "of",
    "at",
    "by",
    "for",
    "with",
    "about",
    "against",
    "between",
    "into",
    "through",
    "during",
    "before",
    "after",
    "above",
    "below",
    "to",
    "from",
    "up",
    "down",
    "in",
    "out",
    "on",
    "off",
    "over",
    "under",
    "again",
    "further",
    "then",
    "once",
    "here",
    "there",
    "when",
    "where",
    "why",
    "how",
    "all",
    "any",
    "both",
    "each",
    "few",
    "more",
    "most",
    "other",
    "some",
    "such",
    "no",
    "nor",
    "not",
    "only",
    "own",
    "same",
    "so",
    "than",
    "too",
    "very",
    "s",
    "t",
    "can",
    "will",
    "just",
    "don",
    "should",
    "now",
  ];

  searchWords = searchWords.filter(
    (word) => !stopWords.includes(word.toLowerCase())
  );

  sentences.forEach((sentence) => {
    if (searchWords.some((el) => sentence.split(" ").includes(el))) {
      matches.push(sentence);
    }
  });

  const firstN = matches.slice(0, topN);
  console.log("FirstN:", firstN);
  if (firstN.length === 0) {
    return <span>No exact matches found.</span>;
  } else {
    return (
      <>
        {firstN.map((text, index) => {
          return (
              <HighlightSubstrings
                key={index}
                text={text}
                search={search}
                keyWords = {searchWords}
              />
          );
        })}
      </>
    );
  }
}
