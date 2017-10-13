import { UserService } from './../services/user.service';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule, MatInputModule} from '@angular/material';


@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  firstname = '';
  lastname = '';
  email = '';
  id = 0;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  cleanFields(){
    this.firstname = '';
    this.lastname = '';
    this.email = '';
  }

  
  save(){
    this.id++;
    let user = {
      id: this.id,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email
    };

    this.cleanFields();

    this.userService.addUser(user);
  }

}
