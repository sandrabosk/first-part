import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { environment } from "../../environments/environment";

@Injectable()
export class PhoneService {

  constructor(private myHttp: Http) {}

  getAllPhones(){
    return this.myHttp.get(`${environment.apiBase}/api/phones`,
    { withCredentials: true })
    .map(res => res.json())
  }
}
