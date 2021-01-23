import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditQuestionnaireComponent } from './components/edit-questionnaire/edit-questionnaire.component';
import { StartQuestionnaireComponent } from './components/start-questionnaire/start-questionnaire.component';
import { HomeComponent } from './components/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AddQuestionDialogComponent } from './components/edit-questionnaire/components/add-question-dialog/add-question-dialog.component';
import { QuestionDisplayComponent } from './components/start-questionnaire/components/question-display/question-display.component';
import { HeaderComponent } from './components/start-questionnaire/components/header/header.component';
import { ResultComponent } from './components/result/result.component';
import { OverallScoreComponent } from './components/result/components/overall-score/overall-score.component';
import { ImprovementComponent } from './components/result/components/improvement/improvement.component';


@NgModule({
  declarations: [
    AppComponent,
    EditQuestionnaireComponent,
    StartQuestionnaireComponent,
    HomeComponent,
    AddQuestionDialogComponent,
    QuestionDisplayComponent,
    HeaderComponent,
    ResultComponent,
    OverallScoreComponent,
    ImprovementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    MatSliderModule,
    MatRadioModule,
    MatCheckboxModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
