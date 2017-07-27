import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PollOption} from '../../shared/poll.service';
import {VoteService} from '../../shared/vote.service';

@Component({
  selector: '[app-poll-option]',
  templateUrl: './poll-option.component.html',
  styleUrls: ['./poll-option.component.scss']
})
export class PollOptionComponent implements OnInit, OnChanges {

  @Input() pollOption: PollOption;
  @Input() pollId: string;
  rating: number;

  constructor(
    private voteService: VoteService
  ) {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }


  domainExample() {
    return this.pollOption.title.toLowerCase() + '.org';
  }

  onRatingChanged() {
    // window.alert('' + this.rating)
    this.voteService.vote(
      this.pollId,
      this.pollOption,
      this.rating,
      5);

  }

}
