//compareArr([1,2,3],[1,2,3]) - true

const compareArr = (a,b, i=0)=>{
  if(i== a.length && i == b.length){
    return true;
  }else{
  if(a[i]!=b[i]){
    return false;
  }
  return compareArr(a,b, i+1);
}
}
console.log(compareArr([1,3],[1,2,3,4]));
