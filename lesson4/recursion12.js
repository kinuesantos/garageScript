//MaxArr([[1,9,2],[5,9,6],[10,20,1]]) -> [9,9,20]

const findB=(a, i=0, biggest=a[i])=>{
  if(i==a.length){
    return biggest;
  }
  if(a[i]>biggest){
    biggest = a[i];
  }
  return findB(a,i+1,biggest);
}

const maxArr = (a,i=0,resultArr=[])=>{
  if(i==a.length){
  return resultArr;
  }
  resultArr.push(findB(a[i]));
  return maxArr(a,i+1,resultArr)
} 
console.log(maxArr([[1,9,2],[5,9,6],[10,20,1]]));
