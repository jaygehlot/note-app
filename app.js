//**********************************
//READ COMMAND PATTERN!
//**********************************

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}

const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
}

var args = yargs
    .command('add', 'Add a new note', {
      title: titleOptions,
      body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
      title: titleOptions
    })
    .command('remove', 'Remove a note', {
      title: titleOptions
    })
    .help()
    .argv;
var command = args._[0];
// console.log('Command:', command);
// console.log('Process Argv',process.argv);
// console.log('Yargs', args);

if (command === 'add') {
  var note = notes.addNote(args.title, args.body);
   _.isUndefined(note) ? console.log('Note title taken!') :
    console.log("Note successfully added!"),
    notes.logNote(note);

} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} notes(s)`);
  allNotes.forEach((note) => notes.logNote(note));

} else if (command === 'read') {
  var retrievedNote = notes.getNote(args.title);
  if (_.isUndefined(retrievedNote)) {
    console.log('Note not found');
  } else {
    notes.logNote(retrievedNote);
  }

} else if  (command === 'remove') {
   notes.removeNote(args.title) ? console.log('Note removed') : console.log('Note not found');
} else {
  console.log('Command not recognised');
}



// console.log(_.isString(true));
// console.log(_.isString('Jay'));
// console.log(_.uniq(['Gehlot']));
// console.log('Result:', notes.add(10, 15));
// console.log(notes.addNote());
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);
