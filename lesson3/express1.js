const exp = require('express');
const f = require('fs');
const app = exp();
app.listen(3618);


const handle=(req, res)=>{

  const read = (err, files)=>{
    let names = '';
    const find = (e)=>{
      if (e !=='kinue'){
        names = names + e + '\n';
      }
    }

    files.forEach(find);

    res.send(names);
  }

  f.readdir('/home', read);
}
app.get('/hello',handle);
