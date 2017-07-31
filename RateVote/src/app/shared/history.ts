import {User} from 'firebase/app'
/**
 * Created by kd on 2017-07-31.
 */


export class DbUserInfo {

  displayName: string
  userId: string

  constructor(user: User) {
    this.displayName = user.displayName;
    this.userId = user.uid;
  }
}

export class DbHistoryEvent {

  when: string
  byUser: DbUserInfo

  constructor(byUser: User) {
    this.byUser = new DbUserInfo(byUser)
    this.when = new Date().toISOString().replace('T', '_')
  }

}

export class DbHistory {
  created: DbHistoryEvent


  constructor(user: User) {
    this.created = new DbHistoryEvent(user)
  }

}

export interface HasHistory {
  history: DbHistory
}
