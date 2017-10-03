//sayHello(5) -> 'hello' 'hello' ...x5

const sayHello = (a,i=0)=>{
  if(i<a){
    console.log('hello');
    sayHello(a, i+1);
}
}
sayHello(3);
