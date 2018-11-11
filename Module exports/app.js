console.log('Starting app.js');

const externalImport=require('./notes.js');

var sum=externalImport.add(12,5);
console.log(`Your name is ${externalImport.name}`);

console.log('Your age is:' +sum );