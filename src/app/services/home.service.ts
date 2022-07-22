import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Websiteindex } from '../models/websiteindex';
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  baseurl: string = 'http://projectegy-002-site6.gtempurl.com/api/WebSiteIndex/';
  private homes: Websiteindex[] = [];
  constructor(public http: HttpClient) {}
  getHomeData() {
    return this.http.get<Websiteindex[]>('http://projectegy-002-site6.gtempurl.com/api/WebSiteIndex');
  }
}
