import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Poll, PollOption, PollService} from '../shared/poll.service';
import {DbList} from '../shared/db.service';
import {AuthService} from '../shared/auth.service';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {User} from 'firebase/app'

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {

  pollOptions: DbList<PollOption>;

  newPollOptionTitle: FormControl;
  // @ViewChild('newPollOptionTitle') newPollOptionTitleElement;


  pollId: string = this.route.snapshot.params['pollId'];
  pollTitle: string = this.pollId; // HACK
  poll: Poll = { // quick hack
    $key: this.pollId,
    title: this.pollTitle,
  }
  isPeopleMatcher: boolean = this.pollId === 'PeopleMatcherName'
  showDomains: boolean = this.isPeopleMatcher
  showAcronyms: boolean = this.isPeopleMatcher
  showResults: boolean = window.location.pathname.endsWith('/results')
  user: User;

  constructor(
    private pollService: PollService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private titleService: Title,
    private elRef: ElementRef
  ) {
    authService.user.subscribe(user => {
      this.user = user;
    })
  }

  ngOnInit() {
    this.newPollOptionTitle = new FormControl();
    this.pollOptions = this.pollService.listOptionsForPoll(this.pollId);
    this.titleService.setTitle('RateVote - ' + this.pollTitle);
  }

  addPollOption() {
    const user = this.user && {
        displayName: this.user.displayName,
        id: this.user.uid,
    }
    const newOption = {
      title: this.newPollOptionTitle.value,
      history: {
        created: {
          when: new Date().toISOString().replace('T', '_'),
          byUser: user
        }
      }
    };
    console.log('addPollOption', newOption)
    this.pollOptions.push(newOption)
    this.scrollToBottom();
  }

  private scrollToBottom() {
    // try {
    //   this.elRef.nativeElement.scrollTop = this.elRef.nativeElement.scrollHeight;
    // setTimeout(() => {
    //   this.elRef.nativeElement.scrollTop = this.elRef.nativeElement.scrollHeight;
    // }, 1000)

    // setTimeout(() => {
    //   this.newPollOptionTitleElement.scrollIntoView()
    // }, 1000)

    // } catch (err) {
    // }
  }

  login() {
    this.authService.login()
  }


}
