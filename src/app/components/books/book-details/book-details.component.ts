import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BooksService } from '../../../core/services/books/books.service';
import { BookModel } from '../../../core/models/books.model';

@Component({
  templateUrl: './book-details.component.html'
})

export class BookDetailsComponent implements OnInit {
  public book;
 

  constructor(
    private route : ActivatedRoute,
    private booksService : BooksService
  ) { 
    
  }

  ngOnInit() {
    
    this.booksService.getById(this.route.snapshot.params['id'])
    .subscribe(data=>{
      this.book=data
      console.log(this.book)
    }) 
  }
 /*  getBookDetail(id) {
    this.http.get('/book/'+id).subscribe(data => {
      this.book = data;
    });
  } */
}