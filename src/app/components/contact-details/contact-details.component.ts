import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/Contact';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailComponent{
  title = 'Tour of Heroes';
  contact : Contact;
 
  constructor(private contactService:ContactService,private route:ActivatedRoute) {

  }
  ngOnInit(){
    this.contactService.read({id:this.route.snapshot.params['id']}).subscribe(res=>{
      this.contact=res;
    })
    
  }

 
  

  
}


