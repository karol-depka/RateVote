import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {PollOption, PollService} from '../shared/poll.service';
import {DbList} from '../shared/db.service';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {

  options: DbList<PollOption>;

  newPollTitle: FormControl;


  pollId = 'PeopleMatcherName'
  private user;

  constructor(
    private pollService: PollService,
    private authService: AuthService,
  ) {
    authService.user.subscribe(user => {
      this.user = user;
    })
  }

  ngOnInit() {
    this.newPollTitle = new FormControl();
    this.options = this.pollService.listOptionsForPoll(this.pollId);
  }

  addPollOption() {
    const user = this.user && {
        displayName: this.user.displayName,
        id: this.user.uid,
    }
    const newOption = {
      title: this.newPollTitle.value,
      history: {
        created: {
          when: new Date().toISOString().replace('T', '_'),
          byUser: user
        }
      }
    };
    console.log('addPollOption', newOption)
    this.options.push(newOption)
  }


}
