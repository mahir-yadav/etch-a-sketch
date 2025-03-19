let cont = document.getElementById("grid-container")

let curmode = "black"
function make(sz) {
    const s = 600 / sz
    cont.innerHTML = ''
    for (let i = 0; i < sz * sz; i++) {
        let cell = document.createElement("div");
        cell.className = "gridboxes"
        cell.style.height = `${s}px`
        cell.style.width = `${s}px`
        cell.addEventListener("mouseover", () => set(cell));
        cont.append(cell)

    }
}
function makeboard() {
    let sz = prompt("Enter number of squares per side in the grid (1 to 100)");
    sz = parseInt(sz)
    if (sz > 0 && sz <= 100) {
        make(sz)
    } else {
        alert("Enter a valid number between 1 to 100")
    }
}
function reset() {
    boxes = document.getElementsByClassName("gridboxes")
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = ''
    }
}
function set(cell) {

    if (curmode === "black") {
        cell.style.backgroundColor = "black"
    }
    else if (curmode === "random") {
        cell.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255}, ${Math.random() * 255})`

    } else if (curmode === "darker") {
        let curcolor = window.getComputedStyle(cell).backgroundColor;
        rgbvalues = curcolor.match(/\d+/g)
        for (let i = 0; i < 3; i++) {
            rgbvalues[i] = Math.floor(rgbvalues[i] * 0.9);

        }
        cell.style.backgroundColor = `rgb(${rgbvalues[0]},${rgbvalues[1]},${rgbvalues[2]})`
        // console.log(rgbvalues)
    } else if (curmode === "white") {
        cell.style.backgroundColor = "white";
    } else {
        return;
    }
}
function change(mode) {
    curmode = mode
}
make(32);