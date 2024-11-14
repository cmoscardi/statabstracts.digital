export default function fetchData(fetchUrl) {
  return new Promise((resolve) => {
    try {
      fetch(fetchUrl)
        .then((res) => {
          res.json().then((data) => {
            // Setting a data from api
            console.log("fetchData.js", data);
            resolve(data);
          });
        })
        .catch((error) => {
          console.log("fetch failed");
          console.log(error);
          resolve({ myData: {} });
        });
    } catch (error) {
      console.log("v bad");
      console.log(error);
      resolve({ myData: {} });
    }
  });
}
