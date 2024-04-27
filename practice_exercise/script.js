const myName = "Suket Sharma";
console.log(myName);
document.querySelector('#display-name').innerText = myName;
const GSTpercentage = 18;
let cartValue = Math.round(((15599 - (10/100 * 15999)) - 272 + (2499 - (41/100*2499)) - 29 + 25 + 20)*(100+GSTpercentage)/100);
console.log(cartValue);

console.log(eval('2+3*7-9'));