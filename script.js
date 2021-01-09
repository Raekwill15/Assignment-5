
let numberCol = 0; // contains the number of column

const arrayCells = document.getElementsByTagName("td");

const addRow = ()=>{

    if(numberCol === 0)  numberCol = 1
    const table = document.getElementById("table");
    const row = document.createElement("tr");
  
    row.classList.add("row");
    table.appendChild(row);

    for(let i=0; i<numberCol; i++){
        const cell = document.createElement("td");
        cell.style.border = "2px solid black"
        cell.style.width = "30px"
        cell.style.padding ="10px"
        cell.classList.add("cell", "blank");
        row.appendChild(cell);
    }
}

const addColumn = () =>{

    if(numberCol === 0) {
        alert('Create a Row first');
    }
    else{
        const listrow = document.getElementsByClassName("row"); //return the a list that contain all rows 'tr' that have been create so far
        const arrayrow = [...listrow]; // transform the list to an array

        arrayrow.forEach((value)=>{
            const cell = document.createElement("td");
            cell.style.border = "2px solid black"
            cell.style.width = "30px"
            cell.style.padding ="10px"
            cell.classList.add("cell", "blank");
            value.appendChild(cell)
        })
     
        numberCol++;
    }
}

const removeRow = () =>{
    const listrow = document.getElementsByClassName("row"); 
    const arrayrow = [...listrow];
    let length = arrayrow.length - 1
    arrayrow[length].parentNode.removeChild(arrayrow[length]);
}

const removeColumn = () =>{
    const listrow = document.getElementsByClassName("row"); 
    const arrayrow = [...listrow];

    arrayrow.forEach((tr) =>{

        tr.removeChild(tr.lastChild);
    })
     numberCol--;
}