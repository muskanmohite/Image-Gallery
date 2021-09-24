import { Component } from '@angular/core';
import { interval } from 'rxjs';

import { FormGroup, FormControl, Validators } from '@angular/forms'

import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'image-gallery';
}

