const express = require('express');
const app = express();
app.listen(3618);
app.use(express.static('public'));

let vertical = 0;
let horizontal = 0;

app.get('/moving', (req, res) =>{
  const data = req.query.a;
  if(data == 'up'){
    vertical = vertical - 50;
     res.send(vertical + "");
  }
  
  if(data == 'down'){
    vertical = vertical + 50;
    res.send(vertical + "");
  }

  if(data =='right'){
    horizontal = horizontal + 50;
    res.send(horizontal + "");
  }
  
  if(data == 'left'){
    horizontal = horizontal - 50;
    res.send(horizontal + "")
  }
});

app.get('/currentv', (req, res)=>{
  res.send(vertical + "");
})

app.get('/currenth', (req, res)=>{
  res.send(horizontal + "");
})
