import * as io from 'socket.io-client';
import { Observable } from 'rxjs/internal/Observable';

export class ChatService {

  // private url = 'http://localhost:3000';
  // private url = 'https://still-inlet-93989.herokuapp.com';
  private url = 'http://voting-client.herokuapp.com:3000';
  private socket;    

  constructor() {
      this.socket = io(this.url);
  }


  public sendMessage(message) {
    this.socket.emit('new-message', message);
  }

  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('new-message', (message) => {
            observer.next(message);
        });
    });
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
}
