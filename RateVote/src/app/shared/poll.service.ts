import { Injectable } from '@angular/core';
import {DbList, DbService} from './db.service';


export class Poll {
  title: string

}

export class PollOption {
  title: string
  pollId?: string
}

@Injectable()
export class PollService {

  constructor(
    private db: DbService,
  ) {

  }

  listOptionsForPoll(pollId): DbList<PollOption> {
    return this.db.list(`PollOptions/${pollId}`);
  }


}
