import { Injectable } from '@angular/core';
import {DbList, DbService} from './db.service';
import {PollOption} from './poll.service';
import {AuthService} from './auth.service'
import {DbHistory, HasHistory} from './history'
import {UiNotifyService} from './ui-notification.service'


export interface CommentTarget {
  getCommentsParentDbPath()
}

export class Comment implements HasHistory {
  history: DbHistory;
  text: string;
}

@Injectable()
export class CommentsService {

  private commentsDbList: DbList<Comment> = this.dbService.list('Comments');

  constructor(
    private dbService: DbService,
    private authService: AuthService,
    private uiNotifyService: UiNotifyService,
  ) {

  }

  listCommentsFor(commentTarget: CommentTarget) {

  }

  addComment(commentTarget: CommentTarget, comment: string) {
    const user = this.authService.userSaved
    if ( !user ) {
      this.uiNotifyService.error('Not logged in. Unable to post comment.');
      return;
    }
    const newComment: Comment = {
      text: comment,
      history: new DbHistory(user),
    };
    // this.dbService.pushObject(commentTarget.getCommentsParentDbPath(), newComment);
    // this.dbService.pushObject(`Comments`, newComment)
    this.commentsDbList.push(newComment);

  }
}
