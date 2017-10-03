//find the biggest number in the array. Max([1,9,2]) -> 9

const max=(a, i=0, biggest=a[i])=>{
  if(i==a.length){
  return biggest;
  }
  if(a[i]>biggest){
  biggest= a[i];
  }
  return max(a,i+1,biggest);
}

console.log(max([1,9,2]));
