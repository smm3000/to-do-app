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

describe('Notes model class', () => {
    it('add multiple notes', () => {
        const notes = new NotesModel();
        notes.addNotes('Test Note 1');
        notes.addNotes('Test Note 2');
        expect(notes.getNotes()).toEqual(['Test Note 1', 'Test Note 2']);
    });
});

describe('Notes model class', () => {
    it('empties notes', () => {
        const notes = new NotesModel();
        notes.addNotes('Test Note 1');
        notes.reset();
        expect(notes.getNotes()).toEqual([]);
    })
})