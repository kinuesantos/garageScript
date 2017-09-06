const express= require('express');
const app = express();
app.listen(3618);

const students= ['mc', 'sm', 'ks', 'ms'];

students.forEach((e)=>{
  if(e=='sm'){
  console.log('true');
  }else{
  console.log('false');
  }
}
)
