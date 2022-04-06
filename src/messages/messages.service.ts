import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  constructor(public repo: MessagesRepository) {}

  findOne(id: string) {
    return this.repo.findOne(id);
  }

  findAll() {
    return this.repo.findAll();
  }

  create(content: string) {
    return this.repo.create(content);
  }
}
