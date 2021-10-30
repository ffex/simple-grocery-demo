import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Appwrite } from 'appwrite';
import { Api } from 'src/app/helpers/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //TODO username diventa email
  editForm: FormGroup = this.fb.group({
    name: [],
    username: [],
    password: [],

  });
  constructor(protected fb: FormBuilder) { }

  ngOnInit(): void {
  }
test(){
  console.log("test")
}
  signup(): void {

    //TODO add controlli, doppia password, magari modello
    // Register User
    console.log("provider");
    console.log(Api.provider());
    Api.provider().
      account.create(this.editForm.get(["username"])!.value, this.editForm.get(["password"])!.value, this.editForm.get(["name"])!.value)
      .then(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
  }
}
