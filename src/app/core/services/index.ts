import { AuthenticationService} from './authentication/auth.service';
import { HttpClientService } from './http-client.service';
import { BooksService } from './books/books.service';

export const allServices = [ AuthenticationService, HttpClientService, BooksService ]