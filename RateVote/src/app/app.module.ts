import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {MdButtonModule, MdCheckboxModule, MdInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSlideToggleModule, MdIconModule, MaterialModule } from '@angular/material';
import {MdMenuModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import {DbService} from './shared/db.service'
import {AuthService} from './shared/auth.service';
import {PollComponent} from './poll/poll.component';
import {StarRatingModule} from 'angular-star-rating';
import {RatingModule} from 'ngx-rating';
import { RatingsExperimentsComponent } from './ratings-experiments/ratings-experiments.component';
import {PollService} from './shared/poll.service';
import {VoteService} from './shared/vote.service';
import { PollOptionComponent } from './poll/poll-option/poll-option.component';


const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'poll/PeopleMatcherName',
    component: PollComponent,
  },
  {
    path: 'stars',
    component: RatingsExperimentsComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PollComponent,
    LoginComponent,
    RatingsExperimentsComponent,
    PollOptionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdSlideToggleModule,
    MdInputModule,
    MdMenuModule,
    MdCheckboxModule,
    MdIconModule,
    RouterModule.forRoot(appRoutes),
    // AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    StarRatingModule.forRoot(),
    RatingModule,
  ],
  providers: [
    AuthService,
    DbService,
    PollService,
    VoteService,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
