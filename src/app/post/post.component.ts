import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'] 
})
export class PostComponent {
  title: string = "List of posts";
  //childMessage: string = 'From child component';

  //child - parent
  outputChildMessage : string = 'Message from child component via output '

  @Output() messageEvent = new EventEmitter<string>()

  sendMsg(){
    // console.log("clicked");
    this.messageEvent.emit(this.outputChildMessage)
  }

  //parent - child communication
  @Input() fromParent: string; 

  postParentMsg: string = 'Message from post parent';

  

  

}
