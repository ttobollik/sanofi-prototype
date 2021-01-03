import { Injectable } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { MockQuestions } from 'src/app/testData/mock-questions';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  mockQuestions = MockQuestions;

  constructor() { }

  getQuestions(): Observable<Question[]> {
    return of(this.mockQuestions);
  }

  addQuestion(question: Question): void {
    this.mockQuestions.push(question);
  }
}
