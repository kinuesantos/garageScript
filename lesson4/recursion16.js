//given a # and a function that prints something. call the function # times - callMe(5,myfunc)
const sayHi=()=>{
  console.log('hola');
}

const callMe= (a,sayHi,i=0)=>{
  if(i==a){
    return;
  }
  sayHi();
  return callMe(a,sayHi,i+1);
}
callMe(5, sayHi);
