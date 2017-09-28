//create a createString function that takes (5,'hi') -> 'hihihihihi'

let c = '';
const createString = (a,b, i=0)=>{
  if(i==a){
    console.log(c);
    return c;
  }
  c = c + b;
  return createString(a,b,i+1)
}

createString(5,'hi');
