//print out all the files in home - student names except for Kinue.

const f = require('fs');

const read = (err,files)=>{
  const notme=()=>{
    let names = '';
    files.forEach((e) => {
      if(e !== 'kinue'){
        names = '\n' + names + '\n' + e;
      }
    }); 
    return names;
  }
  console.log(notme());
}
f.readdir('/home', read);

