export default function formatTitle(str, obj=false) {
  const year = str.split("-")[0];
  const part = str.split("-")[1].substring(0, 2);
  const words = str.split(" ");
  const pageNum = parseInt(words[words.length - 1]) + 1;
  const page = pageNum.toString()
  if (!obj) {
    return `${year} Census, Part ${part}, Page ${page} `;
  }
  else {
    return {year: year, part: part, page:page};
  }
}
