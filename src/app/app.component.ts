import {
  Component,
  ChangeDetectionStrategy,
  viewChild,
  ViewChild,
  effect,
  ElementRef,
  AfterViewInit,
  ContentChild,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Courses } from "./models/courses";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AppComponent implements AfterViewInit {
  courses: Courses[] = COURSES;

  @ViewChild(CourseCardComponent) card1!: CourseCardComponent;
  // card = viewChild<CourseCardComponent>(CourseCardComponent);

  @ViewChild("cardRef1", { read: ElementRef }) card2!: ElementRef;
  // card1 = viewChild("cardRef1", {
  //   read: ElementRef,
  // });

  @ViewChild("container")
  containerDiv!: ElementRef;

  @ContentChild("courseImage") image!: ElementRef;

  // constructor() {
  //   effect(() => {
  //     const el = this.card();
  //     if (el) {
  //       el.cardClasses().intermediate.valueOf();
  //     }
  //   })
  // }

  ngAfterViewInit(): void {
    console.log(this.courses[0].iconUrl);
  }

  onCardClick(course: Courses) {
    // console.log("App - Component - Card clicked >>> ", course);
    console.log("App - Component - Card 1 clicked >>> ", this.card1);
    console.log("App - Component - Card 2 clicked >>> ", this.card2);
    console.log(
      "App - Component - Container div clicked >>> ",
      this.containerDiv,
    );
  }
}
