import { Component, OnInit } from '@angular/core';
import { ImprovementService } from 'src/app/services/improvement.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {


  improvements : any[];
  total = 0;

  constructor(private improvementService: ImprovementService) { }

  ngOnInit(): void {
    this.getImprovements();
  }

  getImprovements() {
    this.improvementService.getImprovements()
        .subscribe(improvement => {
          this.improvements = improvement;
          this.total = this.improvementService.getTotalScore();
        });
  }
}
