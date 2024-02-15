
let listOfTD = [];
let indexCounter = 0;
let ul = document.getElementById("listDisplay");

function storeTitle(){
    
    let toDoName = document.getElementById("titleInput").value;
    let indexOfNewItem = (listOfTD.push(toDoName)) - 1;
    indexCounter++;
    var li = document.createElement("li");
    var removeButton = document.createElement("BUTTON");
    removeButton.setAttribute("type", "button");
    removeButton.appendChild(document.createTextNode("x"));
    removeButton.addEventListener("click", removeToDoByButton);
    li.appendChild(removeButton);
    li.appendChild(document.createTextNode(toDoName));
    li.setAttribute("id", indexOfNewItem);
    ul.appendChild(li);
}
function removeToDoByButton(event){
    let li = event.target.parentNode;
    
    ul.removeChild(li);
}   

