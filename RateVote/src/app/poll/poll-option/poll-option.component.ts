import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PollOption} from '../../shared/poll.service';
import {GivenRating, VoteService} from '../../shared/vote.service';
import {Rating} from 'ngx-rating';
import {DbList} from '../../shared/db.service';

@Component({
  selector: '[app-poll-option]',
  templateUrl: './poll-option.component.html',
  styleUrls: ['./poll-option.component.scss']
})
export class PollOptionComponent implements OnInit, OnChanges {

  @Input() pollId: string;
  @Input() pollOption: PollOption;

  @Input() showDomains: boolean;
  rating: number;

  ratingList: Array<GivenRating>;
  ratingCount: number;
  ratingAverage: number;

  constructor(
    private voteService: VoteService
  ) {}

  ngOnInit() {
    this.voteService.ratingList(this.pollId, this.pollOption).subscribe(list => {
      this.ratingList = list;
      this.ratingCount = list.length;
      const ratingNumbers = list.map(rating => {
        return parseInt(rating.rating.split('/')[0])
      });
      const ratingAvg = ratingNumbers.reduce((a, b) => {
        return a + b;
      }) / list.length;
      this.ratingAverage = Math.round(ratingAvg * 10) / 10;
    });
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
