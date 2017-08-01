import {Component, Input, OnInit} from '@angular/core';
import {CommentsService} from '../shared/comments.service'
import {CommentTarget} from '../shared/comment-target'

@Component({
  selector: 'app-comment-stats',
  templateUrl: './comment-stats.component.html',
  styleUrls: ['./comment-stats.component.scss']
})
export class CommentStatsComponent implements OnInit {

  @Input() commentTarget: CommentTarget;
  commentCount: number

  constructor(
    private commentsService: CommentsService
  ) { }

  ngOnInit() {
    this.commentsService.commentCount(this.commentTarget).subscribe(count => {
      this.commentCount = count
    })
  }


}
