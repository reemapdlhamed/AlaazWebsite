import { ResetArComponent } from './reset-ar/reset-ar.component';
import { CoursesArComponent } from './courses-ar/courses-ar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutArComponent } from './about-ar/about-ar.component';
import { AboutComponent } from './about/about.component';
import { AcademyArComponent } from './academy-ar/academy-ar.component';
import { AcademyComponent } from './academy/academy.component';
import { AppComponent } from './app.component';
import { ConfirmArComponent } from './confirm-ar/confirm-ar.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { CoursesComponent } from './courses/courses.component';
import { DeliveryArComponent } from './delivery-ar/delivery-ar.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { HomeComponent } from './home/home.component';
import { HomepageArComponent } from './homepage-ar/homepage-ar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LessonsArComponent } from './lessons-ar/lessons-ar.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResetComponent } from './reset/reset.component';
import { RestaurantArComponent } from './restaurant-ar/restaurant-ar.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { WalletComponent } from './wallet/wallet.component';
import { LoginArComponent } from './login-ar/login-ar.component';
import { WalletArComponent } from './wallet-ar/wallet-ar.component';
import { QuestionsArComponent } from './questions-ar/questions-ar.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'home' , component:HomeComponent},
  {path:'homepage' , component:HomepageComponent},
  {path:'restaurant' , component:RestaurantComponent},
  {path:'delivery' , component:DeliveryComponent},
  {path:'about' , component:AboutComponent},
  {path:'academy' , component:AcademyComponent},
  {path:'confirm' , component:ConfirmComponent},
  {path:'lessons/:lessonId' , component:LessonsComponent},
  {path:'homepage-ar' , component:HomepageArComponent},
  {path:'about-ar' , component:AboutArComponent},
  {path:'academy-ar' , component:AcademyArComponent},
  {path:'confirm-ar' , component:ConfirmArComponent},
  {path:'lessons-ar' , component:LessonsArComponent},
  {path:'restaurant-ar' , component:RestaurantArComponent},
  {path:'delivery-ar' , component:DeliveryArComponent},
  {path:'courses' , component:CoursesComponent},
  {path:'reset' , component:ResetComponent},
  {path:'login' , component:LoginComponent},
  {path:'wallet' , component:WalletComponent},
  {path:'question' , component:QuestionsComponent},
  {path:'courses-ar' , component:CoursesArComponent},
  {path:'reset-ar' , component:ResetArComponent},
  {path:'login-ar' , component:LoginArComponent},
  {path:'wallet-ar' , component:WalletArComponent},
  {path:'question-ar' , component:QuestionsArComponent},
  {path:'register',component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
