
const addRow = () => {
    const table = document.getElementById("table");
    const row = document.createElement("tr");
  
    row.classList.add("row");
    table.appendChild(row);

    const cell = document.createElement("td");
    cell.style.border = "2px solid black"
    cell.style.width = "30px"
    cell.style.padding ="10px"
    row.appendChild(cell);
}