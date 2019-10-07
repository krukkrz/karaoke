import * as io from 'socket.io-client';
import { Observable } from 'rxjs/internal/Observable';

export class ChatService {

  private url = 'https://still-inlet-93989.herokuapp.com';
  // private url = 'http://localhost:3000';
  private socket;    

  constructor() {
      this.socket = io(this.url);
  }

  public vote(vote){
    this.socket.emit('vote', vote);
  }

  public getVotes(){
    return Observable.create((observer) => {
      this.socket.on('vote', (votes) => {
            observer.next(votes);
        });
    });
  }

  public getReseted(){
    return Observable.create((observer) => {
      this.socket.emit('is_reseted');
      this.socket.on('reseted', (reseted) => {
            console.log(reseted);        
            observer.next(reseted);
        });
    });
  }

  public reset(){
    this.socket.emit('reset');
  }
}
