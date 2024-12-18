import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseCardComponent } from './reuse-card.component';

describe('ReuseCardComponent', () => {
  let component: ReuseCardComponent;
  let fixture: ComponentFixture<ReuseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuseCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
