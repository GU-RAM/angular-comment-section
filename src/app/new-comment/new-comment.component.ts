import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../model';
import data from '../../assets/data/data.json';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss'],
})
export class NewCommentComponent {
  @Input() currentUser: User = data.currentUser;
  @Output() addNewComment = new EventEmitter();
  @Input() sumOfAllComments: number = 0;
  content: string = '';
  createdAt: string = '1 day ago';
  score: number = 0;

  addNewCommentFn() {
    if (this.content) {
      this.addNewComment.emit({
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
      });
      this.sumOfAllComments++;
      this.content = '';
    }
  }
}
