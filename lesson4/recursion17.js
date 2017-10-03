//given 2 #'s and func. call the func the smallest #of times.callSmall
const sayHi=()=>{
  console.log('Hello Kinue');
}

const greet=(a,b,sayHi,smallest=0,i=0)=>{
  if(a<b){
    smallest = a;
  }else{
    smallest= b;
  }
  if(smallest==i){
    return;
  }
  sayHi();
  return greet(a,b,sayHi,smallest,i+1);
}

greet(4,6,sayHi);
