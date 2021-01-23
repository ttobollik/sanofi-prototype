import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overall-score',
  templateUrl: './overall-score.component.html',
  styleUrls: ['./overall-score.component.css']
})
export class OverallScoreComponent implements OnInit {

  @Input() score = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
