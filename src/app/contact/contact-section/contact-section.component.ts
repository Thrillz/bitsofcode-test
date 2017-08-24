import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { EmailValidation } from './emailValidation';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'contact',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

  form: FormGroup;
  formErrors = {
    fullname: '',
    email: '',
    confirmEmail: '',
    textMessage: ''
  };
  pageTitle: string = 'Contact-page';

  validationMessages = {
    fullname: {
      required: "Full Name is required"
    },
    email: {
      required: "E-mail is required.",
      pattern: "Enter a valid E-mail"
    },
    confirmEmail: {
      required: "E-mail is required.",
      MatchEmail: "E-mails must match"
    },
    textMessage: {
      required: "Re-enter Password"
    }
  };

  constructor(private title: Title, private fb: FormBuilder, private userService: UserService) {  }

  ngOnInit() {
    // changes the title of the component
    this.title.setTitle(this.pageTitle);

    // build the data model for our contact form
    this.buildForm();
  }

  // build the initial form
  buildForm () {

    // build the form
    this.form = this.fb.group({
      fullname: ['', [ Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      textMessage: ['', [Validators.required]],
      confirmEmail: ['', [Validators.required]] },
      { validator: EmailValidation.MatchEmail }
    );

    // watch for changes and validate
    this.form.valueChanges.subscribe(data => this.validateForm());
  }

  // validate the entire contact form
  validateForm() {

    // loop over the form errors field names
    for (let field in this.formErrors) {

      //clear input field errors
      this.formErrors[field] = '';

      //grab input field by name
      let input = this.form.get(field);

      if (input.invalid && input.dirty) {

        //figure out the type of error
        for (let errors in input.errors) {

          //assign that type of error message to a variable
          this.formErrors[field] = this.validationMessages[field][errors];
        }
      }

    }
  }

  sendForm() {
    const requestBody = {
      fullname: this.form.value.fullname,
      email: this.form.value.email,
      textMessage: this.form.value.textMessage
    }
    this.userService.saveMessage(requestBody);
  }
}
