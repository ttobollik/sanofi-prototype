import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { AnswerService } from 'src/app/services/answer.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-question-display',
  templateUrl: './question-display.component.html',
  styleUrls: ['./question-display.component.css']
})
export class QuestionDisplayComponent implements OnInit {

  @Input() currentQuestion: Question;
  value;
  choices = [];
  currentChoice = [];
  //private value = new BehaviorSubject<any>("");
  //messageSource = this.value.asObservable();

  constructor(private answerService: AnswerService) { }

  ngOnInit(): void {
    if (this.currentQuestion.answerType === 'multipleChoice') {
      this.currentQuestion.choices.forEach(element => {
        this.choices.push({name: element, selected: false});
        this.currentChoice.push({name: element, selected: false});
      });
    }
  }

  updateChoices(item) {
    this.currentChoice.map(choice => {
      if (choice.name === item) {
        choice.selected = choice.selected ? false : true;
      }
      return choice;
    })
    this.addQuestion(this.currentChoice);
  }

  addQuestion(value) {
    if (value) {
      this.answerService.addAnswer(this.currentQuestion.id, value);
    } else {
      this.answerService.addAnswer(this.currentQuestion.id, this.value);
    }

  }


}
