import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {Injectable} from '@angular/core';
import {AuthGuard} from '../shared/services/auth/auth.guard';

interface User {
  userName: string;
  password: string;
  isAuthenticated: boolean;
}

@Injectable()
export class UsersAuthService {

  current: User;

  users: User[] = [
    {
      isAuthenticated: true,
      password: '1234',
      userName: 'chanan'
    },
    {
      isAuthenticated: true,
      password: '1234',
      userName: 'bar'
    }
  ];

  constructor(private router: Router,
              private snack: MatSnackBar,
              private auth: AuthGuard) {
  }

  logIn(username: string, password: string) {
    let userFound = false;
    this.users.forEach((user) => {
      if (user.userName === username.toLowerCase()) {
        if (password.toString() === user.password.toString()) {
          user.isAuthenticated = true;
          this.auth.isAuthenticated = true;
          this.current = user;
          this.router.navigate(['/trip-planning']);
          userFound = true;
        }
      }
    });
    if (!userFound) {
      this.snack.open('failed to login', 'FAIL', {duration: 4000});
    }
  }

  signOut() {
    this.users.forEach((user) => {
      if (user.userName === this.current.userName.toLowerCase()) {
        user.isAuthenticated = false;
        this.current = null;
        this.auth.isAuthenticated = false;
        this.router.navigate(['/sessions/signin']);
      }
    });
  }

  signUp(signupData: any) {
    const user: User = {
      userName: signupData.username,
      password: signupData.password,
      isAuthenticated: false
    };
    this.users.push(user);
    this.router.navigate(['/sessions/signin']);
  }
}
