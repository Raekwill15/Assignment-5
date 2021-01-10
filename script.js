
let numberCol = 0; // contains the number of column



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

//select color



let selectcolor;
let isblue = false;
let isred = false;
let isyellow = false;

const addblue = ()=>{
    selectcolor = "BLUE"
    document.getElementById("print").innerHTML = selectcolor
    isblue = true;
}

const addred = ()=>{
    selectcolor = "RED"
    document.getElementById("print").innerHTML = selectcolor
    isred = true;
}
const addyellow = ()=>{
    selectcolor = "YELLOW"
    document.getElementById("print").innerHTML = selectcolor
    isyellow = true;
}

const cellList = document.getElementsByTagName("td");
const cellarray = Array.from(cellList);

// arrayrow.forEach((Event) =>{
//     const tabecolor = Event.getElementsByTagName(Event);
//     console.log(tabecolor)
//     tabecolor.addEventListener('click',addred, false)
// })

const addcol = (event) =>{
    event.style.backgroundColor ="red"
    console.log(table)
}

document.getElementsByClassName("myBtn").addEventListener("click", function() {
    alert("Hello World!");
  });