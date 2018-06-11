import { Component, OnInit, Host } from '@angular/core';

@Component({
  selector: 'add-interviewer-form',
  templateUrl: './addInterviewer.component.html'
})
export class AddInterviewerComponent implements OnInit {
  form: any;
  genders: string[];
  techStacks: string[];
  experienceList: string[];
  communityTypeList: string[];
  roles: string[];
  submitted: boolean = false;
  
  constructor() { }
  
  ngOnInit() {
    this.genders = ['Male', 'Female']; 
    this.techStacks = ['Java', 'DotNet']; 
    this.experienceList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18',
                           '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35'];
    this.communityTypeList = ['Java', 'DotNet']; 
    this.roles = ['Senior','Mid', 'Lead', 'Architect', 'Project Manager'];                                         
  }

  onSubmit(form: any)  {
    this.submitted = true;
    this.form = form;
  }
}