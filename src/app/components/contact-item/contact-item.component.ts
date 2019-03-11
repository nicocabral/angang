import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/Contact';
@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit{
  @Input() contact: Contact;
  @Output() deleteContact: EventEmitter<Contact> = new EventEmitter()
  @Output() editContact: EventEmitter<Contact> = new EventEmitter()
  constructor(private contactService:ContactService) {

  }
  ngOnInit(){
    
  }

  //Crud
  onDelete(contact) {
    this.deleteContact.emit(contact);
  }
  onEdit(contact){
   
   this.editContact.emit(contact);
  }

}

