import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusePaginationComponent } from './reuse-pagination.component';

describe('ReusePaginationComponent', () => {
  let component: ReusePaginationComponent;
  let fixture: ComponentFixture<ReusePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusePaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
