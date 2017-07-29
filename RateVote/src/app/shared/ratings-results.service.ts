import { Injectable } from '@angular/core';
import {DbList, DbService} from './db.service';
import {PollOption} from './poll.service';
import {GivenRating, VoteService} from './vote.service';
import {Observable} from 'rxjs/Observable';

export class RatingResultsSummary {
  ratingCount: number;
  ratingAverage: number;

  constructor(input: RatingResultsSummary) {
    Object.assign(this, input);
  }
}

@Injectable()
export class RatingsResultsService {

  constructor(
    private dbService: DbService,
    private voteSerice: VoteService,
  ) { }

  ratingList(pollId: string, pollOption: PollOption): DbList<GivenRating> {
    return this.dbService.list(this.voteSerice.ratingsPath(pollId, pollOption));
  }

  ratingSummary(pollId: string, pollOption: PollOption): Observable<RatingResultsSummary> {
    const ratingList = this.ratingList(pollId, pollOption);
    return ratingList.map(list => {
      const ratingCount = list.length;
      const ratingNumbers = list.map(rating => {
        return parseInt(rating.rating.split('/')[0])
      });
      let ratingAvg = ratingNumbers && ratingNumbers.length > 0 && ratingNumbers.reduce((a, b) => {
          return a + b;
        }) / list.length;
      ratingAvg = Math.round(ratingAvg * 10) / 10;

      const resultsSummary = new RatingResultsSummary(
        {
          ratingCount: ratingCount,
          ratingAverage: ratingAvg,
        }
      );
      console.log('results summary', resultsSummary);
      return resultsSummary;

    });
  }

}
