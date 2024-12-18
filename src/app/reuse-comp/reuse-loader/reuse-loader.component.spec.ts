import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseLoaderComponent } from './reuse-loader.component';

describe('ReuseLoaderComponent', () => {
  let component: ReuseLoaderComponent;
  let fixture: ComponentFixture<ReuseLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuseLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
