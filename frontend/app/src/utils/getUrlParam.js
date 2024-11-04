export default function getUrlParam(paramName) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  if (urlParams.has(paramName)) {
      return urlParams.get(paramName);;
  }
  else{
    // console.log(`No URL parameter for: ${paramName}`)
    return null
  }
}
