// let character = ['|','/','-','\\','|'];

// let time = 100;
// for (let each of character){
//   if (time === (100 + (200 * (character.length - 1)))){
//     process.stdout.write('\r ' + each + '\n');
//   } else {
//   setTimeout(() => {
//     process.stdout.write('\r ' + each + '  ');
//   }, time);
//   time += 200
//   }
// }
  
let char = '|/-\\|';
let time = 0;
for (let i = 0; i<char.length; i++) {
  setTimeout(()=> {process.stdout.write(`\r${char[i]}     `)}, time)
  time += 200;
  if (time === 200*char.length){
    setTimeout(()=> {process.stdout.write(`\r${char[i]}\n`)}, time)
  }
}



// let time = 100;
// for (let each of character){
//   console.log(time)
//   if (time === 100 + (200 * (character.length -2))){
//     process.stdout.write('\r ' + each + '\n');
//   } else {
//   setTimeout(() => {
//     process.stdout.write('\r ' + each + '  ');
//   }, time);
//   }
//   time += 200
// }
