import { Component } from '@angular/core';
import { ReactFormComponent } from './forms/react-form/react-form.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { IMAGE_CONFIG } from '@angular/common';
import { ReuseSkeletonComponent } from './reuse-comp/reuse-skeleton/reuse-skeleton.component';

@Component({
  selector: 'app-root',
  imports: [ReactFormComponent,TemplateFormComponent,ReuseSkeletonComponent],
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

  isLoading:boolean = false;

  data = ['test' , 'test1' , 'test3'];
}
