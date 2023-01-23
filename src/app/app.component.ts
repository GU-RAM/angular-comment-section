import { Component } from '@angular/core';
import data from '../assets/data/data.json';

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  replies: Replies[];
}

interface Replies {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: User;
}

export interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

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
  sumOfAllComments: number = 8;

  addNewCommentHandler(newComment: Comment) {
    this.allComments.push(newComment);
    localStorage.setItem('allComments', JSON.stringify(this.allComments));
  }

  addNewReplyHandler(reply: any) {
    this.allComments
      .find((comment) => reply.id === comment.id)
      ?.replies.push(reply.reply);
    localStorage.setItem('allComments', JSON.stringify(this.allComments));
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
      localStorage.setItem('allComments', JSON.stringify(this.allComments));
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
      localStorage.setItem('allComments', JSON.stringify(this.allComments));
    }
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
      0
    );
  }
}
