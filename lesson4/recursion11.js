//find the biggest number in the array. Max([1,9,2]) -> 9

const Max=(a, i=0, biggest=0)=>{
  if(i==a.length){
  return biggest;
  }
  if(a[i]>biggest){
  biggest= a[i];
  }
  return Max(a,i+1,biggest);
}

console.log(Max([1,9,2]));
