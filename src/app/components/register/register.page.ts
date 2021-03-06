import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public email: string;
  public name: string;
  public password: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onSubmitRegister(){
    this.auth.register(this.email,this.password, this.name).then(auth=> {
      this.router.navigate(['/home']);
      console.log(auth)
    }).catch(err=> console.log(err))
  }
}
