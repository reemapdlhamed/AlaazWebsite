import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private id :any 
  constructor(public authService: AuthService) {}
  onlogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService
      .login(form.value.phone, form.value.password)
      .subscribe((res) => {
        console.log(res);
        console.log(res.UserId , res.Name);
        const id = res.UserId
        console.log( 'id',id);
        
    
        window.localStorage.setItem("id",res.UserId )
        window.localStorage.setItem( "name",res.Name )

        
      });
    console.log(form.value);

    // console.log(form.value)
  }
  ngOnInit(): void {}
}
