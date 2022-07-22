import { Component, OnInit,Input } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
RouterLink

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() deviceSm:boolean |any;
  router: any;
  
  language:string|null="ar";
  
  collapsed = true;
  showME()
  {
    const show=document.querySelector('.show');
    localStorage.setItem("language","en");
    if(localStorage.getItem("language")=='ar')
    this.language=localStorage.getItem("language");
  }

  constructor(){}

  ngOnInit(): any {}

}
