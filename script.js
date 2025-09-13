function unlocked() {
  console.log("function Called");
  let title = document.getElementById('Heading'); // match the exact ID
  let btn =document.getElementById('btn');
  title.innerText = 'Congratulations! Now you can start learning.';

    btn.style.display = 'none';
}

function welcome(){
    let studentName = document.getElementById('name');
    let nameSpan = document.getElementById('nameSpan');

    nameSpan.innerText = studentName.value;
    studentName.value= ""
}

function split(){
  let amount = document.getElementById('amount');
  let person = document.getElementById('person');

  let result = (amount.value /person.value).toFixed(2);
  let resultDiv = document.getElementById('result')
  resultDiv.innerText = result

}
let counter = 0;
 function increment(){
 counter= counter+1;
 let counterResult= document.getElementById('counterResult');
 counterResult.innerText = counter
}
function decrement(){
counter = counter-1;
let counterResult =document.getElementById('counterResult');
counterResult.innerText = counter
}












