// module.exports.age = 15;

const fs = require('fs');

var fetchNotes = () => {
  //get existing notes and add them to array
  try {
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  //add new note to array

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
}

var getNote = (title) => {
  var notes = fetchNotes();
  return notes.filter((note) => note.title === title)[0];
}

var removeNote = (title) => {
  var filteredNotes = fetchNotes().filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
}

var logNote = (note) => {
  debugger;
  console.log(`Note title: ${note.title}`);
  console.log(`Note body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
