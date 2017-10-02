//remove(5,[1,5,5,6]); -> [1,6]  Given an arr and a number, return an arr where the number is removed. 

const remove = (a,b,i=0,result=[])=>{
  if(b.length==i){
    return result;
  }
  if(a!=b[i]){
    result.push(b[i]);
  }
  return remove(a,b,i+1,result);
}

console.log(remove(5,[1,5,5,6]));
