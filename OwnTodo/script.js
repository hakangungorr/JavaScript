const todoList = JSON.parse(localStorage.getItem('todoList'))|| []


  renderTodoList();


function pressEnter(event) {
  const key =  event.key
  if (key === 'Enter' || key === '=') 
  addTodo();

}


function addTodo(){
  
  const nameElement= document.querySelector('.js-name-input');
  const name = nameElement.value;

  if(name !=''){
    todoList.push(name);
 
    nameElement.value='';
    renderTodoList();
    saveToStorage()
  
  }
  }

function renderTodoList() {
  todoListHtml = '';

  for (let i=0; i<todoList.length; i++) {
    const name = todoList[i];
    const html = `<div class="name">${name}</div>
    <button onclick="
    todoList.splice(${i},1)
    renderTodoList();
    saveToStorage();
    " class="delete-todo-button" 
    >Delete</button>
    `
    todoListHtml += html
    
}
document.querySelector('.js-todolist').innerHTML = todoListHtml
}




function saveToStorage(){
  localStorage.setItem('todoList', JSON.stringify(todoList));
}