import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsData } from './instructors-data';

describe('InstructorsData', () => {
  let component: InstructorsData;
  let fixture: ComponentFixture<InstructorsData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorsData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorsData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
