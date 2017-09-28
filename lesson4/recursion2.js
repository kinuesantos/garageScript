//create a createString function that takes (5,'hi') -> 'hihihihihi'

const createString = (a,b, i=0, c='')=>{
  if(i==a){
    console.log(c);
    return c;
  }
  return createString(a,b,i+1,c=c+b)
}

createString(5,'hi');
