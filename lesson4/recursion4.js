//create a function to give you the biggest number. function Max([5,26,15]) -> 26

const Max = (a, i=0, bigger= a[i])=>{
  if(i==a.length-1){
    console.log(bigger);
    return bigger;
  }
  if(bigger<a[i+1]){
  bigger= a[i+1];
  }
  Max(a,i+1, bigger);
}

Max([10,25,60,12]);

