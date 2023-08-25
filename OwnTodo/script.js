const todoList = JSON.parse(localStorage.getItem('todoList'))|| []


  renderTodoList();


function pressEnter(event) {
  const key =  event.key
  if (key === 'Enter' ) 
  addTodo();

}


function addTodo(){
  const dateElement= document.querySelector('.js-due-date-input');
  const nameElement= document.querySelector('.js-name-input');
  const name = nameElement.value;
  const date = dateElement.value;
  

  if(name !='' && date != ''){
    const todoObject = {
      name: name,
      date: date
    };
    todoList.push(todoObject);
    nameElement.value='';
    dateElement.value='';
    renderTodoList();
    saveToStorage()
  
  }
  }

function renderTodoList() {
  let todoListHtml = '';

  todoList.forEach(function(todoObject,index){
    const name = todoObject.name;
    const date = todoObject.date;

    
    const html = `<div class="todo-item"><p class="name">${name}</p>
    <p class="date">${date}</p>
    <button onclick="
    todoList.splice(${index},1);
    renderTodoList();
    saveToStorage();
    " class="delete-todo-button" 
    >Delete</button></div>
    `;
    todoListHtml += html;
  })

  document.querySelector('.js-todolist').innerHTML = todoListHtml
}





function saveToStorage(){
  localStorage.setItem('todoList', JSON.stringify(todoList));
}