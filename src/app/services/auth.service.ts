import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly LOGIN_DETAILS: User = {        //Mock user details
    username: 'YOOBIC',
    password: 'yoobic'
  }

  private isLoggedIn: boolean = false;

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
      if (user === this.LOGIN_DETAILS) {
        this.isLoggedIn = true;
        resolve(true)
      } else {
        this.isLoggedIn = false;
        reject("ERR: Invalid login details")
      }
    });
  }

  /**
   * Returns if a user is currently logged in
   * 
   * @returns
   *       Boolean 
   */
  public getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
