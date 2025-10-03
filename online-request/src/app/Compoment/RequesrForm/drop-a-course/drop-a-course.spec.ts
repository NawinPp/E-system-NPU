import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropACourse } from './drop-a-course';

describe('DropACourse', () => {
  let component: DropACourse;
  let fixture: ComponentFixture<DropACourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropACourse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropACourse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
