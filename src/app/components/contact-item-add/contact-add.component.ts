import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import { Contact } from '../../models/Contact';
import { ContactService } from '../../services/contact.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit{
  @Input() contact: Contact;
  @Output() addContact: EventEmitter<any> = new EventEmitter();
  @Output() updateContact: EventEmitter<any> = new EventEmitter();
  contactForm: FormGroup;
  submitted = false;

  constructor(private contactService:ContactService,private formBuilder: FormBuilder) {

  }
  ngOnInit(){
   
    this.contactForm = this.formBuilder.group({
            name: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
        });
      
  }
  get f() { return this.contactForm.controls; }
  onSubmit() {
        this.submitted = true;
        if (!this.contactForm.invalid) {
           const payload = {
             name: this.contact.name,
             email: this.contact.email,
             phone:this.contact.phone,
             id: this.contact.method = "put" ? this.contact.id : ""
           }
          this.contact.method = "put" && typeof this.contact.id !=="undefined" ?this.updateContact.emit(payload) : this.addContact.emit(payload);
          
          this.contact.name = "";this.contact.email="";this.contact.phone="";
          this.contact.method="post";
          
          return; 
          
        }
        return;

       
    }
  
}


