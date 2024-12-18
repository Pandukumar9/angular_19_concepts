import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseHeaderComponent } from './reuse-header.component';

describe('ReuseHeaderComponent', () => {
  let component: ReuseHeaderComponent;
  let fixture: ComponentFixture<ReuseHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuseHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
