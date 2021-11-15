import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovSelectComponent } from './mov-select.component';

describe('MovSelectComponent', () => {
  let component: MovSelectComponent;
  let fixture: ComponentFixture<MovSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
