const todoList = JSON.parse(localStorage.getItem('todoList'))|| []


  renderTodoList();


/* function pressEnter(event) {
  const key =  event.key
  if (key === 'Enter' ) 
  addTodo();

} */


//while doing keydown use document.body.addEventlistener and no need class but while doing onclick document.querySelector.addEventListener
document.body.addEventListener('keydown',(event)=>{
  if (event.key === 'Enter')
  addTodo();
})

addButton = document.querySelector('.add-todo-button');
addButton.addEventListener('click',()=>{
  addTodo();
})





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

  todoList.forEach((todoObject,index)=>{
    const name = todoObject.name;
    const date = todoObject.date;

    
    const html = `<div class="todo-item"><p class="name">${name}</p>
    <p class="date">${date}</p>
    <button class="delete-todo-button js-delete-todo-button" 
    >Delete</button></div>
    `;
    todoListHtml += html;
  })

  document.querySelector('.js-todolist').innerHTML = todoListHtml
}

document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton,index)=>{
deleteButton.addEventListener('click',()=>{
    todoList.splice(index,1);
    renderTodoList();
    saveToStorage();
})});  //all classes are chosen with queryselectorAll and this is like an array because of that we should use loop 






function saveToStorage(){
  localStorage.setItem('todoList', JSON.stringify(todoList));
}