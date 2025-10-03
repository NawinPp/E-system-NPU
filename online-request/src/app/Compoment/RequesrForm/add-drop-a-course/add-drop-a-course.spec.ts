import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDropACourse } from './add-drop-a-course';

describe('AddDropACourse', () => {
  let component: AddDropACourse;
  let fixture: ComponentFixture<AddDropACourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDropACourse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDropACourse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
