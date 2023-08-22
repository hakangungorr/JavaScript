const todoList = [];
function renderTodoList(){
  todoListHtml= ''
  
  for(let i = 0 ; i < todoList.length; i++) {
  const todo = todoList[i];
  const html= `<li>${todo}</li>`
  
  todoListHtml += html;
  
}
console.log(todoListHtml);
document.querySelector('.js-todolist').innerHTML= todoListHtml;



}


function addTodo() {
  const inputElement = document.querySelector('.js-name-input')
  console.log(inputElement)
  const name = inputElement.value; 
  todoList.push(name);
  inputElement.value = '';
  renderTodoList();
}


