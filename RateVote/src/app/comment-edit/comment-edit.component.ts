import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../shared/auth.service'
import {CommentsService, CommentTarget} from '../shared/comments.service'
import {FormControl} from '@angular/forms'

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.scss']
})
export class CommentEditComponent implements OnInit {

  commentText: FormControl;

  @Input() commentTarget: CommentTarget;
  public lastCommentText: string

  constructor(
    public authService: AuthService,
    public commentsService: CommentsService,
  ) { }

  ngOnInit() {
    this.commentText = new FormControl();
  }

  addComment() {

    const commentText = this.commentText.value
    this.lastCommentText = commentText
    this.commentsService.addComment(this.commentTarget, commentText)
    this.commentText.setValue('')

  }

}