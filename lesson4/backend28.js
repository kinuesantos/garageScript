const fs = require('fs');
const express= require('express')
const app = express();
app.listen(3618);
app.use(express.static('public'));
const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '500mb'}));
const gm = require('gm');

app.post('/send',(req,res)=>{
  const names = req.body.name;
  const comments = req.body.comment;
  const pic = req.body.newPicData;
  const memePath = '/home/kinue/garageScript/lesson4/public/MemePhotos/' + names + '.png';


  fs.writeFile(memePath, `${pic}`, 'base64', (err) =>{
    gm(memePath).fontSize(40).drawText(50, 50, comments).write(memePath, () => {
        let currentMeme = `<img src = 'https://kinue.llip.life/MemePhotos/${names}.png'/>`;
        res.send(currentMeme);
      });
    if(err!== null){
    console.log('Meme ERROR', err)
  }});
});


