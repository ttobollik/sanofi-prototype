import { Component, OnInit, Inject } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from 'src/app/models/question.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-edit-questionnaire',
  templateUrl: './edit-questionnaire.component.html',
  styleUrls: ['./edit-questionnaire.component.css']
})
export class EditQuestionnaireComponent implements OnInit {

  public questions: Question[] = [];
  test = '';

  constructor(private questionService: QuestionService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestions()
        .subscribe(questions => this.questions = questions);
  }

  addQuestion() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      width: '250px',
      data: {name: 'peter', animal: 'unicorn'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.test = result;
    });
    
  }
}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<EditQuestionnaireComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}