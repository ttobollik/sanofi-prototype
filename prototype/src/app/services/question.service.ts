import { Injectable } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { MockQuestions } from 'src/app/testData/mock-questions';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  mockQuestions = MockQuestions;
  categories: string[] = [];
  questionTypes: string[] = ['boolean', 'multipleChoice', 'numberRange', 'number'];

  constructor() { 
    this.categories = [...new Set(this.mockQuestions.map(item => item.category))];
  }

  getQuestions(): Observable<Question[]> {
    return of(this.mockQuestions);
  }

  getCategories(): Observable<string[]> {
    return of(this.categories);
  }

  getQuestionsByCategory(category: string) {
    const questions= (this.mockQuestions.filter(question => question.category === category));
    return questions;
  }

  addQuestion(question: Question): void {
    this.mockQuestions.push(question);
    this.categories.push(question.category);
  }
  
}
