// Create grid
function createGrid() {
    for(let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.toggle("grid-box");
        div.style.width = `${gridBoxWidth}px`;
        div.style.height = `${gridBoxHeight}px`;
        div.addEventListener("mouseover", (e) => {
            e.target.style.background = "blue";
        })
        container.appendChild(div);
    }
}

// Reset grid
function reset() {
    container.innerHTML = ""; // Removes all child nodes
    gridBoxWidth = containerWidth/size;
    gridBoxHeight = containerHeight/size;
    createGrid();
}

// Check if valid size
function isSizeValid(size) {
    let num = Number(size);
    if (Number.isNaN(num)) { // checks if size is not number
        return false;
    }

    if (size <= 0 || size > 100) { // checks if size is > 10 and <= 100
        return false;
    }

    return true;
}

// Set size
function setSize() {
    size = "a"; // invalid size
    while(!isSizeValid(size)) {
        size = prompt("Please enter a grid size (minimum 1 and maximum 100).");
    }
    reset();
}

const container = document.querySelector("#container")
const containerWidth = container.clientWidth;
const containerHeight =  container.clientHeight;
let size = 16;
let gridBoxWidth = containerWidth/size;
let gridBoxHeight = containerHeight/size;

// Set grid size
const btn = document.querySelector("button");
btn.addEventListener("click", () => setSize());

createGrid();