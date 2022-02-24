import {Account} from './Account.js';

const dataSujal = {
  dob : '2000-01-01',
  name : 'Sujal Pun'
}

const dataRashi = {
  dob : '2000-02-02',
  name : 'Rashi Adhikari'
}

let accSujal = new Account(dataSujal);
let accRashi = new Account(dataRashi);


//RENDERING
const render = () => {
  const myElement1 = document.getElementById('container-1');
  myElement1.innerText = `Name : ${accSujal.name}
  DOB : ${accSujal.dob} 
  Active: ${accSujal.activeStatus} 
  Balance: ${accSujal.balance}`;

  const myElement2 = document.getElementById('container-2');
  myElement2.innerText = `Name : ${accRashi.name}
  DOB : ${accRashi.dob} 
  Active: ${accRashi.activeStatus} 
  Balance: ${accRashi.balance}`;
}

render();

const step1 = () => {
  accSujal.deposit(1000);
  render();
}
const step2 = () => {
  accSujal.transferMoney(300, accRashi);
  render();
}
const step3 = () => {
  accRashi.deduct(200);
  render();
}
const step4 = () => {
  alert(accRashi.viewStatement()); //this is only for quick fix, it is a bad practise.
  render();
}
const step5 = () => {
  alert("Rs. "+accSujal.displayBalance()); //this is only for quick fix, it is a bad practise.
  render();
}

document.getElementById('step1').onclick = step1;
document.getElementById('step2').onclick = step2;
document.getElementById('step3').onclick = step3;
document.getElementById('step4').onclick = step4;
document.getElementById('step5').onclick = step5;
