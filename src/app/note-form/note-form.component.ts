import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  noteForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      subject: ['', Validators.required],
      title: ['', Validators.required],
      notes: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.noteForm.valid) {
      const newNote = this.noteForm.value;
      this.noteService.addNote(newNote);
      this.noteForm.reset();
    } else {
      this.noteForm.markAllAsTouched();
    }
  }
}
