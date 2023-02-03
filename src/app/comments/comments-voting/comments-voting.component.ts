import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../model';

@Component({
  selector: 'app-comments-voting',
  templateUrl: './comments-voting.component.html',
  styleUrls: ['./comments-voting.component.scss'],
})
export class CommentsVotingComponent {
  @Input() allComments: Comment[] = [];
  @Input() commentScore: number = 0;
  @Input() id: number = 0;

  @Output() minusPoints = new EventEmitter();
  @Output() addPoints = new EventEmitter();

  increasePoints() {
    console.log(this.id);
    this.addPoints.emit(this.id);
  }

  decreasePoints() {
    this.minusPoints.emit(this.id);
  }
}
