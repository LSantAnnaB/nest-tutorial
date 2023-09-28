import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  private messages = [
    {
      id:1,
      text: "texto exemplo"
    },
    
  ];
  findAll(){
    return this.messages;
  }
}
