import { Component, OnInit, Host } from '@angular/core';

@Component({
  selector: 'add-recruiter-form',
  templateUrl: './addRecruiter.component.html'
})
export class AddRecruiterComponent implements OnInit {
  form: any;
  powers: string[];
  genders: string[];
  techStacks: string[];
  submitted: boolean = false;
  
  constructor() { }
  
  ngOnInit() {
    this.powers = ['Really Smart', 'Turbulent Breeze', 
                'Super Hot', 'Weather Changer'];
    this.genders = ['Male', 'Female']; 
    this.techStacks = ['Java', 'Net'];                   
  }

  onSubmit(form: any)  {
    this.submitted = true;
    this.form = form;
  }
}