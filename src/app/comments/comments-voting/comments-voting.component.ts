import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../app.component';

@Component({
  selector: 'app-comments-voting',
  templateUrl: './comments-voting.component.html',
  styleUrls: ['./comments-voting.component.scss'],
})
export class CommentsVotingComponent {
  @Input() allComments: Comment[] = [];
  @Input() commentScore: number = 0;
  @Output() addPoints = new EventEmitter();
  @Output() minusPoints = new EventEmitter();
  @Input() id: number = 0;

  increasePoints() {
    this.addPoints.emit(this.id);
  }

  decreasePoints() {
    this.minusPoints.emit(this.id);
  }
}
