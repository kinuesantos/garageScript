//reverseArr([1,5,2]) -> [2,5,1]

const reverseArr = (a,i=0,res=[], c=1)=>{
  if(i==a.length){
    return res;
  }
  res.push(a[a.length-c]);
  return reverseArr(a,i+1,res, c+1);
}

console.log(reverseArr([1,5,2]));
