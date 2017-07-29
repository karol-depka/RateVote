import { Injectable } from '@angular/core';
import {PollOption} from './poll.service';
import {DbList, DbObject, DbService} from './db.service';
import {AuthService} from './auth.service';
import {Rating} from 'ngx-rating';

export class GivenRating {
  rating: string;
}

@Injectable()
export class VoteService {

  constructor(
    private dbService: DbService,
    private authService: AuthService
  ) {

  }

  parseRatingNumber(rating: GivenRating): number {
    if ( rating ) {
      return parseFloat(
        rating.rating &&
        rating.rating.split('/')[0]);
    } else {
      return undefined
    }
  }

  vote(pollId: string, pollOption: PollOption, rating: number, maxRating: number) {

    if ( ! this.authService.userSaved ) {
      window.alert('No logged user! Cannot give rating yet.')
    } else {
      const user = this.authService.userSaved && {
          displayName: this.authService.userSaved.displayName,
          id: this.authService.userSaved.uid,
        }
      const dbObject = this.myGivenRating(pollId, pollOption);

      const newObject = {
        pollOption: {
          title: pollOption.title
        },
        rating: `${rating}/${maxRating}`,
        history: {
          created: {
            when: new Date().toISOString().replace('T', '_'),
            byUser: user
          }
        }
      };
      dbObject.update(newObject);
    }

  }

  myGivenRating(pollId: string, pollOption: PollOption): DbObject<GivenRating> {
    return this.dbService.objectById(this.ratingsPath(pollId, pollOption),
      this.authService.userSaved.uid);
  }

  ratingsPath(pollId: string, pollOption: PollOption) {
    return `Ratings/${pollId}/${(<any>pollOption).$key}`;
  }

}
