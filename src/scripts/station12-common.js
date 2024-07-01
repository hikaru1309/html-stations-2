// function fetchApi() {
//   const url = "https://dog.ceo/api/breeds/image/random";
//   fetch(url)
//     .then(() => console.log("fetch completed"))
//     .catch(() => console.error("fetch failed"));
// }



function fetchApi() {
  const url = "https://dog.ceo/api/breeds/image/random";
  fetch(url)
    .then(response => response.json()) // レスポンスをJSONとしてパース
    .then(data => {
      const p = document.querySelector('p');
      p.innerText = JSON.stringify(data); // レスポンスを<p>タグに表示
      console.log("fetch completed", data);
    })
    .catch(error => console.error("fetch failed", error));
}