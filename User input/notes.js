console.log('Starting notes.js');

function addNotes(title, body){
	console.log('Adding notes: ' , title, body);
};

function listNotes(){
	console.log('Listing notes');
};

function readNotes(title){
	console.log('Reading notes for ' ,title);
};

function removeNotes(){
	console.log('Removing notes for ' ,title);
};
module.exports={
	addNotes,
	listNotes, 
	readNotes, 
	removeNotes
};