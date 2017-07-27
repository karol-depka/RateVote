import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {PollOption, PollService} from '../shared/poll.service';
import {DbList} from '../shared/db.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {

  options: DbList<PollOption>;

  newPollTitle: FormControl;


  id = 'PeopleMatcherName'

  constructor(
    private pollService: PollService,
  ) { }

  ngOnInit() {
    this.newPollTitle = new FormControl();
    this.options = this.pollService.listOptionsForPoll(this.id);
  }

  addPollOption() {
    const newOption = {
      title: this.newPollTitle.value
    };
    console.log('addPollOption', newOption)
    this.options.push(newOption)
  }


}
