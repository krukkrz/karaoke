import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  votes = [];

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
    this.chatService.getVotes().subscribe((votes) =>{
      this.votes = votes
      this.countVotes(this.votes);
    })
  }


  // tutaj jest błąd: spróbuj nadać typ zmiennej votesArray
  private countVotes(votesArray) {
    this.nope = 0;
    this.yeah = 0;
    this.notVoted = 0;
    this.total = 0;
    // for (let i = 0; i < votes.length; i++) {
    //   const vote = votes[i];
    //   this.total++
    //   if(vote.vote == -1){
    //     this.nope++;
    //   }
    //   if(vote.vote == 1){
    //     this.yeah++;
    //   }
    //   if(vote.vote == 0){
    //     this.notVoted++;
    //   }
    // }

    console.log("before counting");
    
    // Object.keys(votesArray).forEach(id => {
    //   console.log("while counting");
      
    //     this.total++
    //     if(votesArray[id].vote == -1){
    //       this.nope++;
    //     }
    //     if(votesArray[id].vote == 1){
    //       this.yeah++;
    //     }
    //     if(votesArray[id].vote == 0){
    //       this.notVoted++;
    //     }
    // });

    votesArray.forEach(vote => {
      console.log("while counting");      
        this.total++
        if(vote.vote == -1){
          this.nope++;
        }
        if(vote.vote == 1){
          this.yeah++;
        }
        if(vote.vote == 0){
          this.notVoted++;
        }
    });
  }

  reset(){
    this.chatService.reset();
  }

}
