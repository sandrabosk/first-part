import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { environment } from "../../environments/environment";
import "rxjs/add/operator/toPromise";

@Injectable()
export class AuthService {
  constructor(private myHttp: Http) {}

  signup(componentInfo) {
    return (
      this.myHttp
        .post(
          `${environment.apiBase}/api/signup`,

          // Form body information to send to the back end (req.body)
          {
            signUpUsername: componentInfo.username,
            signUpPassword: componentInfo.password
          }

          // Send the cookies across domains
          // { withCredentials: true }
        )

        // Convert from observable to promise
        .toPromise()

        // Parse the JSON
        .then(res => res.json())
    );
  } // close signup()
}
