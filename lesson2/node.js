//print out all the files in home - student names except for Kinue.

const f = require('fs');

const read = (err,files)=>{
  let names = '';
  const find= (eachname)=>{
    if(eachname !=='kinue'){
      names = names + eachname + '\n';
    }
  }
  files.forEach(find);
  console.log(names);
}
f.readdir('/home', read);

