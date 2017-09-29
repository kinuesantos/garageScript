//given 2 string. removeStr("hello", "lo") ->'he'

const removeStr = (a, b, i=0, resp='',p=0)=>{
  if(i==a.length){
    return resp;
  }
  if(a[i]!= b[p] && a[i]!= b[p+1]){
    resp=resp+a[i];
  }
  return removeStr(a,b,i+1,resp,p);
}

console.log(removeStr("hello", "lo"));
