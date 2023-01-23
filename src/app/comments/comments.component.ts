import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comment, User } from '../app.component';
import data from '../../assets/data/data.json';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  @Input() allComments: Comment[] = [];
  @Input() currentUser: User = data.currentUser;
  @Input() sumOfAllComments: number = 0;

  @Output() addNewReply = new EventEmitter();
  @Output() addPoints = new EventEmitter();
  @Output() decrease = new EventEmitter();

  nameToReply: string = '';
  id: number = 0;
  replyId: number = 0;

  reply(index: number, id: number) {
    let foundComment = this.allComments.find(
      (comment) => id === comment.id && this.id !== index
    );
    if (foundComment) {
      this.id = index;
    } else if (this.id === index) {
      this.id = 0;
    }
  }

  replyOnReplies(index: number, id: number) {
    let foundComment = this.allComments.find(
      (comment) => id === comment.id && this.replyId !== index
    );

    if (foundComment) {
      this.replyId = index;
      console.log(index);
    } else if (this.replyId === index) {
      this.replyId = 0;
    }
  }

  addNewReplyfn(reply: any) {
    this.addNewReply.emit(reply);
  }

  addPointsUser(id: number) {
    this.addPoints.emit(id);
  }

  decreasePoints(id: number) {
    this.decrease.emit(id);
  }
}
