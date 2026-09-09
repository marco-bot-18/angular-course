import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseImageComponent } from './course-image.component';

describe('CourseImageComponent', () => {
  let component: CourseImageComponent;
  let fixture: ComponentFixture<CourseImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseImageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
