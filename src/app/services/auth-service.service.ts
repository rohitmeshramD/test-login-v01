import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private currentUserSubject: BehaviorSubject<User>;
  public demoCurrentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('demoCurrentUser')));
    this.demoCurrentUser = this.currentUserSubject.asObservable();
  }
  public get demoCurrentUserValue(): User {
    return this.currentUserSubject.value;
  }

  sendOtp(username) {
    console.log('send otp');
    // TODO: need endpoint
    return this.http.post<any>(`/sendOtp`, { username })
  }

  loginUsingOtp(username, otp) {
    console.log('login');
    // TODO: need endpoint
    return this.http.post<any>(`/authenticate`, { username, otp })
      .pipe(map(user => {// login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('demoCurrentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  logout(data) {
    console.log('logout');
    // remove user from local storage to log user out
    localStorage.removeItem('demoCurrentUser');
    this.currentUserSubject.next(null);
  }
}

// Model for User
class User {
  id?: number;
  username: string;
  password: string;
  // token: string;
}