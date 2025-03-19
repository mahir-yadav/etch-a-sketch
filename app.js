let cont = document.getElementById("grid-container")


function make(sz) {
    const s = 650 / sz
    cont.innerHTML = ''
    for (let i = 0; i < sz * sz; i++) {
        let cell = document.createElement("div");
        cell.className = "gridboxes"
        cell.style.height = `${s}px`
        cell.style.width = `${s}px`
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black"; // Change to any color
        });
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
make(16);