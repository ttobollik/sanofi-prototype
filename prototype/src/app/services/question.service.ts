import { Injectable } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { MockQuestions } from 'src/app/testData/mock-questions';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  mockQuestions = MockQuestions;
  categories: String[] = [];
  questionTypes: String[] = ['boolean', 'multipleChoice', 'numberRange'];

  constructor() { 
    this.categories = [...new Set(this.mockQuestions.map(item => item.category))];
  }

  getQuestions(): Observable<Question[]> {
    return of(this.mockQuestions);
  }

  getCategories(): Observable<String[]> {
    return of(this.categories);
  }

  getQuestionsByCategory(category: string) {
    return(this.mockQuestions.filter(question => question.category === category));
  }

  addQuestion(question: Question): void {
    this.mockQuestions.push(question);
    this.categories.push(question.category);
  }
  
}
