//sayHello(5) -> 'hello' 'hello' ...x5

const sayHello = (a,i=0)=>{
  if(i==a){
    return '';
  }
  console.log('hello');
  return sayHello(a, i+1);
}

sayHello(3);
