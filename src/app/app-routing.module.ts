import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRecruiterComponent } from './addRecruiter/addRecruiter.component';
import { AddInterviewerComponent } from './addInterviewer/addInterviewer.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/addRecruiter' },
  { path: 'addRecruiter',  component: AddRecruiterComponent },
  { path: 'addInterviewer',  component: AddInterviewerComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [ 
    AddRecruiterComponent, AddInterviewerComponent
  ];
}

