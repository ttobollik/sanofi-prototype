import { Injectable } from '@angular/core';
import { MockImprovements } from 'src/app/testData/mock-improvements';
import { Observable, of } from 'rxjs';
import { AnswerService } from 'src/app/services/answer.service';

@Injectable({
  providedIn: 'root'
})
export class ImprovementService {

  mockImprovements = MockImprovements;
  answers : any[];

  constructor(private answerService: AnswerService) {
    this.getAnswers();
  }

  getAnswers() {
    this.answerService.getAnswers()
        .subscribe(answer => this.answers = answer);
  }

  getImprovements(): Observable<any[]> {
    this.calculateImprovements();
    return of(this.mockImprovements);
  }

  calculateImprovements() {
    this.mockImprovements = this.mockImprovements.map(imp => {
      let answer = (this.answers.find( answer => answer.improvementId === imp.id));
      if (answer){
        imp.score =+ answer.score;
      }
      return imp;
    })
    this.mockImprovements = (this.mockImprovements.sort((a, b) => (a.score > b.score) ? 1 : -1)).reverse();
  }

}
