import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/Contact';
import { ContactService } from '../../services/contact.service';
@Component({
  selector: 'app-404',
  templateUrl: './404.component.html',
  styleUrls: ['./404.component.css']
})
export class PageNotFoundComponent{
  title = 'Tour of Heroes';
  contact : Contact;
 
  constructor(private contactService:ContactService) {

  }
  ngOnInit(){

    
  }

 
  

  
}


