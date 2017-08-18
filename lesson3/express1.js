const exp = require('express');
const f = require('fs');
const app = exp();
app.listen(3618);

const read = (err, files)=>{
  let names = '';
  const find = (e)=>{
    if (e !=='kinue'){
    names = names + e + '\n';
    }
  }

  files.forEach(find);

  const handle=(req, res)=>{
  res.send(names);
  }
app.get('/hello',handle);
}
f.readdir('/home', read);
