import React from "react";

export default function HighlightSubstrings({ text, search, keyWords }) {
  console.log("HIGHLIGHT PARAMS", text, search, keyWords );
  let substrings = "";
  if (text.includes(search)) {
    substrings = [search];
  } else {
    substrings = keyWords;
  }
  // If no substrings are provided, return the text as is
  if (!substrings || substrings.length === 0) return <span>{text}</span>;
  console.log('substrings', substrings)

  // Create a regular expression that matches any of the substrings, case-insensitively
  const regex = new RegExp(`(${substrings.join("|")})`, "gi");

  // Split the text by the regular expression
  const parts = text.split(regex);

  // Map over the parts and highlight the matched substrings
  return (
    <>
    <span>
      {parts.map((part, index) =>
        substrings.some(
          (substring) => part.toLowerCase() === substring.toLowerCase()
        ) ? (
          <span key={index} className="highlighted">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
    <span> ... </span>
    </>
  );
}
