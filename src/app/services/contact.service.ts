import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Contact } from '../../models/Contact';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'Application/json'
  })
}
@Injectable({
  providedIn: 'root'
})

export class ContactService {
  cUrl:string = `https://jsonplaceholder.typicode.com/users`;
  constructor(private http:HttpClient) {

  }
  //get all contacts
  contacts():Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.cUrl}`);
  }
  update(contact:Contact):Observable<any> {
    console.log(contact)
    let url = `${this.cUrl}/${contact.id}`;
    return this.http.put(url,contact,httpOptions);
  }
  read(contact:Contact):Observable<Contact>{
    console.log(contact)
     return this.http.get(`${this.cUrl}/${contact.id}`,httpOptions);
  }
  delete(contact:Contact):Observable<Contact>{
    return this.http.delete(`${this.cUrl}/${contact.id}`,httpOptions);
  }
  create(contact:Contact):Observable<Contact>{
    return this.http.post<Contact>(this.cUrl,contact,httpOptions);
  }


}
