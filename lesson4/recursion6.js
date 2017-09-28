//removeExtra ('hellllo') -> helo

const removeExtra= (a,i=0, prev='',result='')=>{
  if(i==a.length){
    return result;
  }
  if(a[i]==prev){
    }else{
      result= result + a[i];
      prev = a[i];
    }
  return removeExtra(a, i+1, prev,result);
}

console.log(removeExtra('hellllo'));
