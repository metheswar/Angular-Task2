import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteFormComponent } from './note-form/note-form.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteListComponent } from './note-list/note-list.component';

const routes: Routes = [
  {path:'',component: NoteFormComponent},
  {path:'list',component: NoteListComponent},
  {path:'edit', component:NoteEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
