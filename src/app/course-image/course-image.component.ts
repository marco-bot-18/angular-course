import { Component, Input, input } from "@angular/core";

@Component({
  selector: "course-image",
  imports: [],
  templateUrl: "./course-image.component.html",
  styleUrl: "./course-image.component.css",
})
export class CourseImageComponent {
  // image = input.required<string>();
  @Input("src")
  image: string;
}
