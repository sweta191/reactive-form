import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {FormBuilder,Validators} from '@angular/forms';
import {UsernameValidators} from './validation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb:FormBuilder){}
  title = 'reactive-form';
  get UserName()
  {
    return this.registrationForm.get('userName');
  }

  get Email()
  {
    return this.registrationForm.get('email');
  }

  get Phone()
  {
    return this.registrationForm.get('phone');
  }

  get Password()
  {
    return this.registrationForm.get('password');
  }


  category=[
    {id:1,name:"science"},
    {id:2,name:"arts"}
  ];

  registrationForm = this.fb.group({
    userName:['',[Validators.required,Validators.minLength(3),UsernameValidators.cannotContainSpace]],
    password:['',[Validators.required]],
    confirmPassword:[],
    email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    phone:['',[Validators.required,Validators.pattern("^[7-9][0-9]{9}$")]],
    address:this.fb.group({
      city:[],
      state:[],
      postalCode:[]
    }),
    category:[''],
    gender:[''],
    notification:['']


  });
  // registrationForm= new FormGroup({
  //   userName: new FormControl(),
  //   password:new FormControl(),
  //   confirmPassword:new FormControl(),
  //   address: new FormGroup({
  //     city:new FormControl(),
  //     state:new FormControl(),
  //     postalCode:new FormControl()
  //   })
  // });

  loadapi()
  {
    console.log("I am clicked");
    this.registrationForm.setValue({
      userName:'sweta',
      password:'hkfhkd',
      confirmPassword:'mbnkdnv',
      address: {
        city:'kolkata',
        state:'West Bengal',
        postalCode:'700091'
      }
        
    });
  }
  
}
