import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  subscription = "Advanced";
  submitted = false;
  user =  {
    email: '',
    password: '',
    subscription: ''
  }

  ngOnInit(): void {
    console.log(this.signupForm)
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.signupForm.value, this.user)
    this.user.email = this.signupForm.value.email;
    this.user.password = this.signupForm.value.password;
    this.user.subscription = this.signupForm.value.subscription;

    this.signupForm.reset();

  }

}
