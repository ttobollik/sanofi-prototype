import { Component, OnInit } from '@angular/core';
import { AnswerService } from 'src/app/services/answer.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-start-questionnaire',
  templateUrl: './start-questionnaire.component.html',
  styleUrls: ['./start-questionnaire.component.css']
})
export class StartQuestionnaireComponent implements OnInit {

  categories: string[] = [];
  currentCategory = 0;
  answer;
  progress = 0;

  constructor(private questionService: QuestionService, private answerService: AnswerService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.questionService.getCategories()
        .subscribe(categories => this.categories = categories);
  }

  getAnswer(): void {
    this.answerService.getAnswers()
        .subscribe(answer => this.answer = answer);
  }

  getQuestionByCategory(category: string) {
    return this.questionService.getQuestionsByCategory(category);
  }

  nextPage() {
    this.currentCategory +=1;
    this.progress = Math.floor((this.currentCategory/ this.categories.length)*100);
    }

}
