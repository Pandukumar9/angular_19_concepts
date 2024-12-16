import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactFormComponent } from './forms/react-form/react-form.component';

@Component({
  selector: 'app-root',
  imports: [ReactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_19_concepts';
}
