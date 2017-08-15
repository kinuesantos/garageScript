const G= require('./program1.js');

const test=(a,b,c)=>{
  if(G(a,b)===c){
  console.log('You are CORRECT');
  }else {console.log('You are INCORRECT');
  }
}

test(5,2,7);
test(-3,5,9);
