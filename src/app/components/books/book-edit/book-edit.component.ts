import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../core/services/books/books.service';
import { BookModel } from '../../../core/models/books.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksModule } from '../books.module';

@Component({
  templateUrl: './book-edit.component.html'
})

export class BookEditComponent implements OnInit {
  public book={} ;
  public editeSuccess:boolean;
  
  constructor(
    private route : ActivatedRoute,
    private booksService : BooksService,
    private router : Router,
    
  ) { }

  ngOnInit() { 
    this.booksService.getById(this.route.snapshot.params['id'])
    .subscribe(data=>{
      this.book=data
      
    })
    
  }
 
  updateBooks(id, book){
    this.booksService.updateBook(this.route.snapshot.params['id'],this.book)
    .subscribe(data=>{
      this.editeSuccess=true;
          //this.router.navigate(['details/:id', id]);
          this.router.navigate(['/books']);
          
    })
  }
}
      
