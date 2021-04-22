import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from "./enrollment.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-forms';
  topics = ['Angular', 'React', 'Vue'];
  topicHasError: boolean = true;
  submitted = false;

  userModel = new User('Rob', 'rob@test.com', 1234567890, 'default', 'morning', true);

  constructor(private _enrollmentService: EnrollmentService) {

  }

  validateTopic(value: string) {
    if(value == "default")  {
      this.topicHasError = true;
    }
    else
      this.topicHasError = false;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success! ', data),
        error => console.log('Error! ', error)
      )
  }

}
