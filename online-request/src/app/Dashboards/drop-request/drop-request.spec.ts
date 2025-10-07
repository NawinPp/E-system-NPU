import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropRequest } from './drop-request';

describe('DropRequest', () => {
  let component: DropRequest;
  let fixture: ComponentFixture<DropRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
