import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  emailExist = '';
  mobExist = '';
  success = '';
  anotherMsg = '';
  passwordValidation = /^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  constructor(public authService: AuthService) {}
  onSignUp(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService
      .createUser(
        form.value.name,
        form.value.password,
        form.value.phone,
        form.value.email,
        form.value.image
      )
      .subscribe((res) => {
        if (res.ErrorCode === 0) {
          this.success = 'welcome , you registerd succesfully!';
        } else if (res.ErrorCode === 7) {
          this.emailExist = 'email already exist';
        } else if (res.ErrorCode === 9) {
          this.mobExist = 'mobile number is already exist';
        } else {
          this.anotherMsg = "you can't signup";
        }
        console.log(res);
        console.log(res.ErrorCode, 'error code');
      });
    console.log(form.value);
  }
  ngOnInit(): void {}
}
