export default function formatTitle(str) {
  const year = str.split("-")[0];
  const part = str.split("-")[1].substring(0, 2);
  const words = str.split(" ");
  const page = words[words.length - 1];

  return `${year} Cencus, Part ${part}, Page ${page} `;
}
