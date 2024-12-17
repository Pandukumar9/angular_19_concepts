import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactFormComponent } from './forms/react-form/react-form.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { IMAGE_CONFIG, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ReactFormComponent,TemplateFormComponent,NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        placeholderResolution: 40
      }
    },
  ],
})
export class AppComponent {
  title = 'angular_19_concepts';
}
