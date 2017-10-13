import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  users = [];

  constructor() { }

  
  addUser(user: any){
    this.users.push(user);
    console.log(this.users);
  }

  deleteUser(id){
    let index = this.users.findIndex(d => d.id === id); //find index in your array
    this.users.splice(index, 1);//remove element from array
  }

  getUsers(){
    console.log('retorno users');
    return this.users;
  }

}
