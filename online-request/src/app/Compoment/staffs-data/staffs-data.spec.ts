import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsData } from './staffs-data';

describe('StaffsData', () => {
  let component: StaffsData;
  let fixture: ComponentFixture<StaffsData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffsData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffsData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
