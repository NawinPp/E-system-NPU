import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddACourse } from './add-a-course';

describe('AddACourse', () => {
  let component: AddACourse;
  let fixture: ComponentFixture<AddACourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddACourse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddACourse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
