const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')



function newTodo() {


    let li = document.createElement("li");
    li.id = "item";
    li.className = classNames.TODO_ITEM;
    let newTODOValue = prompt("Please enter a new TODO", "Eg. Study for Science");
    

    if (newTODOValue === '') {
        alert("You must write something!");
    }
    else
    {
        
        let textNode = document.createTextNode(newTODOValue);
        textNode.className = classNames.TODO_TEXT;
        let spanCheckBox = document.createElement("input");
        spanCheckBox.id = "myCheck";
        spanCheckBox.addEventListener("click", getCheckboxCount);
        spanCheckBox.setAttribute("type", "checkbox");
        spanCheckBox.className = classNames.TODO_CHECKBOX;
        let buttonDelete = document.createElement("button");
        let txt = document.createTextNode("\u00D7");
        buttonDelete.className = classNames.TODO_DELETE;
        buttonDelete.appendChild(txt);
        buttonDelete.onclick = function () { deleteLine(this) };
        li.appendChild(spanCheckBox);
        li.appendChild(textNode);
        li.appendChild(buttonDelete);

        list.appendChild(li);
        alert('New todo added!')
        
    }

    itemCountSpan.innerHTML = list.childElementCount;
}

function getCheckboxCount() {

    uncheckedCountSpan.innerHTML = document.querySelectorAll('input[id=myCheck]:checked').length;
}

function deleteLine(line) {

    list.removeChild(line.parentNode);

    itemCountSpan.innerHTML = list.childElementCount;
    getCheckboxCount();
}