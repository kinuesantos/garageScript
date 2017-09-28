//count 9('son9birt9');

const count9=(a,i=0,found=0)=>{
  if(i==a.length){
    console.log(found);
    return found;
  }
  if(a[i]==9){
    found= found+1;
  }
  return count9(a,i+1,found);
}

count9('n9b9');
