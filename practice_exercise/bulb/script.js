var bulbElement = document.querySelector('.bulb');
var btnElement = document.querySelector('.btn');
var h=document.querySelectorAll("h1");
console.log(h);
h.forEach(function(e){
  console.log(e);
})



btnElement.addEventListener("click", function(){
  bulbElement.style.backgroundColor=="green";
  btnElement.innerHTML="OFF";
  if(bulbElement.style.backgroundColor=="green"){
    bulbElement.style.backgroundColor="yellow";
    btnElement.innerHTML="ON";

  }
  else{
    bulbElement.style.backgroundColor="green";
  }
})