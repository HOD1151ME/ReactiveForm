import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from './customRegex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ReactiveForm';
  // email!:string
  userForm!: FormGroup

  ngOnInit(): void {
    this.creatForm()
  }

  onSubmit(){
    console.log(this.userForm.value)
  }

  creatForm(){
    this.userForm = new FormGroup({
      'email' : new FormControl (null,[Validators.required,Validators.pattern(CustomRegex.email)]),
      'password' : new FormControl (null,[Validators.required, Validators.minLength(8),Validators.maxLength(16)])
    })
  }

  get getEmailControl(){
    return this.userForm.get('email') as FormControl
  }
  get getPasswordControl(){
    return this.userForm.get('password') as FormControl
  }
}
