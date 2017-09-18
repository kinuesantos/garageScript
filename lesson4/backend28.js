const fs = require('fs');
const express= require('express')
const app = express();
app.listen(3618);
app.use(express.static('public'));
const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '500mb'}));
const gm = require('gm');

app.post('/send',(req,res)=>{
  const firstData = req.body.name;
  const secondData = req.body.comment;
  const pic = req.body.newPicData;
  const storingTxt = '/home/kinue/garageScript/lesson4/public/storing.txt';
  const memePath = '/home/kinue/garageScript/lesson4/public/MemePhotos/' + firstData + '.png';
  
  fs.appendFile(storingTxt,`${firstData} : ${secondData}\n`)

  fs.writeFile(memePath, `${pic}`, 'base64', (err) =>{
    gm(memePath).fontSize(40).drawText(50, 50, secondData).write(memePath,() =>  {})
  console.log('Meme ERROR', err)
    res.send('Pic saved');
  });
});
