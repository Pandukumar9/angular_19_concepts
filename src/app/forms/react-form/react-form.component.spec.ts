import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactFormComponent } from './react-form.component';

describe('ReactFormComponent', () => {
  let component: ReactFormComponent;
  let fixture: ComponentFixture<ReactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
