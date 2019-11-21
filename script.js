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

  //Request user input
  let requestItem = prompt('Enter task for todo list...', 'New Item');
    if (requestItem != ''){
    //Create list items and append new tasks
    let listNode = document.createElement('li'); //Create li node
    let listTextNode = document.createTextNode(requestItem); //Create a text node from user input
      listNode.appendChild(listTextNode); //append text to li
      list.appendChild(listNode); //append li to ul in html
      listNode.classList.add(classNames.TODO_ITEM); //Add class name
     
      alert("Success, New Item Added!");
      countPlus();
    } else{
      alert("Please enter an item to add.")
    }
    //Create checkbox
    /*
     */
}
/**Delete function deleteTodo() */

let count = 1;
function countPlus () {
  for (let i = 0; i < list.children.length; i++)
  return itemCountSpan.innerHTML = count++;
}
function countMinus(){
  
}
    

