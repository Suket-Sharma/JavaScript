let todoList = [
    {
      Item: "Milk Shop",
      duedate:'4/10/2023'
    },
    {
      Item: "Go to college",
      duedate: '4/10/2023'
    }
  ];
function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement  = document.querySelector('#dueDate');
  let todoItem =inputElement.value;  
  let dateItem = dateElement.value;
  todoList.push({Item:todoItem,duedate:dateItem});
  inputElement.value='';
  dateElement.value='';
  displayItems();
}


function displayItems(){
  let containerElement = document.querySelector('.todo-container');
  
  let newHtml ='';
  for(let i=0;i<todoList.length;i++){
    let {Item,duedate} = todoList[i];
    newHtml += `
      <span>${Item}</span>
      <span>${duedate}</span>
      <button class="btn-delete" onclick="todoList.splice(${i},1); displayItems();">Delete</button>
    `
  }
  containerElement.innerHTML=newHtml; 
}