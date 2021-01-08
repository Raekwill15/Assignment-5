let row = 1;
let column = 1;

function addRow(){
    let table = document.getElementById("table");
//    table = table.getElementsByTagName("group")[0];
    let newRow = document.createElement("tr");
    
    for(let i = 0; i < column; i++){
        let cell = document.createElement("td");
        newRow.appendChild(cell);
    }
    
    table.appendChild(newRow);
    row++;
}

function addColumn(){
    let table = document.getElementById("table");
//    table = table.getElementsByClassName("group")[0];
    
    for (let i = 0; i < row; i++) {
        let cell = document.createElement("td");
        table.rows[i].appendChild(cell); 
    }
    column++;
}


