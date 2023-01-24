import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-user-comment',
  templateUrl: './delete-user-comment.component.html',
  styleUrls: ['./delete-user-comment.component.scss'],
})
export class DeleteUserCommentComponent {
  @Input() id: number = 0;
  @Output() deleteUserComment = new EventEmitter();

  deleteComment() {
    this.deleteUserComment.emit(this.id);
  }
}
