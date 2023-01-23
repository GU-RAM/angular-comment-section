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
  @Input() userCommentId: number = 0;
  @Input() commentIndex: number = 0;

  @Output() addNewReply = new EventEmitter<any>();
  @Output() deleteReplyComment = new EventEmitter();
  @Output() deleteReplyReply = new EventEmitter();

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
    this.deleteReplyComment.emit({
      index: this.commentIndex,
      id: this.id,
    });
    this.deleteReplyReply.emit({ id: this.userCommentId });
  }
}
