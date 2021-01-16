import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Question } from 'src/app/models/question.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-add-question-dialog',
  templateUrl: './add-question-dialog.component.html',
  styleUrls: ['./add-question-dialog.component.css']
})
export class AddQuestionDialogComponent implements OnInit {

  form: FormGroup;
  questionTypes: String[] = [];
  currentForm = "";
  choices: String[] = [];
  currentChoice: string = "";

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddQuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) question:  Question, private questionService: QuestionService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      category: '',
      title: '',
      answerType: '',
      start: 0,
      end: 0,
      step: 0,
      choices: [],
      weight: 0,
    });
    this.questionTypes = this.questionService.questionTypes;
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }

  changeType(event: string) {
    this.form.controls['answerType'].setValue(event);
    this.currentForm = event;
  }

  addOption() {
  }

  saveOption() {
    this.choices.push(this.currentChoice);
    this.form.controls['choices'].setValue(this.choices);
  }

  deleteChoice(choice: string) {
    this.choices = this.choices.filter(c => c !== choice);
    this.form.controls['choices'].setValue(this.choices);
  }

}
