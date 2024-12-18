import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseDeleteComponent } from './reuse-delete.component';

describe('ReuseDeleteComponent', () => {
  let component: ReuseDeleteComponent;
  let fixture: ComponentFixture<ReuseDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuseDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
