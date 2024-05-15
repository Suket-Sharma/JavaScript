function addTask(event) {
  event.preventDefault();
  const inputNode = document.querySelector('.todo-input'); // Changed to querySelector and added dot for class selector
  const task = inputNode.value;
  const divNode = document.createElement('div');
  const liNode = document.createElement('li');
  liNode.innerText = task; // Added to set the task text to liNode
  const completeButton = document.createElement('button');
  completeButton.innerText = 'Complete';
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  divNode.appendChild(liNode);
  divNode.appendChild(completeButton);
  divNode.appendChild(deleteButton);
  const ulNode = document.querySelector('.todo-list'); // Changed to querySelector and added dot for class selector
  ulNode.appendChild(divNode);
  addDeleteFunctionailty(deleteButton,divNode);
  addCompleteFunctionality(completeButton,liNode);
}

document.querySelector('.todo-button').addEventListener('click', addTask); // Changed to querySelector and added dot for class selector

function addDeleteFunctionailty(deleteButton,divNode){
  deleteButton.addEventListener('click',function(){
    divNode.remove();
  })
}

function addCompleteFunctionality(completeButton,liNode){
  completeButton.addEventListener('click',function(){
    if(liNode.style['text-decoration']!==''){
      liNode.style['text-decoration']='';
    }else{
      liNode.style['text-decoration']='line-through solid rgb(0, 0, 0)';
    }
  })
}


