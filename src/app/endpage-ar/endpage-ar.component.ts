import { Component, OnInit } from '@angular/core';
import { About } from '../models/about';
import { AboutService } from '../services/about.service';
@Component({
  selector: 'app-endpage-ar',
  templateUrl: './endpage-ar.component.html',
  styleUrls: ['./endpage-ar.component.css'],
})
export class EndpageArComponent implements OnInit {
  isReadMore = true;
  abouts: any;
  readMoreDate: string = `   هذا نص طويل تم استبداله بقراءة مثال رابط أكثر / أقل في نص فقرة
  تطبيق Angular الموضح هنا متابعة. هذا نص طويل تم استبداله بقراءة
  `;
  showText() {
    this.isReadMore = !this.isReadMore;
  }

  constructor(public AboutService: AboutService) {}

  ngOnInit(): void {
      this.AboutService.getDate().subscribe((res) => {
          this.abouts = res;
          console.log(res);
        });
  }
}
// export class EndpageComponent implements OnInit {
//   isReadMore = true;
//   About: any;
//   abouts: any;
//   height: boolean = false;
//   readMoreDate: string = ` This is long text replaced with reading more/less link example in
// Angular application paragraph text shown here continue THis is
// long text replaced with read more/less link example in Angular

// `;
//   showText() {
//     this.isReadMore = !this.isReadMore;
//   }

//   constructor(public AboutService: AboutService) {}

//   ngOnInit(): void { 
  //this.AboutService.getDate().subscribe((res) => {
//           this.abouts = res;
//           console.log(res);
//         });}

// }



