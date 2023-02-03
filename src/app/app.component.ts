import { Component } from '@angular/core';
import data from '../assets/data/data.json';
import { User, Comment } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'comment-section';

  currentUser: User = data.currentUser;
  allComments: Comment[] = this.getComments();
  sumOfReplies: number = 0;
  sumOfAllComments: number = this.sumAllComments();

  addNewCommentHandler(newComment: Comment) {
    this.allComments.push(newComment);
    this.updateLocalStorage();
    this.sumOfAllComments = this.sumAllComments();
  }

  addNewReplyHandler(reply: any) {
    console.log(reply);
    this.allComments
      .find((comment) => reply.id === comment.id)
      ?.replies.push(reply.reply);
    this.updateLocalStorage();
    this.sumOfAllComments = this.sumAllComments();
  }

  addPointsHandler(id: number) {
    let comment: any;
    this.allComments.forEach((c: any) => {
      if (c.id === id) {
        comment = c;
      } else if (c.replies.length) {
        c.replies.forEach((r: any) => {
          if (r.id === id) {
            comment = r;
          }
        });
      }
    });
    if (comment) {
      comment.score++;
      this.updateLocalStorage();
    }
  }

  deacreasePointsHandler(id: number) {
    let comment: any;
    this.allComments.forEach((c: any) => {
      if (c.id === id) {
        comment = c;
      } else if (c.replies.length) {
        c.replies.forEach((r: any) => {
          if (r.id === id) {
            comment = r;
          }
        });
      }
    });
    if (comment?.score > 0) {
      comment.score--;
      this.updateLocalStorage();
    }
  }

  addChangedContentHandler(changhedContentId: any) {
    let comment: any;
    this.allComments.forEach((c: any) => {
      if (c.id === changhedContentId.id) {
        comment = c;
      } else if (c.replies.length) {
        c.replies.forEach((r: any) => {
          if (r.id === changhedContentId.id) {
            comment = r;
          }
        });
      }
    });

    comment.content = changhedContentId.content;
    this.updateLocalStorage();
  }

  deleteUserCommentHandler(id: any) {
    this.allComments = this.allComments
      .map((comment) => {
        comment.replies = comment.replies.filter((reply) => reply.id !== id);
        return comment;
      })
      .filter((comment) => comment.id !== id);

    this.updateLocalStorage();
    this.sumOfAllComments = this.sumAllComments();
  }

  getComments() {
    if (!localStorage.getItem('allComments')) {
      localStorage.setItem('allComments', JSON.stringify(data.comments));
    }

    const comments = localStorage.getItem('allComments');

    if (comments) {
      return JSON.parse(comments);
    }
  }

  updateLocalStorage() {
    localStorage.setItem('allComments', JSON.stringify(this.allComments));
  }

  sumAllComments() {
    return this.allComments.reduce(
      (total, comment) => total + comment.replies.length + 1,
      1
    );
  }
}
