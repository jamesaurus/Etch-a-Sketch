const container = document.querySelector("#container")
const containerWidth = container.clientWidth;
const containerHeight =  container.clientHeight;
const column = 16;
const row = 16;
const gridBoxWidth = containerWidth/column;
const gridBoxHeight = containerHeight/row;

for(let i = 0; i < column * row; i++) {
    const div = document.createElement("div");
    div.classList.toggle("grid-box");
    div.style.width = `${gridBoxWidth}px`;
    div.style.height = `${gridBoxHeight}px`;
    div.addEventListener("mouseover", (e) => {
        e.target.style.background = "blue";
    })
    container.appendChild(div);
}