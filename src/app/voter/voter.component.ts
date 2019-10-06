import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

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

}
