import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AuthenticationService } from '../../../core/services/authentication/auth.service';
import { BookModel } from '../../../core/models/books.model';
import { BooksService } from '../../../core/services/books/books.service';

@Component({
 
  templateUrl: './book-add.component.html',
  styleUrls:['./book-add.component.css']
})
export class AddBookComponent  {
  
public model:BookModel;
public genre:string[];
public submitted:boolean;

  constructor(
    private router: Router,
    private authService : AuthenticationService,
    private bookService: BooksService
  ) { 
        this.genre=["drama","sci-fi","fentasy"]
        this.model=new BookModel('',"","",this.genre[0],0)
        this.submitted=false
  }

  addBook(){
      this.bookService.addBook(this.model)
      .subscribe(data=>{
          //console.log(data)
          //this.('Product added.');
        this.router.navigate(['/']);
      })
  }
  
 get diagnostics():string{
     return JSON.stringify(this.model)
 }
 getBack() {
    window.history.back();
  }
  
}
