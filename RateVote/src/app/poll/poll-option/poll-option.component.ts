import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PollOption} from '../../shared/poll.service';
import {GivenRating, VoteService} from '../../shared/vote.service';
import {Rating} from 'ngx-rating';
import {DbList} from '../../shared/db.service';
import {AuthService} from '../../shared/auth.service'

@Component({
  selector: '[app-poll-option]',
  templateUrl: './poll-option.component.html',
  styleUrls: ['./poll-option.component.scss']
})
export class PollOptionComponent implements OnInit, OnChanges {

  @Input() pollId: string;
  @Input() pollOption: PollOption;

  @Input() showDomains: boolean;
  @Input() showAcronyms: boolean;
  @Input() showResults: boolean;

  showDomain: boolean;
  showAcronym: boolean;

  showComments = false

  myGivenRating: number;

  constructor(
    private voteService: VoteService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.user.subscribe(user => {
      if ( user ) {
        this.voteService.myGivenRating(this.pollId, this.pollOption).subscribe(it => {
          this.myGivenRating = this.voteService.parseRatingNumber(it);
        });
      }
    })
    if ( this.pollOption.title.match(' ') ) {
      this.showDomain = false;
      this.showAcronym = false;
    } else {
      this.showDomain = this.showDomains
      this.showAcronym = this.showAcronyms
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
  }


  domainExample() {
    return this.pollOption.title.toLowerCase() + '.org';
  }

  acronym() {
    const string = this.pollOption.title
    let output: string = ''
    for ( let i = 0; i < string.length; ++i ) {
      const char = string[i]
      // if is upper case
      if ( char.toUpperCase() === char ) {
        output = output + char
      }
    }
    return output;
  }

  onRatingChanged() {
    // window.alert('' + this.myGivenRating)
    this.voteService.vote(
      this.pollId,
      this.pollOption,
      this.myGivenRating,
      5);

  }

  toggleComments() {
    this.showComments = ! this.showComments
  }

}
