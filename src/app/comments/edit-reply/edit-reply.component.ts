import { Component, Input } from '@angular/core';
import { User } from '../../app.component';
import data from '../../../assets/data/data.json';

@Component({
  selector: 'app-edit-reply',
  templateUrl: './edit-reply.component.html',
  styleUrls: ['./edit-reply.component.scss'],
})
export class EditReplyComponent {
  @Input() currentUser: User = data.currentUser;
  @Input() content: any;

  ff() {}
}
