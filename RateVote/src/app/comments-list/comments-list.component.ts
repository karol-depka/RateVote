import {Component, Input, OnInit} from '@angular/core';
import {Comment, CommentsService, CommentTarget} from '../shared/comments.service'
import {DbObject} from '../shared/db.service'
import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {

  @Input() commentTarget: CommentTarget;

  comments: Observable<Array<DbObject<Comment> > >

  constructor(
    private commentsService: CommentsService,
  ) { }

  ngOnInit() {
    this.comments = this.commentsService.listCommentsFor(this.commentTarget)
  }

}
