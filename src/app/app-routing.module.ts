import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { PhonesComponent } from "./components/phones/phones.component";

const routes: Routes = [
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "phones",
    component: PhonesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
