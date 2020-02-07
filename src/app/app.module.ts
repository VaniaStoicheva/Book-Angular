// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthenticationModule } from './components/authentication/auth.module';
import {ServiceModule} from './core/services/services.module';
import { FormsModule} from "@angular/forms"


// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
// Services
import { AuthGuard } from './core/guards/authentication/auth.guard';
import{ routes } from './app-routing'
import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AuthenticationModule,
    FormsModule,
    SharedModule,
    ServiceModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
