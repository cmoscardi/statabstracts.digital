export default function updateUrlParam(paramKey, paramVal) {
  if (window.history.pushState) {
    const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?${paramKey}=${paramVal}`;
    window.history.pushState({ path: newurl }, "", newurl);
  }
  else {
    console.log('URL param update error: window.history.pushState is false')
  }
}
