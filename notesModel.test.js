const NotesModel = require('./notesModel');

describe('Notes model class', () => {
    it('starts with no notes', () => {
       const notes = new NotesModel();
       expect(notes.getNotes()).toEqual([]);
    });
});

describe('Notes model class', () => {
    it('addes a note', () => {
        const notes = new NotesModel();
        notes.addNotes('Test Note');
        expect(notes.getNotes()).toEqual(['Test Note']);
    });
});