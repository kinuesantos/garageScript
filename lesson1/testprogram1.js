const sum= require('./program1.js');

const test=(input1,input2,total)=>{
  if(sum(input1,input2)===total){
    console.log('You are CORRECT');
  }else{
    console.log('You are INCORRECT');
  }
}

test(5,2,7);
test(-3,5,9);
