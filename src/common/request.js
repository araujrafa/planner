export default (url, cb) => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      cb(data)
    });
}