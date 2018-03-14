import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { PhoneService } from "../../services/phone.service";
// import { environment } from "../../../environments/environment";

@Component({
  selector: "app-phones",
  templateUrl: "./phones.component.html",
  styleUrls: ["./phones.component.css"]
})
export class PhonesComponent implements OnInit {
  logoutError: string;
  phoneListError: string;
  phones: any;
  currentUser: string;

  constructor(
    private myAuthService: AuthService,
    private myRouter: Router,
    private myPhoneService: PhoneService
  ) {}

  ngOnInit() {
    this.myAuthService
      .checklogin()
      // If success, we are logged in.
      .then(resultFromApi => {
        this.currentUser = resultFromApi;
        console.log("user is: ", resultFromApi);
        this.getThePhones()
      })

      // Even if you don't do anything on error, catch to avoid a console error.
      .catch(err => {
        console.log(err);
        this.myRouter.navigate(["/"]);
      });
    // this.getThePhones();
  }

  getThePhones() {
    this.myPhoneService.getAllPhones()
    .subscribe(allThePhones => {
      // console.log("allThePhones: ", allThePhones)
        this.phones = allThePhones;
        console.log("phones", this.phones)
      },
      () => {
        this.phoneListError = "Sorry, no phones.";
      }
    );
  } // close getThePhones()
  logMeOutPls() {
    this.myAuthService
      .logout()
      .then(() => {
        this.myRouter.navigate(["/"]);
      })
      .catch(() => {
        this.logoutError = "Log out went bad.";
      });
  } // close logMeOutPls()
}
