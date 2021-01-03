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

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddQuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) question:  Question) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      category: '',
      titel: '',
      answerType: '',
      answerOption: '',
      weight: 0,
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
    console.log(this.form)
}

close() {
    this.dialogRef.close();
}

}
