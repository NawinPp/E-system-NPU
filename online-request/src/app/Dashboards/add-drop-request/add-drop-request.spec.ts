import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDropRequest } from './add-drop-request';

describe('AddDropRequest', () => {
  let component: AddDropRequest;
  let fixture: ComponentFixture<AddDropRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDropRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDropRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
