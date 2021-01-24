import { Injectable, OnInit } from '@angular/core';
import { MockImprovements } from 'src/app/testData/mock-improvements';
import { Observable, of } from 'rxjs';
import { AnswerService } from 'src/app/services/answer.service';

@Injectable({
  providedIn: 'root'
})
export class ImprovementService{

  improvements;
  answers : any[];
  totalWeight = 0;
  totalFraction = 105; // !! needs to be calculated on the fly, only dummy for now

  constructor(private answerService: AnswerService) { 
    this.improvements = MockImprovements;
    
  }


  getAnswers() {
    this.answerService.getAnswers()
        .subscribe(answer => {
          this.answers = answer;
        });
  }

  getTotalScore(){
    if (this.totalWeight != 0) {
      console.log(this.totalWeight);
      return Math.floor(this.totalFraction/this.totalWeight*100);
    } else {
      return 99999;
    }
  }

  getImprovements(): Observable<any[]> {
    this.calculateImprovements();
    return of(this.improvements);
  }

  calculateImprovements() {
    this.getAnswers();
    this.improvements = this.improvements.map(imp => {
      let answer = (this.answers.find( answer => answer.improvementId === imp.id));
      if (answer){
        imp.score += answer.score;
      }
      imp.order = imp.score;
      this.totalWeight += imp.score;
      return imp;
    })
    this.improvements = (this.improvements.sort((a, b) => (a.score > b.score) ? 1 : -1)).reverse();
  }

  changeOrder(orderOne: number, orderTwo: number) {
    const tempImp = this.improvements.find( imp => imp.order === orderOne);
    this.improvements = this.improvements.map( imp => {
      if(imp.order === orderOne) {
        imp = this.improvements.find( imp => imp.order === orderTwo);
      }
      if(imp.order === orderTwo) {
        imp = tempImp;
      }
    })
  }

}
