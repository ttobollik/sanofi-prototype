import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditQuestionnaireComponent } from 'src/app/components/edit-questionnaire/edit-questionnaire.component';
import { StartQuestionnaireComponent } from 'src/app/components/start-questionnaire/start-questionnaire.component';
import { HomeComponent } from 'src/app/components/home/home.component';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'edit-questionnaire-component', component: EditQuestionnaireComponent },
  { path: 'star-questionnaire-component', component: StartQuestionnaireComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
