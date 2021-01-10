


let numberCol = 0; // contains the number of column



let numOfColors = 5;
let currentColor = "default";







const addRow = ()=>{

    if(numberCol === 0)  numberCol = 1
    const table = document.getElementById("table");
    const row = document.createElement("tr");
  
    row.classList.add("row");
    table.appendChild(row);

    for(let i=0; i<numberCol; i++){
        const cell = document.createElement("td");
        
//        cell.style.border = "2px solid black"
//        cell.style.width = "30px"
//        cell.style.padding ="10px"
        cell.setAttribute("class", "default");
        cell.setAttribute("onclick", "this.className = currentColor");
        cell.setAttribute("onmousedown", "this.className = currentColor");
//        cell.setAttribute("onmouseover", "this.className = currentColor");
//        cell.classList.add("cell", "blank");
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
           
//            cell.style.border = "2px solid black"
//            cell.style.width = "30px"
//            cell.style.padding ="10px"
             cell.setAttribute("class", "default");
            cell.setAttribute("onclick", "this.className = currentColor");
            cell.setAttribute("onmousedown", "this.className = currentColor");
          //            cell.setAttribute("onmouseover", "this.className = currentColor");
//            cell.classList.add("cell", "blank");




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

//const color = document.

function changeColor(){
    if(document.getElementById("default").selected == true){
        currentColor = "default";
    }else if(document.getElementById("blue").selected == true){
        currentColor = "blue";
    }else if(document.getElementById("red").selected == true){
        currentColor = "red";
    }else if(document.getElementById("yellow").selected == true){
        currentColor = "yellow";
    }else if(document.getElementById("white").selected == true){
        currentColor = "white";
    }
    console.log(currentColor);
}

let drag = false;
document.addEventListener("mousedown", dragOn);
document.addEventListener("mouseup", dragDown);

function dragOn() {
    drag = true;
}

function dragDown() {
    drag = false;
}

document.addEventListener("mouseover", function(event) {
    if (drag === true && event.target.tagName.toLowerCase() === "td") {
        event.target.className = currentColor;
    }
})


function isNotClicked(){
    clicked = false;
}
function setColor(){
    if(clicked === true && event.targetName.toLowerCase() === "td"){
        event.target.className = currentColor;
    }
}


document.addEventListener("mousedown", isClicked);
document.addEventListener("mouseup", isNotClicked);
document.addEventListener("mouseover", setColor);

function  Fillall(){
    
    const cellList = document.getElementsByTagName("td"); 
    
    const cellarray = [...cellList];
    ///console.log(cellarray);
    cellarray.forEach((value) => {
        console.log(value)
        value.style.backgroundColor = currentColor;
    })

}
//Return all cell colors to default
function clearCells() {
    var grid = document.getElementsByTagName("td")
    cellList = [...grid]

    cellList.forEach((cell) => {
      cell.className = "default"
    })
}

//Makes all uncolored cells into the selected color
function fillUncoloredCells() {
    var grid = document.getElementsByTagName("td")
    cellList = [...grid]

    cellList.forEach((cell) => {
        if (cell.className === "default")
        cell.className = currentColor
    })
}

