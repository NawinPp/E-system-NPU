import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenRequest } from './open-request';

describe('OpenRequest', () => {
  let component: OpenRequest;
  let fixture: ComponentFixture<OpenRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
