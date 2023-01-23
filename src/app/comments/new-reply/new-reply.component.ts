import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comment, User } from '../../app.component';
import data from '../../../assets/data/data.json';

@Component({
  selector: 'app-new-reply',
  templateUrl: './new-reply.component.html',
  styleUrls: ['./new-reply.component.scss'],
})
export class NewReplyComponent {
  @Input() allComments: Comment[] = [];
  @Input() currentUser: User = data.currentUser;
  @Input() sumOfAllComments: number = 0;
  @Input() id: number = 0;
  @Input() replyId: number = 0;

  @Output() addNewReply = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  content: string = '';
  createdAt: string = '1 minutes ago';
  score: number = 0;

  newReply() {
    if (this.content) {
      this.addNewReply.emit({
        reply: {
          id: this.sumOfAllComments,
          content: this.content,
          createdAt: this.createdAt,
          score: this.score,
          user: {
            image: {
              png: this.currentUser.image.png,
              webp: this.currentUser.image.webp,
            },
            username: this.currentUser.username,
          },
          replies: [],
        },
        id: this.id,
      });
      this.content = '';
    }
    this.delete.emit(1);
  }
}
