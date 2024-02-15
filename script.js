
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
    
    var editButton = document.createElement("BUTTON");
    editButton.addEventListener("click", editToDo);
    editButton.appendChild(document.createTextNode("e"));


    let date = document.getElementById("dateInput").valueAsDate; 
    date.setDate(date.getDate() + 1);
    date = date.toLocaleDateString("en-US");
    let dateTextNode = document.createTextNode(date)
    
    li.appendChild(removeButton);
    li.appendChild(editButton);
    li.appendChild(document.createTextNode(toDoName));
    li.appendChild(dateTextNode);
    
    li.setAttribute("id", indexOfNewItem);
    
    ul.appendChild(li);
    
}
function editToDo(event){
    let li = event.target.parentNode;
    //li.value = null;
    let text = "textContent" in li.childNodes[0] ? "textContent" : "innerText"; 
    li.childNodes[0][text];
    console.log(li);
    console.log(li.childNodes[2][text]);
}

function removeToDoByButton(event){
    let li = event.target.parentNode;
    
    ul.removeChild(li);
}   

