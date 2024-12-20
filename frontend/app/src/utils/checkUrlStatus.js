export default function CheckUrlStatus(url) {
  return new Promise((resolve) => {
    try {
      fetch(url, {mode: 'no-cors'}).then((result) => {
        console.log('result',result)
        resolve(result.status);
      })
    } catch (error) {
      console.log(`Fetch for ${url} failed`);
      resolve(false)
    }
  });
}
