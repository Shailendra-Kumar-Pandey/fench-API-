const baseURL = "https://api.thecatapi.com/v1/images/search?api_key=YOUR_API_KEY./image";
const img =document.querySelector("#image");
const btn = document.querySelector("button");
const getData = async ()=>{
    // console.log("getting data .....");
    let response = await fetch(baseURL);
    // console.log(response);
    let importData = await response.json();
    // console.log(importData[0]);
    img.src = importData[0].url;
}
btn.addEventListener("click", getData);
