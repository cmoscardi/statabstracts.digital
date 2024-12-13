export default function formatTitle(str, obj=false) {
  // formats data from title like "1940-08.pdf page 93" or "1940.pdf page 93"

  let pdf = str.split('.')[0]
  if(pdf.length === 4) {
    pdf = `${str}-00`
  }
  const year = pdf.split("-")[0];
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
