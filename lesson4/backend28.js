const fs = require('fs');
const express= require('express')
const app = express();
app.listen(3618);
app.use(express.static('public'));
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/send',(req,res)=>{
  const firstdata = req.body.name;
  const seconddata = req.body.comment;
  fs.appendFile('/home/kinue/garageScript/lesson4/public/storing.txt', firstdata + ':' + seconddata + '\n')
});
