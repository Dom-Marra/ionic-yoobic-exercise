import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly LOGIN_DETAILS: User = {        //Mock user details
    email: 'YOOBIC@yoobic.com',
    password: 'yoobic'
  }

  //Mock JWT
  private readonly AUTH_TOKEN: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IllPT0JJQ0B5b29iaWMuY29tIiwiZXhwIjozMjUwMzcwODgwMH0.U9-aN5c1QMw5HiqdwvRXYciHd68Awincm0OZtTG1zz4';

  constructor() { }

  /**
   * Checks the validity of the login details
   * 
   * @param user
   *        User: the user details that is submitted for validation 
   * @returns 
   *        Boolean: whether the validation is successful or not
   */
  public login(user: User): Promise<any> {
    return new Promise((resolve, reject) => {
      if (user.email === this.LOGIN_DETAILS.email && user.password === this.LOGIN_DETAILS.password) {
        localStorage.setItem('login_token', this.AUTH_TOKEN);
        resolve(true)
      } else {
        reject("ERR: Invalid login details")
      }
    });
  }

  /**
   * Logs out the user from the application
   */
  public logout(): void {
    localStorage.removeItem('login_token');
  }

  /**
   * Returns if a user is currently logged in
   * 
   * @returns
   *       Boolean 
   */
  public getIsLoggedIn(): boolean {
    const payload = localStorage.getItem('login_token')?.split('.')[1];

    if (!payload) return false;

    const parsedPayload = JSON.parse(atob(payload));
    return parsedPayload.exp > Date.now() / 1000;
  }
}
