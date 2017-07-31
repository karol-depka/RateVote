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


  constructor(
    private ratingResultsService: RatingsResultsService
  ) { }

  ngOnInit() {
    this.ratingResultsService.ratingSummary(this.pollId, this.pollOption).subscribe(summary => {
      this.resultsSummary = summary;
      this.ratingAverageText =
        summary.ratingAverage &&
        summary.ratingAverage.toFixed(1)
    });

  }

}
