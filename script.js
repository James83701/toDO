
let listOfTD = [];

function storeTitle(){
    let toDoName = document.getElementById("titleInput").value;
    listOfTD.push(toDoName);
    var ul = document.getElementById("listDisplay");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(toDoName));
    li.setAttribute("id", "li" + listOfTD.indexOf(toDoName))
    ul.appendChild(li);
    console.log(listOfTD);
}
