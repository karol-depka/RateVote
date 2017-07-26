import { Component } from '@angular/core';
import {AuthService} from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RateVote';

  constructor(
    public authService: AuthService,
  ) {
    this.authService.user.subscribe((user) => {
      // alert('auth service user fires');
      console.log('auth service user fires', user);
    });
  }

}
