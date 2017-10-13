import { UserService } from './services/user.service';
import { Component } from '@angular/core';
import {MatToolbarModule, MatButtonModule} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  users = [];

  constructor(private userservice: UserService){}

  ngOnInit(){
    this.getUsers();
  }

  deleteUser(id:number){    
    this.userservice.deleteUser(id);
  }


  getUsers(){
    this.users = this.userservice.getUsers()
  }

}
