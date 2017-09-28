//isInArr([1,9,2], 9) -> true

const isInArr=(a, b, i=0, result='')=>{
  if(i==a.length){
    return result;
  }
  if(a[i]==b){
    result= true;
    return isInArr(a,b,i=a.length,result);
  }else{
    result= false;
    }
  return isInArr(a,b,i+1,result);
}

console.log(isInArr([1,9,2],9));
