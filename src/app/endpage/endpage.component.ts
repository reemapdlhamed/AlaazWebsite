import { Component, OnInit } from '@angular/core';
import { About } from '../models/about';
import { AboutService } from '../services/about.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-endpage',
  templateUrl: './endpage.component.html',
  styleUrls: ['./endpage.component.css'],
})
export class EndpageComponent implements OnInit {
  isReadMore = true;
  About: any;
  abouts: any;
  height: boolean = false;
  readMoreDate: string = ` This is long text replaced with reading more/less link example in
Angular application paragraph text shown here continue THis is
long text replaced with read more/less link example in Angular

`;
  showText() {
    this.isReadMore = !this.isReadMore;
  }

  constructor(public AboutService: AboutService) {}

  ngOnInit(): void { this.AboutService.getDate().subscribe((res) => {
          this.abouts = res;
          console.log(res);
        });}

}

