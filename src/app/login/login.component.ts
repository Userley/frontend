import { Component, OnInit } from '@angular/core';
import { UserLogin } from './model/user-login';
import { AuthService } from './services/auth.service';
import { LoginResponse } from './model/login-response';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:UserLogin= new UserLogin()
  alerta:boolean=false
  loginResponse:LoginResponse = new LoginResponse()
  loading:boolean = false

  constructor(private auth:AuthService, private login:LoginService, private router:Router) { }

  ngOnInit() {
  this.auth.logout(),
  this.getToken()
  }



  getToken(){

    this.auth.getToken().subscribe( token => {
      console.log("token:", token)
      sessionStorage.setItem('token', token);
    })
  }

  acceso(){

    console.log(this.user)

    this.loading = true


    this.login.validarUsuario(this.user).subscribe( data =>{

      console.log("acceso:", data)

      this.loginResponse = data

      if(this.loginResponse.OK){

        sessionStorage.setItem('currentUser', JSON.stringify(this.loginResponse));
        sessionStorage.setItem(this.loginResponse.NOMBRE_EMP, JSON.stringify(this.loginResponse.NOMBRE_EMP));
        this.router.navigate(["/home"])


      }else {
        this.alerta = true
        this.loading = false
      }

    })


  }





}
