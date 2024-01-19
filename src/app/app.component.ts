import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'my-app';
  parentMessage: string = 'Message coming from parent component'
  fromOutputChild: string;

  bool:boolean = true

  imgUrl:string = 'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg?fit=335,335'

  constructor(){
  }
  receiveMsg($event:any){
    console.log($event);
    this.fromOutputChild =$event
  }

  btnClick(){
    console.log("Button Clicked");
    
  }

  //event filtering
  onKeyup(){
    console.log("enter key pressed");
    
  }
}
