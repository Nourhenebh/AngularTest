import { Injectable } from '@angular/core';
import {Contact} from './modal/contact';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  _contactList : Contact []=[];

  constructor(private http : HttpClient) { 
    let obs = this.http.get('https://jsonplaceholder.typicode.com/users')
    obs.subscribe((response:Contact[])=>{this._contactList=response;
                              console.log(response);});
  
   }

  addContact(contact: Contact) {
    contact.id = this._contactList.length + 1;
    this._contactList.push(contact);
  }

  editContact(contact: Contact) {
    const index = this._contactList.findIndex(c => c.id === contact.id);
    this._contactList[index] = contact;
  }

  deleteContact(id: number) {
    const contact = this._contactList.findIndex(c => c.id === id);
    this._contactList.splice(contact, 1);
  }

  getAllContacts() {
    return this._contactList;
  }
}
