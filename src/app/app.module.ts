import { NgModule } from '@angular/core';
import {MaterialModule}  from './material.module'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
import { MatIconModule } from '@angular/material/icon';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { EndpageComponent } from './endpage/endpage.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { AboutComponent } from './about/about.component';
import { AcademyComponent } from './academy/academy.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { LessonsComponent } from './lessons/lessons.component';
import { NavbarArComponent } from './navbar-ar/navbar-ar.component';
import { EndpageArComponent } from './endpage-ar/endpage-ar.component';
import { HomepageArComponent } from './homepage-ar/homepage-ar.component';
import { AboutArComponent } from './about-ar/about-ar.component';
import { AcademyArComponent } from './academy-ar/academy-ar.component';
import { ConfirmArComponent } from './confirm-ar/confirm-ar.component';
import { LessonsArComponent } from './lessons-ar/lessons-ar.component';
import { RestaurantArComponent } from './restaurant-ar/restaurant-ar.component';
import { DeliveryArComponent } from './delivery-ar/delivery-ar.component';
import { CoursesComponent } from './courses/courses.component';
import { ResetComponent } from './reset/reset.component';
import { LoginComponent } from './login/login.component';
import { WalletComponent } from './wallet/wallet.component';
import { QuestionsComponent } from './questions/questions.component';
import { CoursesArComponent } from './courses-ar/courses-ar.component';
import { ResetArComponent } from './reset-ar/reset-ar.component';
import { LoginArComponent } from './login-ar/login-ar.component';
import { WalletArComponent } from './wallet-ar/wallet-ar.component';
import { QuestionsArComponent } from './questions-ar/questions-ar.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import {  ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { SignupComponent } from './signup/signup.component';

import { SafePipe } from './safe.pipe';
import { AuthComponent } from './auth/auth.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HomepageComponent,
    RestaurantComponent,
    EndpageComponent,
    DeliveryComponent,
    AboutComponent,
    AcademyComponent,
    ConfirmComponent,
    LessonsComponent,
    NavbarArComponent,
    EndpageArComponent,
    HomepageArComponent,
    AboutArComponent,
    AcademyArComponent,
    ConfirmArComponent,
    LessonsArComponent,
    RestaurantArComponent,
    DeliveryArComponent,
    CoursesComponent,
    ResetComponent,
    LoginComponent,
    WalletComponent,
    QuestionsComponent,
    CoursesArComponent,
    ResetArComponent,
    LoginArComponent,
    WalletArComponent,
    QuestionsArComponent,
    SignupComponent,
    SafePipe,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule, MaterialModule ,
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
