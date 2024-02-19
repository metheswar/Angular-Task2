import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Notes } from '../note.module'; 

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Notes[] = []; 
  constructor(private noteService: NoteService) {} 

  ngOnInit(): void {
    this.notes = this.noteService.getNotes(); 
    console.log(this.notes)
  }
}
