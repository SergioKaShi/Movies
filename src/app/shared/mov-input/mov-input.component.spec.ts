import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovInputComponent } from './mov-input.component';

describe('MovInputComponent', () => {
  let component: MovInputComponent;
  let fixture: ComponentFixture<MovInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
