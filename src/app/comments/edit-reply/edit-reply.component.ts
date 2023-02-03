import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../model';
import data from '../../../assets/data/data.json';

@Component({
  selector: 'app-edit-reply',
  templateUrl: './edit-reply.component.html',
  styleUrls: ['./edit-reply.component.scss'],
})
export class EditReplyComponent {
  @Input() currentUser: User = data.currentUser;
  @Input() content: any;
  @Input() userCommentId: number = 0;

  @Output() renewContent = new EventEmitter();
  @Output() editReply = new EventEmitter();

  addRenewedContent() {
    this.renewContent.emit({
      content: this.content,
      id: this.userCommentId,
    });

    this.editReply.emit(this.userCommentId);
  }
}
