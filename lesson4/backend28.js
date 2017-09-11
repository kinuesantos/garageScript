const fs = require('fs');
const express= require('express')
const app = express();
app.listen(3618);
app.use(express.static('public'));
const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '500mb'}));

app.post('/send',(req,res)=>{
  const firstData = req.body.name;
  const secondData = req.body.comment;
  const pic = req.body.newPicData;
  fs.appendFile('/home/kinue/garageScript/lesson4/public/storing.txt',`${firstData} : ${secondData}\n`)

  fs.writeFile('/home/kinue/garageScript/lesson4/public/selfies.png',`${pic}`, 'base64') 
  res.send('Pic taken');
});

