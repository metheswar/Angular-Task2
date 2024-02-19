import { Injectable } from '@angular/core';
import { Notes } from './note.module';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }

  getNotes(): Notes[] {
    return JSON.parse(localStorage.getItem('storedNotes')) || [];
  }

  addNote(note: Notes) {
    const storedNotes = this.getNotes();
    storedNotes.push(note);
    localStorage.setItem('storedNotes', JSON.stringify(storedNotes));
  }
}
