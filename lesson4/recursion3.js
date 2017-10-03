//create a function using recursion to get the sum of the array.

const sum = (a,i=0)=>{
  if(i==a.length){
    return 0;
  }
  return a[i] + sum(a,i+1);
}

console.log(sum([9,1,5,6]));
