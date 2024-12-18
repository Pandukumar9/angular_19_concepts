import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseSkeletonComponent } from './reuse-skeleton.component';

describe('ReuseSkeletonComponent', () => {
  let component: ReuseSkeletonComponent;
  let fixture: ComponentFixture<ReuseSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuseSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
