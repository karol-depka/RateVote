import {Component, Input, OnInit} from '@angular/core';
import {GivenRating} from '../../../shared/vote.service';
import {RatingResultsSummary, RatingsResultsService} from '../../../shared/ratings-results.service';
import {PollOption} from '../../../shared/poll.service';

@Component({
  selector: 'app-option-results',
  templateUrl: './option-results.component.html',
  styleUrls: ['./option-results.component.scss']
})
export class OptionResultsComponent implements OnInit {

  @Input() pollId: string;
  @Input() pollOption: PollOption;

  resultsSummary: RatingResultsSummary
  ratingAverageText: string
  protected ratingList: GivenRating[]


  constructor(
    private ratingResultsService: RatingsResultsService
  ) { }

  ngOnInit() {
    this.ratingResultsService.ratingList(this.pollId, this.pollOption).subscribe(it => {
      this.ratingList = it;
      })
    this.ratingResultsService.ratingSummary(this.pollId, this.pollOption).subscribe(summary => {
      this.resultsSummary = summary;
      this.ratingAverageText =
        summary.ratingAverage &&
        summary.ratingAverage.toFixed(1)
    });

  }

  ratingToString(r) {
    return r.toString().replace('/5', '')
  }
}
