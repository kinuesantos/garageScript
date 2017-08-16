const f = require('fs');

const read = (err,files)=>{
  console.log(files);
}

f.readdir('/home', read);
