import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Api } from 'src/app/helpers/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //TODO username diventa email
  editForm: FormGroup = this.fb.group({

    username: [],
    password: [],

  });
  constructor(protected fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/home/main']);
  }

  login(): void {
    let promise = Api.provider().account.createSession(this.editForm.get(["username"])!.value, this.editForm.get(["password"])!.value,);

    promise.then(function (response) {
      console.log(response); // Success
    }, function (error) {
      console.log(error); // Failure
    });
  }
}
