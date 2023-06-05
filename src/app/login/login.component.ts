import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  errorMsg = "";

  constructor() {}

  ngOnInit(): void {
  }

  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = "Usuário é obrigatório"
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Password é obrigatório"
    } else {
      this.errorMsg = "";
    }
  }

}
