import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {SigninComponent} from "./components/signin/signin.component";
import {QuizComponent} from "./components/quiz/quiz.component";

const routes: Routes = [
  {path : 'quiz', component : QuizComponent},
  {path : 'home', component : HomeComponent},
  {path : 'register', component : SigninComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
