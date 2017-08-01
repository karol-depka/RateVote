import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../shared/comments.service'
import {DbObject} from '../shared/DbObject'

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.scss']
})
export class CommentViewComponent implements OnInit {

  @Input() comment: DbObject<Comment>
  commentSaved: Comment
  whenCreated: string

  constructor() { }

  ngOnInit() {
    this.comment.subscribe(c => {
      this.commentSaved = c
      this.whenCreated = c.history.created.when.replace(/:\d\d\.\d\d\dZ/, '').replace('_', ' ')
    })
  }

}
