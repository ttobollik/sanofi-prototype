import { Component, OnInit } from '@angular/core';
import { ImprovementService } from 'src/app/services/improvement.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {


  improvements : any[];

  constructor(private improvementService: ImprovementService) { }

  ngOnInit(): void {
    this.getImprovements();
  }

  getImprovements() {
    this.improvementService.getImprovements()
        .subscribe(improvement => this.improvements = improvement);
  }

  /* TODO
  - add exclude to improvement to allow someone to exclude sth
  - pick from different list
  - add dynamic result to be shown on top
  - add real data
  - add mock result to be faster in dev
  - add icons
  - add sliders or similar to result
  - add see questionnaire
  - add export
  - design well
  - see use case and how to hand in
  */


}
