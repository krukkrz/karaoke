import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  votes:number = 0;

  constructor(
    private chatService: ChatService

  ) { }

  ngOnInit() {
    this.sendVote(0);
    this.getVotes();
  }

  sendVote(vote:number){
    this.chatService.vote(vote);
  }

  private getVotes(){
    this.chatService.getVotes().subscribe((votes:number) =>{
      this.votes = votes
    })
  }

  reset(){
    let currentVotes = this.votes;
    this.sendVote(-currentVotes)
  }

}
