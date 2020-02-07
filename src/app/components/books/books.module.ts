import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {FormsModule} from "@angular/forms";
import { BooksService } from "../../core/services/books/books.service";
import { bookComponents } from "./index";
import { bookRoutes } from './books.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(bookRoutes)
  ],
  declarations: [
    ...bookComponents
  ],
  providers:[
    BooksService
  ]
})
export   class BooksModule {  }