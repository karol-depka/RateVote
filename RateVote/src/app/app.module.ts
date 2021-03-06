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
import { OptionResultsComponent } from './poll/poll-option/option-results/option-results.component';
import {RatingsResultsService} from './shared/ratings-results.service';
import {CommentStmt} from '@angular/compiler';
import {CommentsService} from './shared/comments.service';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentStatsComponent } from './comment-stats/comment-stats.component';
import { CommentEditComponent } from './comment-edit/comment-edit.component';
import {UiNotifyService} from './shared/ui-notification.service';
import { CommentViewComponent } from './comment-view/comment-view.component'


const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'poll/:pollId',
    component: PollComponent,
  },
  {
    path: 'poll/:pollId/results',
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
    OptionResultsComponent,
    CommentsListComponent,
    CommentStatsComponent,
    CommentEditComponent,
    CommentViewComponent,
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
    RatingsResultsService,
    CommentsService,
    UiNotifyService,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
