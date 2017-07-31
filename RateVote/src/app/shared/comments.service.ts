import { Injectable } from '@angular/core';
import {DbList, DbObject, DbService} from './db.service';
import {PollOption} from './poll.service';
import {AuthService} from './auth.service'
import {DbHistory, HasHistory} from './history'
import {UiNotifyService} from './ui-notification.service'
import {User} from 'firebase/app'
import {Observable} from 'rxjs/Observable'

export class CommentInclusion implements HasHistory {
  $key: string
  history: DbHistory

  constructor(byUser: User) {
    this.history = new DbHistory(byUser);
  }
}

export interface CommentTarget {
  $key: string

  // getCommentsParentDbPath()
}

export class Comment implements HasHistory {
  history: DbHistory;
  text: string;
}

@Injectable()
export class CommentsService {

  /* future optimization: no need to load all comments */
  private commentsDbList: DbList<Comment> = this.dbService.list('Comments');

  constructor(
    private dbService: DbService,
    private authService: AuthService,
    private uiNotifyService: UiNotifyService,
  ) {

  }

  listCommentsFor(commentTarget: CommentTarget): Observable<Array<DbObject<Comment> > > {
    const fkList: DbList<CommentInclusion> = this.getCommentsOnTargetForeignKeyList(commentTarget.$key)
    return fkList.map(list => {
        return list.map(fk => {
          return this.dbService.objectById('Comments', fk.$key);
        })
      }
    )
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
    const commentTargetId = commentTarget.$key;
    // this.dbService.pushObject(commentTarget.getCommentsParentDbPath(), newComment);
    // this.dbService.pushObject(`Comments`, newComment)
    // TODO: do this in single db write
    const newCommentId = this.commentsDbList.push(newComment).key
    // future optimization: no need to go via list
    this.getCommentsOnTargetForeignKeyList(commentTargetId).update(
      newCommentId,
      new CommentInclusion(user));

  }

  private getCommentsOnTargetForeignKeyList(commentTargetId: string) {
    return this.dbService.list(this.commentsOnPath(commentTargetId))
  }

  private commentsOnPath(commentTargetId: string) {
    return `CommentsOn/${commentTargetId}`
  }

  commentCount(commentTarget: CommentTarget): Observable<number> {
    return this.listCommentsFor(commentTarget).map(list => {
      return list.length
    })
  }
}
