import { Injectable } from "@angular/core";
import { BookModel } from "../../models/books.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

const appKey = "kid_SyUcZf6WG" 
const appSecret = "4c43d811d4964f36ac65275c407ff703" 
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const addBookUrl = `https://baas.kinvey.com/user/${appKey}/addBooks`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`

@Injectable()
export class BooksService {
  
  constructor(
    private http : HttpClient
  ){
    
  }

  addBook(book:BookModel): Observable<Object> {
    const body = JSON.stringify(book);
    return this.http.post(`https://baas.kinvey.com/appdata/${appKey}/books`, body, {
      headers: new HttpHeaders().set('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'))
        .set('Content-Type', 'application/json')
    });
  }
  getAllBooks(){
    return this.http.get(`https://baas.kinvey.com/appdata/${appKey}/books`, {
      headers: new HttpHeaders().set('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'))
        .set('Content-Type', 'application/json')
    });
  }
 

  getById(id : number) : Observable<Object> {
    return this.http.get(`https://baas.kinvey.com/appdata/${appKey}/books/`+id, {
      headers: new HttpHeaders().set('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'))
        .set('Content-Type', 'application/json')
    });
  } 

 
  updateBook(id, data) {
    const body = JSON.stringify(data);
    return this.http.put(`https://baas.kinvey.com/appdata/${appKey}/books/`+id, body,{
      headers: new HttpHeaders().set('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'))
        .set('Content-Type', 'application/json')
    });
  }
 

  private createAuthHeaders(type : string) : HttpHeaders {
    if (type === 'Basic') {
      return new HttpHeaders({
        'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
        'Content-Type': 'application/json'
      })
    } else {
      return new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      })
    }
  }
}