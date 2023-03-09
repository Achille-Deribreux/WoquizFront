import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {User} from "../../models/user-model";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
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
