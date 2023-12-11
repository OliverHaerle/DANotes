import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteComponent } from './note-list/note/note.component';
import { FormsModule } from '@angular/forms';
import { AddNoteDialogComponent } from './add-note-dialog/add-note-dialog.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoteListComponent,
    NoteComponent,
    AddNoteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"da-keep-b4a9b","appId":"1:342848032853:web:d99c7d115ffe8a4623c4dc","storageBucket":"da-keep-b4a9b.appspot.com","apiKey":"AIzaSyCOLxypxtKALkOjSYXBgT6kCO1NzxGFPB0","authDomain":"da-keep-b4a9b.firebaseapp.com","messagingSenderId":"342848032853"})),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp({"projectId":"danotes-1f172","appId":"1:559178857540:web:4b3b1ba8437afa8ca21011","storageBucket":"danotes-1f172.appspot.com","apiKey":"AIzaSyA2kXToujx_GILd4d00E-BNBdM5nNMxJbc","authDomain":"danotes-1f172.firebaseapp.com","messagingSenderId":"559178857540"}))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
