import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
// services stuff
import { AuthService } from './services/auth.service';
import { SignupComponent } from './components/signup/signup.component'
import { HttpModule } from "@angular/http";


//routes
import { AppRoutingModule  } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
