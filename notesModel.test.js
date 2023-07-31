const NotesModel = require('./notesModel');

describe('Notes model class', () => {
    it('starts with no notes', () => {
       const notes = new NotesModel();
       expect(notes.getNotes()).toEqual([]);
    });
});