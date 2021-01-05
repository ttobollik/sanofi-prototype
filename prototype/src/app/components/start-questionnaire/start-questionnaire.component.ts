import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-start-questionnaire',
  templateUrl: './start-questionnaire.component.html',
  styleUrls: ['./start-questionnaire.component.css']
})
export class StartQuestionnaireComponent implements OnInit {

  categories: string[] = [];
  currentCategory = 0;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.questionService.getCategories()
        .subscribe(categories => this.categories = categories);
  }

  getQuestionByCategory(category: string) {
    return this.questionService.getQuestionsByCategory(category);
  }

  nextPage() {
    this.currentCategory +=1;
  }

}
