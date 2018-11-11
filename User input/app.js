console.log('Starting app.js');

const notes=require('./notes.js');
const yargs=require('yargs');

var processArgs=process.argv;
//console.log(processArgs);

var argv=yargs.argv;
console.log(argv);

var command=processArgs[2];


if(command==='add'){
	notes.addNotes(argv.title , argv.body);
}

else if (command==='list'){
	notes.listNotes();
}

else if (command==='read'){
	notes.readNotes(argv.title);
}
else if (command === 'remove'){
	notes.removeNotes(argv.title);
}

else{
	console.log("Command not found");
}