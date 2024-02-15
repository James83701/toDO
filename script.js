
let listOfTD = [];
let indexCounter = 0;

function storeTitle(){
    let toDoName = document.getElementById("titleInput").value;
    let indexOfNewItem = (listOfTD.push(toDoName)) - 1;
    indexCounter++;
    console.log(indexCounter);
    var ul = document.getElementById("listDisplay");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(toDoName));
    li.setAttribute("id", indexOfNewItem);
    ul.appendChild(li);
    console.log(listOfTD);
}

function removeToDoByTitleName(){
    
    let toDoName = document.getElementById("titleRemovalInput").value;
    let ul = document.getElementById("listDisplay");
    let li = document.getElementsByTagName('ul')[0].getElementsByTagName('li');
    // listOfTD = [];
    // for (let i = 0; i < li.length; i++) {
    //     var arrValue = li[i].innerHTML;
    //     listOfTD.push(arrValue);
    // }
    listOfTD.forEach((element, i) => {
        if(toDoName == listOfTD[i]){

            delete listOfTD[i];
            indexCounter--;
            console.log(indexCounter);
            let elementToRemove = document.getElementById(i);
            ul.removeChild(elementToRemove);
        
        }
        
    });
    if(listOfTD.join(',').replace(/,/g, '').length === 0){
        listOfTD = [];
        indexCounter = 0;
    }
}


