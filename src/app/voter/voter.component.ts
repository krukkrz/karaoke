import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  votes = []
  id:any;
  voted = 0;
  reseted = 1;
  canVote = true;

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit() {    
    this.sendVote(0);
    this.canVote = true;
    this.getVotes();
    this.getReseted();
  }


  sendVote(vote:number){
    this.chatService.vote(vote);
    this.voted = vote;
    this.canVote = false
  }

  private getVotes(){
    this.chatService.getVotes().subscribe((votes:any) =>{
      this.votes = votes;
    })
  }

  private getReseted(){
    this.chatService.getReseted().subscribe((reseted:number)=>{
      if(this.reseted != reseted){
        this.canVote=true;
      }
      this.reseted = reseted;
    })
  }

}
