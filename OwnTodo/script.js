todoList=[];
function addTodo(){
  const inputElement = document.querySelector('.input-name')
  const name = inputElement.value;
  const dateElement = document.querySelector('.input-date');
  const dueDate = dateElement.value; 
  todoList.push({
    name, dueDate});
    inputElement.value = '';
    showTodoList();

}

function showTodoList(){
  let todoListHtml= ''

  for (let i=0; i<todoList.length; i++) {
      const todoObject = todoList[i];
      console.log(todoObject)
      const {name, dueDate} = todoObject
    html = `<div >name:${name}</div>  /* class eklenicek */
    <div>dueDate:${dueDate}</div>
    <button>&minus;</button>
    `

    todoListHtml += html
  }
  document.querySelector('.js-list').innerHTML = todoListHtml
}