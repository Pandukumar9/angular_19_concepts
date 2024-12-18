import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseFooterComponent } from './reuse-footer.component';

describe('ReuseFooterComponent', () => {
  let component: ReuseFooterComponent;
  let fixture: ComponentFixture<ReuseFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuseFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
