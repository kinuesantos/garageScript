//function that gives you the sum of the array

const sum = (a)=>{

  let add = 0;
  a.forEach((e)=>{
    add = add + e;
  });
  return add;
}

console.log(sum([10,8,23,2,10]));
