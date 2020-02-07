import { Component, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from './core/services/authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BookStore';

  constructor(
    
    private authService : AuthenticationService
  ) { 
    
  }
  
}
