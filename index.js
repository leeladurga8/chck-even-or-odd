
let userInput = document.getElementById('input_user')

let result = document.getElementById('result')

function EvenOrOdd(){

    if(userInput.value === ''){
        
      alert('please provide the number');

      return false
    }

  if(userInput.value %2 === 0){
    result.innerHTML = 'It is an even number';  
  }
  else {
    result.innerHTML = 'It is an odd number';
  }

}