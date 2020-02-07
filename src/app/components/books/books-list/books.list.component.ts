import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../core/services/books/books.service';
import { BookModel } from '../../../core/models/books.model';

@Component({
  templateUrl: './books.list.component.html'
})

export class BooksListComponent implements OnInit {
  public books ;
  
  constructor(
    private booksService : BooksService
  ) { }

  ngOnInit() { 
     this.booksService.getAllBooks()
     .subscribe(booksArr=>{
       this.books=booksArr
      
     })
  }
}