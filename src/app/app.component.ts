import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'my-app';
  //parent to child data sharing
  parentMessage: string = 'Message coming from parent component'

  //child to parent data sharing
  fromOutputChild: string;

  bool:boolean = true

  imgUrl:string = 'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg?fit=335,335'

  // ngFor directive
  postArray : Array<string> = ['post1', 'post2', 'post3', 'post4', 'post5']
  constructor(){
  }

  //child-parent using @output
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

  //template form func()
  onSubmit(f: NgForm){
    console.log(f.value);
    
  } 

  getValue(f: any){
    console.log(f);
    
  }
}
