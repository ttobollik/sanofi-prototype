import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  answers = [];

  constructor() { }

  getAnswers(): Observable<any[]> {
    return of(this.answers);
  }

  addAnswer(questionId: number, answer: any, improvementId: number): void {
    const index = this.answers.map(x => {return x.id; }).indexOf(questionId);;
    if (index === -1) {
      this.answers = [...this.answers, {'id': questionId, 'score': answer, 'improvementId': improvementId}];
    } else {
      this.answers = this.answers.map(x => {
        if (x.id === questionId) {
          x.answer = answer;
        }
        return x;
      })
    }
  }
}
