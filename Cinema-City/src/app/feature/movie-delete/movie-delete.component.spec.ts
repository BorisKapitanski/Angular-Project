import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDeleteComponent } from './movie-delete.component';

describe('MovieDeleteComponent', () => {
  let component: MovieDeleteComponent;
  let fixture: ComponentFixture<MovieDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDeleteComponent]
    });
    fixture = TestBed.createComponent(MovieDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
