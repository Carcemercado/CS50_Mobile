"use strict";
const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}
//Global variables
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const deleteButton = document.getElementById('todo-delete')
const myCheckbox = document.getElementById("checkbox");
let count = 0;
let checkCount = 0;

function newTodo() {
  //Request user input
  let requestItem = prompt('Enter task for todo list...', 'New Item');
    if (requestItem != ''){
    //Create list items and append new tasks
    let listItemNode = document.createElement('li'); //Create li node
    let listTextNode = document.createTextNode(requestItem); //Create a text node from user input
    //Create checkbox
    let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.id = "checkbox";
        checkBox.value = requestItem;
        checkBox.name = 'todo';
        //checkBox.addEventListener("click", checkedCounter); **********************Fix later
    //Create button
    let button = document.createElement("button");
      button.innerHTML = "X";
      button.addEventListener("click", removeTodo); // Add event listener for click event. Calls removeTodo()
      function removeTodo() { //Function to remove list item.
        count--;
        itemCountSpan.innerHTML = count;
        list.removeChild(listItemNode);
      }
    //Append elements to listItemNode
    listItemNode.appendChild(checkBox); //Add checkbox input prior to adding text to li
    listItemNode.appendChild(listTextNode); //append text to li
    listItemNode.appendChild(button);
    //Add li with checkbox and button to ul in body
    list.appendChild(listItemNode); //append li to ul in html
    //Add styling via CSS class names.
    listItemNode.classList.add(classNames.TODO_ITEM); //Add class name for todo items
    checkBox.classList.add(classNames.TODO_CHECKBOX); //Add class name for checkbox
    button.classList.add(classNames.TODO_DELETE); //Add class name for delete button
    //Add to 1 count
    (function() {
      count++; 
      itemCountSpan.innerHTML = count;
      })(); //IIFE to add count anonymously
      alert("Success, New Item Added!");
    } else{
    alert("Please enter an item to add.");
  }
}

/** */
function checkedCounter(){
  uncheckedCountSpan.innerHTML = checkCount;
  if (myCheckbox.checked === true){
    checkCount++;
  } else{
    checkCount --;
  }
}
/**
 * This is the foundation for the count plus IIFE
 * function countPlus () {
 *   for (let i = 0; i < list.children.length; i++)
 *   return itemCountSpan.innerHTML = count++;
 * }
 */



