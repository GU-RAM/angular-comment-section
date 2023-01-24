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
  @Output() changeContent = new EventEmitter();
  @Output() deleteComment = new EventEmitter();

  nameToReply: string = '';
  id: number = 0;
  editId: number = 0;

  selectedReplyID = 0;

  sendReplyComment(reply: any) {
    if (this.selectedReplyID === reply.id) {
      this.selectedReplyID = 0;
    } else {
      this.selectedReplyID = reply.id;
    }
  }

  reply(reply: any) {
    let foundComment = this.allComments.find(
      (comment) => reply.id === comment.id && this.id !== reply.index
    );
    if (foundComment) {
      this.id = reply.index;
    } else if (this.id === reply.index) {
      this.id = 0;
    }
  }

  edit(edit: number) {
    if (this.editId === edit) {
      this.editId = 0;
    } else {
      this.editId = edit;
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

  addChangedContent(changedInfoId: any) {
    this.changeContent.emit(changedInfoId);
  }

  deleteUserComment(id: any) {
    this.deleteComment.emit(id);
  }
}
