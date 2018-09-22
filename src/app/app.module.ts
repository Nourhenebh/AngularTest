import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactService} from './contact.service';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { MatCardModule, MatDialogModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,  ContactComponent , ContactListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MatCardModule, 
    MatDialogModule, 
    MatToolbarModule, 
    MatIconModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  entryComponents: [ContactComponent],
  providers: [
   ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
