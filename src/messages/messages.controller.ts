import { Controller, Get } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

  constructor( private MessagesService: MessagesService){}

  @Get()
  findAll(){
    return this.MessagesService.findAll();
  }
 
}
