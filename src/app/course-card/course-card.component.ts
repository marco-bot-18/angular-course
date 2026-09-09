import {
  AfterViewInit,
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  input,
  output,
  QueryList,
  Input,
  TemplateRef,
} from "@angular/core";
import { Courses } from "../models/courses";
import { BrowserModule } from "@angular/platform-browser";
import {
  NgClass,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet
} from "@angular/common";
import { CourseImageComponent } from "../course-image/course-image.component";

@Component({
  selector: "course-card",
  imports: [
    BrowserModule,
    NgClass,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgTemplateOutlet
  ],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit {
  // @Input() course!: Courses;
  course = input<Courses>();
  cardIndex = input<Number>();

  courseSelected = output<Courses>();

  @ContentChild(CourseImageComponent, { read: ElementRef }) image!: ElementRef;
  @ContentChildren(CourseImageComponent, { read: ElementRef })
  images!: QueryList<CourseImageComponent>;

  @Input("noImageTemplate")
  noImageTemplate!: TemplateRef<any>;

  ngAfterViewInit(): void {
    if (this.image) {
      console.log(
        "[ngAfterViewInit] Course Card - Image component initialized",
        this.image,
      );
    }
    // if (this.images) {
    //   console.log(
    //     "Course Card - Image component initialized with content children",
    //     this.images,
    //   );
    // }
  }

  ngAfterContentInit(): void {
    if (this.image) {
      console.log(
        "[ngAfterContentInit] Course Card - Image component initialized",
        this.image,
      );
    }
    if (this.images) {
      this.images.changes.subscribe((images) => {
        console.log(
          "[ngAfterContentInit] Course Card - Image component initialized with content children",
          images,
        );
      });
    }
  }

  isImageVisible() {
    return this.course() && this.course().iconUrl;
  }

  onClickCourseView() {
    console.log(
      "Course Card - Component - Clicked on course view",
      this.course().description,
    );
    this.courseSelected.emit(this.course());
  }

  cardClasses() {
    return {
      "course-card": true,
      beginner: this.course().category == "BEGINNER",
      intermediate: this.course().category == "INTERMEDIATE",
      advanced: this.course().category == "ADVANCED",
    };
  }
}
