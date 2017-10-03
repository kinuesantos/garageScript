//greatest common divisor.given 2 numbers, find the biggest common denominator.

const gcd = (a,b,i=0, result=0) =>{
  if(i>=a || i>=b){
    return result;
  }
  if(a%i==0 && b%i==0){
    result = i;
  }
  return gcd(a,b,i+1,result);
}

console.log(gcd(10,20));

