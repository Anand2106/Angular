import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title = 'form';
  get f()
{
  return this.loginForm.controls;
}
  loginForm=new FormGroup({
    FirstName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('[A-Za-z]*')]),
    LastName:new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]*')]),
    Email:new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')]),
    Zipcode:new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('^[0-9" "]*')]),
    password:new FormControl('',[Validators.required]),
  })

  loginUser()
  {
    console.log(this.loginForm.value);
  }

}