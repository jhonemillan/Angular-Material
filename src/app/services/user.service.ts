import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  users = [];

  images = [{
    title: "First Block",
    images: ['http://images.freeimages.com/images/large-previews/99b/sunflowers-3-1393020.jpg', 
              'http://images.freeimages.com/images/large-previews/c53/yellowstone-river-1361768.jpg', 
              'http://images.freeimages.com/images/large-previews/e5f/pink-lotus-1396744.jpg']
    },
    {
    title: "Second Block",
    images: ['http://images.freeimages.com/images/premium/previews/1602/16022286-the-middle-sister.jpg', 
            'http://images.freeimages.com/images/large-previews/9f7/wanna-beer-1056482.jpg']
    }
    ];


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

  getImages(){
    return this.images;
  }

}
