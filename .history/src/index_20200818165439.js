import x from "./x.js"
import png from "./assets/1.jpg"
const div = document.getElementById("app1");
div.innerHTML = `
    <img src="${png}">
`
const button = document.createElement("button");
button.innerText = "懒加载";
button.onclick = () => {
    const lazy = import("./lazy");
}