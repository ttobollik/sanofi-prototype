import { Component, OnInit, Inject } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from 'src/app/models/question.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { AddQuestionDialogComponent } from './components/add-question-dialog/add-question-dialog.component';


@Component({
  selector: 'app-edit-questionnaire',
  templateUrl: './edit-questionnaire.component.html',
  styleUrls: ['./edit-questionnaire.component.css']
})

export class EditQuestionnaireComponent implements OnInit {

  public questions: Question[] = [];
  test = '';

  constructor(private questionService: QuestionService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestions()
        .subscribe(questions => this.questions = questions);
  }

  addQuestion() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(AddQuestionDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => this.questionService.addQuestion(data)
  );  
}

}
