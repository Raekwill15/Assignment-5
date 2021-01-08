let row = 1;
let column = 1;

function addRow(){
    let table = document.getElementById("table");
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
    for (let i = 0; i < row; i++) {
        let cell = document.createElement("td");
        table.rows[i].appendChild(cell); 
    }

    column++;
}


function removeColumn(){
    let table = document.getElementById("table");
        if(column > 2){
            for(let i =0; i<column; i++){
                table.row[i].removeChild(table.rows[i].lastChild);
            }
        }
    column--;
}

function removeRow(){
    let table = document.getElementById("table");
        if(row > 2){
            table.removeChild(table.lastChild);
            row--;
        }
}

