import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenACourse } from './open-a-course';

describe('OpenACourse', () => {
  let component: OpenACourse;
  let fixture: ComponentFixture<OpenACourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenACourse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenACourse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
