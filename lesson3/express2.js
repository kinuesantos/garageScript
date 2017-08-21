//This function will send the visitor number You are 

const exp = require('express');
const app = exp();
app.listen(3618);


const handle = (req, res)=>{
  c = c + 1;
res.send('You are visitor' + c );
}

c = 0;

app.get('/hello', handle);
