let listOfTD = [];
let indexCounter = 0;
let ul = document.getElementById("listDisplay");
let inputForm = document.getElementById("formToDoInput");

inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
});

class inlineText {}
function storeTitle() {
    let toDoName = document.getElementById("titleInput").value;
    toDoName = "aaa"; //test code
    let indexOfNewItem = listOfTD.push(toDoName) - 1;
    indexCounter++;

    let toDoNameSpan = document.createElement("span");
    toDoNameSpan.appendChild(document.createTextNode(toDoName));
    var li = document.createElement("li");

    var removeButton = document.createElement("BUTTON");
    removeButton.setAttribute("type", "button");
    removeButton.appendChild(document.createTextNode("x"));
    removeButton.addEventListener("click", removeToDoByButton);

    var editButton = document.createElement("BUTTON");
    editButton.addEventListener("click", editToDoPress);
    editButton.appendChild(document.createTextNode("e"));

    let date = new Date();
    //let date = document.getElementById("dateInput").valueAsDate;
    date.setDate(200);
    date.setDate(date.getDate() + 1);
    date = date.toLocaleDateString("en-US");
    let dateSpan = document.createElement("span");
    let dateTextNode = document.createTextNode(date);
    dateSpan.appendChild(dateTextNode);
    li.appendChild(removeButton);
    li.appendChild(editButton);
    li.appendChild(toDoNameSpan);
    li.appendChild(dateSpan);

    li.setAttribute("id", indexOfNewItem);

    ul.appendChild(li);

    document.getElementById("formToDoInput").reset();
}
function editToDoPress(event) {
    let li = event.target.parentNode;
    //li.value = null;
    if (li.childNodes[4] == null) {
        let text = "textContent" in li.childNodes[0] ? "textContent" : "innerText";

        var editTextForm = document.createElement("form");
        var editTitleInput = document.createElement("input");
        var editDateInput = document.createElement("input");
        var editSubmitButton = document.createElement("button");

        editSubmitButton.addEventListener("click", ChangeLi);
        editSubmitButton.appendChild(document.createTextNode("Submit Changes"));

        editTitleInput.value = li.childNodes[2][text];
        editDateInput.value = li.childNodes[3][text];

        editTextForm.appendChild(editTitleInput);
        editTextForm.appendChild(editDateInput);
        editTextForm.appendChild(editSubmitButton);

        editTextForm.classList.add("inlineText");
        editTitleInput.classList.add("inlineText");
        editDateInput.classList.add("inlineText");

        li.appendChild(editTextForm);

        li.childNodes[2][text];

        li.childNodes[2].style.display = "none";
        //console.log(li.childNodes[3]);

        li.childNodes[3].style.display = "none";
    }
}

function ChangeLi(event) {
    event.preventDefault();
    let li = event.target.parentNode.parentNode;
    let text = "textContent" in li.childNodes[0] ? "textContent" : "innerText";
    
    let form = event.target.parentNode;

    li.childNodes[2][text] = form.childNodes[0].value;
    li.childNodes[3][text] = form.childNodes[1].value;
    li.childNodes[2].style.display = "inline";
    li.childNodes[3].style.display = "inline";
    li.removeChild(li.childNodes[4]);
}

function removeToDoByButton(event) {
    let li = event.target.parentNode;
    ul.removeChild(li);
}
