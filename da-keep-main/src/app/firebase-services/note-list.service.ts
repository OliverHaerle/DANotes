import { Injectable, inject } from '@angular/core';
import { Note } from '../interfaces/note.interface';
import { Firestore, collection, collectionData, doc, onSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteListService {

  trashNotes: Note[] = [];
  normalNotes: Note[] = [];


  unsubTrash;
  unsubList;

  firestore: Firestore = inject(Firestore);

  constructor() {
    this.unsubTrash = this.subTrashList():
  }

  setNoteObject(obj: any, id: string): Note {
    return {
      id: id || "",
      type: obj.type || "note",
      title: obj.title || "note",
      content: obj.content || "",
      marked: obj.marked || false,
    }
  }

  ngonDestroy() {
    this.unsubNotes();
    this.unsubList();
  }

  // const itemCollection = collection(this.firestore, 'items');

  subTrashList() {
    return onSnapshot(this.getTrashRef(), (list) => {
      this.trashNotes = [];
      list.forEach(element => {
        this.trashNotes.push(this.setNoteObject(element.data(), element.id));
      });
    });
  }

  subNotesList() {
    return onSnapshot(this.getNotesRef(), (list) => {
      this.normalNotes = [];
      list.forEach(element => {
        console.log(this.setNoteObject(element.data(), element.id));
      });
    });
  }

  getNotesRef() {
    return collection(this.firestore, 'notes')
  }

  getTrashRef() {
    return collection(this.firestore, 'trash')
  }

  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }

}
