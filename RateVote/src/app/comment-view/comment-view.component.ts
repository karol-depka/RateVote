import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../shared/comments.service'
import {DbObject} from '../shared/db.service'

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.scss']
})
export class CommentViewComponent implements OnInit {

  @Input() comment: DbObject<Comment>
  commentSaved: Comment

  constructor() { }

  ngOnInit() {
    this.comment.subscribe(c => {
      this.commentSaved = c
    })
  }

}
