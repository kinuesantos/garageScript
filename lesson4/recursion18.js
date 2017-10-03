//given an arr and #, return how many times the # shows up in the arr.

const myFunc= (a,b,i=0, times=0)=>{
  if(i==a.length){
    return times;
  }
  if(a[i]==b){
    times = times + 1;
  }
  return myFunc(a,b,i+1,times);
}

console.log(myFunc([1,2,5,1],1));
