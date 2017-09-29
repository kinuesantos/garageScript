//add2Arr([a,b,c],[5,9]) -> abc59

const add2Arr = (first,second,i=0)=>{
  if(i==second.length){
    return first;
  }
  first.push(second[i])
  return add2Arr(first,second,i+1);
}
console.log(add2Arr(["a","b","c"],[5,9]));
