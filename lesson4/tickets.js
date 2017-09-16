const express = require('express');
const app = express();
app.listen(3618);
app.use(express.static('public'));

let count = 100;

app.get('/santos',(req,res)=>{
  const data = req.query.number;
  if(data > count){
 res.send('Not enough tickets')
  }else{
    count = count - data;
    res.send('You bought: ' + (data + '') + 'tickets');
  }
}
)


app.get('/update', (req, res)=>{
  res.send(count + '');
});
