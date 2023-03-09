import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {User} from "../../models/user-model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  formValues = this.formBuilder.group({
    username:new FormControl(''),
    password:new FormControl(''),
  })

  onSubmit() {
    let user : User = new User(this.formValues.value.username, this.formValues.value.password);
    this.userService.login(user);
  }
}
