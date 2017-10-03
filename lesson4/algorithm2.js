//function that gives you the max number in the array.

const max = (a)=>{
  
  let b = a[0];
  a.forEach((e)=>{
    if(e > b){
      b = e;
    }
  });
  return b;
}

console.log(max([2,3,1,8,5]));
