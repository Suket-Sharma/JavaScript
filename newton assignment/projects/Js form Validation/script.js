function ageChange(e){
  let age = e.target.value;
  let submitButton = document.querySelector('button');
  let errorHolder = document.querySelector('#errors-holder');
  if(age<5){
    errorHolder.innerHTML ='You need to be atleast 5 years old';
    submitButton.disabled=true;
  }else{
    errorHolder.innerHTML ='';
    submitButton.disabled=false;    
  }
}
function handleSubmit(e){
  e.preventDefault();
  let age = document.querySelector('#q_age').value;
  let ownsPhone = document.querySelector('#q_owns_phone').checked;
  let errorHolder = document.querySelector('#errors-holder');
  let resultHolder = document.querySelector('#result-holder');
  if(age==0){
    resultHolder.innerHTML='Please choose age';
    return;
  }
  if(ownsPhone){
    if(age<13){
      resultHolder.innerHTML='You are too young to have a phone';
    }else{
      resultHolder.innerHTML='Use your phone in moderation';
    }
  }else{
    if(age<13){
      resultHolder.innerHTML='You will get a phone soon';
    }else{
      resultHolder.innerHTML='You should get a phone';
    }
  }

}