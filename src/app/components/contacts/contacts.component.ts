import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/Contact';
import { ContactService } from '../../services/contact.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactComponent{
  title = 'Tour of Heroes';
  contacts : Contact;
  contact = {};
  constructor(private contactService:ContactService) {

  }
  ngOnInit(){
 
    this.loadContact();
  }

  loadContact(){
    this.contactService.contacts().subscribe(contact => {
      this.contacts = contact;
    });
  }

  deleteContact(contact:Contact) {
    let confirm = window.confirm("Are you sure you want to delete contact?");
    if(confirm){
      this.contacts = this.contacts.filter(c=>c.id!=contact.id);
      this.contactService.delete(contact).subscribe();
    }
    
  }

  editContact(contact:Contact){
    
    this.contact = contact;
    this.contact.method ="put";
    console.log(this.contact);
  }
  addContact(contact:Contact){
    
      this.contactService.create(contact).subscribe(response => {
        this.contacts.push(response);
        
        return response ;
      })
   
    
  }

  updateContact(contact:Contact){
    this.contacts=this.contacts.filter(val=>val.id!=contact.id);
    this.contacts.push(contact);
    this.contactService.update(contact).subscribe(response => {
      return response;
    })
  }
  

  
}


