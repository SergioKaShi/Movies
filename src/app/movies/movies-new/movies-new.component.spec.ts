import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesNewComponent } from './movies-new.component';

describe('MoviesNewComponent', () => {
  let component: MoviesNewComponent;
  let fixture: ComponentFixture<MoviesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
