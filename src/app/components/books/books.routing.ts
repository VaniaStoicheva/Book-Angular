import { BooksListComponent } from "./books-list/books.list.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { AddBookComponent } from "./book-add/book-add.component";
import { BookEditComponent } from "./book-edit/book-edit.component";

export const bookRoutes = [
  { path: '',  component: BooksListComponent },
  { path: 'details/:id', component: BookDetailsComponent },
  { path: 'addBook', component: AddBookComponent },
  { path: 'editBook/:id', component: BookEditComponent }
]