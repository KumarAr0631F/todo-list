let todoList = [
  {
    item: 'buy milk',
    dueDate: '4/10/2024',
  },
  {
    item: 'go to college', 
    dueDate: '4/10/2024',
  }
];
showItems();

function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem, dueDate: todoDate});
  inputElement.value = '';
  dateElement.value = '';
  showItems();
}

function showItems(){
  let containerItem = document.querySelector('.todo-container');

  
  let newHTML = '';
  for(let i = 0; i<todoList.length; i++){
    let {item, dueDate} = todoList[i];
    newHTML += `
      <span>${item}</span> 
      <span>${dueDate}</span> 
      <button class= 'dl-button' onclick = "todoList.splice(${i}, 1); showItems();" >Delete</button>
    `;
  }
  containerItem.innerHTML = newHTML;
}