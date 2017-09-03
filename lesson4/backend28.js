const fs = require('fs');
const express= require('express')
const app = express();
app.listen(3618);
app.use(express.static('public'));

app.get('/send',(req,res)=>{
  const firstdata = req.query.userNames;
  const seconddata = req.query.userComments;
  fs.appendFile('/home/kinue/garageScript/lesson4/public/storing.txt', firstdata + ':' + seconddata + '\n')
});
