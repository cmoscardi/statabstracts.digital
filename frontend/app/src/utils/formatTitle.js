export default function formatTitle(str, text=true) {
  const year = str.split("-")[0];
  const part = str.split("-")[1].substring(0, 2);
  const words = str.split(" ");
  const page = words[words.length - 1];
  if (text) {
    return `${year} Census, Part ${part}, Page ${page} `;
  }
  else {
    return `${year}-${part}-${page} `;
  }
}
