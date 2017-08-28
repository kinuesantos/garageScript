const fs = require('fs');
const express= require('express')
const app = express();
app.listen(3618);
app.use(express.static('public'));

app.get('/send',(req,res)=>{
  const firstdata = req.query.a1;
  const seconddata = req.query.a2;
  fs.writeFile('/home/kinue/garageScript/lesson4/public/storing.txt', firstdata + seconddata)
});
