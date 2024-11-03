export default function firstXWords(str, x) {
  const words = str.split(" ");
  if (words.length <= x) {
    return str;
  } else {
    return words.slice(0, x).join(" ");
  }
}
