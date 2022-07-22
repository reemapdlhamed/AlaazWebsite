import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from '../models/auth-data';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}
  login (Phone: any, Password: any) {
  
   return this.http.get<any> (
      `http://projectegy-002-site6.gtempurl.com/api/WebSiteAccount/Login?Phone=${Phone}&Password=${Password}`
    );
  }
  createUser(
    Name: string,
    Password: any,
    Phone: any,
    Email: string,
    Image ?: string
  ) {
    const authData: AuthData = {
      Phone: Phone,
      Password: Password,
      Name: Name,
      Email: Email,
      Image: Image,
    };
    console.log(authData, 'authData');

    return this.http.post<any>(
      ' http://projectegy-002-site6.gtempurl.com/api/WebSiteAccount/Register',
      authData
    );
  }
}
