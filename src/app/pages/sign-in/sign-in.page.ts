import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  public user = new FormGroup({                             //Login form controls
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  public isError: boolean = false;      //Whether there are login errors

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  /**
   * Attempts to login the user provided the information in the login form
   */
  public login(): void {
    this.authService.login(this.user.value).then(() => {
      this.router.navigateByUrl('/menu');
    }).catch(() => {
      this.isError = true;
    });
  }

}
