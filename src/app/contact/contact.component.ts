import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContactService } from '../contact.service';
import { Validators } from '@angular/forms';
import { Contact } from '../modal/contact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model: any = {};
  public _contactForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
  private dialogRef: MatDialogRef<ContactComponent>,
  private _contactService: ContactService,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
   }

  ngOnInit() {
    this._contactForm = this._formBuilder.group({
      id: [this.data.id],
      name: [ this.data.name, [Validators.required]],
      username: [ this.data.username, [Validators.required]],
      email: [ this.data.email, [Validators.required]],
      phone: [ this.data.phone , [Validators.required]],
      address: this._formBuilder.group({
            street: [ this.data.address.street, [Validators.required]],
            suite: [ this.data.address.suite, [Validators.required]],
            city: [ this.data.address.city, [Validators.required]],
            zipcode: [ this.data.address.zipcode, [Validators.required]]
            }),
            /*https://toddmotto.com/angular-2-forms-reactive#formbuilder-code*/
      website: [ this.data.website , [Validators.required]],
      campany: [ this.data.campany , [Validators.required]]
    });
  }

  onSubmit() {
    
    const result: Contact = Object.assign({}, this._contactForm.value);

    if (isNaN(this.data.id)) {
      this._contactService.addContact(result);
      this.dialogRef.close();
    } else {
      this._contactService.editContact(result);
      this.dialogRef.close();
    }
  }

}
