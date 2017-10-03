//count 9('son9birt9');

const count=(a,b,i=0,found=0)=>{
  if(i==a.length){
    console.log(found);
    return found;
  }
  if(a[i]==b){
    found= found+1;
  }
  return count(a,b,i+1,found);
}

count('n9b9',9);
