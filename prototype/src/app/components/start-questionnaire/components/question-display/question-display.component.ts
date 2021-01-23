import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { AnswerService } from 'src/app/services/answer.service';


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

  calculateValue(inputValue) {
    let value = 0;
    if (this.currentQuestion.answerType === 'multipleChoice') {
      value = this.currentQuestion.weight * (this.currentChoice.filter(x => x.selected === true)).length;
    } else if (this.currentQuestion.answerType === 'number' || this.currentQuestion.answerType === 'numberRange') {
      value = this.currentQuestion.weight * inputValue;
    } else if (this.currentQuestion.answerType === 'boolean') {
      value = inputValue === 'true' ? this.currentQuestion.weight : 0; 
    }
    return value;
  }

  addQuestion(value) {
    if (value) {
      this.answerService.addAnswer(this.currentQuestion.id, this.calculateValue(value), this.currentQuestion.improvement);
    } else {
      this.answerService.addAnswer(this.currentQuestion.id, this.calculateValue(this.value), this.currentQuestion.improvement);
    }
  }


}
