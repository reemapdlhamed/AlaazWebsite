import { Injectable } from '@angular/core';
import { About } from '../models/about';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AboutService {
  baseUrl:string = 'http://projectegy-002-site6.gtempurl.com/api/WebSiteAboutUs/'
  private abouts: About[] = [];
  private aboutUpdate = new Subject<About[]>();
  // injecting Http
  constructor(private http: HttpClient) {}
  getDate() {
    return this.http.get<About[]>(
   this.baseUrl
    );
    // .subscribe((res) => {
    //   console.log(this.res);
    // });
    //rxjs
  }
  getPostUpdateListener() {
    return this.aboutUpdate.asObservable();
  }
}
