//print out all the files in home - student names except for Kinue.

const f = require('fs');

const read = (err,files)=>{
  let names = '';
  const find= (e)=>{
    if(e !=='kinue'){
      names = names + e + '\n';
    }
  }
  files.forEach(find);
  console.log(names);
}
f.readdir('/home', read);

