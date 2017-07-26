import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratings-experiments',
  templateUrl: './ratings-experiments.component.html',
  styleUrls: ['./ratings-experiments.component.scss']
})
export class RatingsExperimentsComponent implements OnInit {

  starsCount: number;

  constructor() { }

  ngOnInit() {
  }

}
