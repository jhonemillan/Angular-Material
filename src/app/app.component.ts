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
  image1;
  image2;
  image3;
  index = 0;
  selectedImages = [];
  next = true;
  prev = true;
  images = [];
  
  constructor(private userservice: UserService){}

  ngOnInit(){
    this.getUsers();
    this.getImages();
  }

  deleteUser(id:number){    
    this.userservice.deleteUser(id);
  }


  getUsers(){
    this.users = this.userservice.getUsers();
    this.images = this.userservice.getImages();
  }

  getImages(){
    
    this.selectedImages =  this.images[this.index].images;
    console.log(this.images[this.index].images)
    return this.selectedImages;
  }

    nextBlock(){
      if(this.index < this.images.length )
      {
        this.next = true;
        this.index= this.index + 1;
        this.getImages();
      }else{
        this.next = false;
      }
    
  }
  
  previousBlock(){
    if(this.index > 0){
      this.prev = true;
      this.index= this.index - 1;
      this.getImages();
    }else{
      this.prev = false;
    }
  }

}
