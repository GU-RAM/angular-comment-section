import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { EditReplyComponent } from './comments/edit-reply/edit-reply.component';
import { CommentsVotingComponent } from './comments/comments-voting/comments-voting.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { NewReplyComponent } from './comments/new-reply/new-reply.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    EditReplyComponent,
    CommentsVotingComponent,
    NewCommentComponent,
    NewReplyComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
