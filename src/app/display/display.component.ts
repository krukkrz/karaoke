import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Vote } from '../models/vote.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  votes:Vote[] = [];

  notVoted = 0;
  yeah = 0;
  nope = 0;
  total = 0;

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
    this.chatService.getVotes().subscribe((votes:Vote[]) =>{
      this.votes = votes
      console.log(this.votes);      
      this.countVotes(this.votes);
    })
  }


  private countVotes(votesArray:Vote[]) {
    this.nope = 0;
    this.yeah = 0;
    this.notVoted = 0;
    this.total = 0;
    
    Object.keys(votesArray).forEach(id => {
        this.total++
        if(votesArray[id].vote == -1){
          this.nope++;
        }
        if(votesArray[id].vote == 1){
          this.yeah++;
        }
        if(votesArray[id].vote == 0){
          this.notVoted++;
        }
    });
  }

  reset(){
    this.chatService.reset();
  }

}
