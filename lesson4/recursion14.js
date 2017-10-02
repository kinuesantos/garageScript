//customInterval([5,9,2],'hello') -> hello hello hello in 5,9,2secs

const greet=(b)=>{
console.log(b);
}

const customInterval = (a,b,i=0)=>{
  if(i==a.length){
    return;
  }else{
 setTimeout(function(){greet(b)},(a[i]*1000));
  }
  return customInterval(a,b,i+1);
}

customInterval([1,5,2],'heyy');
