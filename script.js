
let listOfTD = [];
let indexCounter = 0;
let ul = document.getElementById("listDisplay");
let inputForm = document.getElementById("formToDoInput");

inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
})

function storeTitle(){
    
    let toDoName = document.getElementById("titleInput").value;
    let indexOfNewItem = (listOfTD.push(toDoName)) - 1;
    indexCounter++;

    var li = document.createElement("li");
    
    var removeButton = document.createElement("BUTTON");
    removeButton.setAttribute("type", "button");
    removeButton.appendChild(document.createTextNode("x"));
    removeButton.addEventListener("click", removeToDoByButton);
    
    let date = document.getElementById("dateInput").valueAsDate; 
    date.setDate(date.getDate() + 1);
    date = date.toLocaleDateString("en-US");
    let dateTextNode = document.createTextNode(date)
    
    li.appendChild(removeButton);
    li.appendChild(document.createTextNode(toDoName));
    li.appendChild(dateTextNode);
    
    li.setAttribute("id", indexOfNewItem);
    
    ul.appendChild(li);
    
}
function removeToDoByButton(event){
    let li = event.target.parentNode;
    
    ul.removeChild(li);
}   

