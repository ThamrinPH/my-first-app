import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectStatus: string[] = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;

  ngOnInit() {
      this.projectForm = new FormGroup({
        'project': new FormControl(null, Validators.required, this.forbiddenProjectName),
        'mail': new FormControl(null, [Validators.required, Validators.email]),
        'projectStatus': new FormControl(null)
      });
  }

  forbiddenProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if ( control.value === 'Test') {
          resolve({'projectNameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.projectForm.value)
  }
}
