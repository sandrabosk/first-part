import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
// services stuff
import { AuthService } from './services/auth.service';
import { SignupComponent } from './components/signup/signup.component'
import { LoginComponent } from "./components/login/login.component";
import { HttpModule } from "@angular/http";
import { PhoneService } from "./services/phone.service";


//routes
import { AppRoutingModule  } from './app-routing.module';
import { PhonesComponent } from './components/phones/phones.component';
import { NewPhoneComponent } from './components/new-phone/new-phone.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    PhonesComponent,
    NewPhoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService, PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
