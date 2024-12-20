export default function FormatPdfRef(pdfRef) {
  //pdfRef looks like '1940-03-42' or '1940-23'
  let year = false;
  let part = false;
  let page = false;
  const nums = pdfRef.split("-");
  console.log('nums', nums)
  year = nums[0];
  if (nums.length === 2) {
    page = nums[1];
    return {path: year, page: page, title: `${year} Census, Page ${page}`};
  } else if (nums.length === 3) {
    part = nums[1];
    page = nums[2];
    return {path: `${year}-${part}`, page: page, title: `${year} Census, Part ${part}, Page ${page}`};
  } else return false;
}
