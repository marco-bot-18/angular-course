import {
  Directive,
  HostBinding,
  HostListener,
  input,
  output,
  signal,
} from "@angular/core";

@Directive({
  selector: "[highlighted]",
  exportAs: "hl",
})
export class HighlightedDirective {
  readonly highlighted = input<boolean | string>(false, { alias: "highlighted" });
  readonly isHighlighted = signal<boolean>(false);

  readonly toggleHighlight = output<boolean>();

  constructor() {
    console.log("HighlightedDirective created: ", this.highlighted());
  }

  @HostBinding("class.highlighted")
  get cssClasses() {
    return this.isHighlighted() || this.highlighted();
  }

  @HostListener("mouseover", ["$event"])
  mouseOver($event: MouseEvent) {
    this.isHighlighted.set(true);
    this.toggleHighlight.emit(this.isHighlighted());
    console.log("Mouse over event triggered");
    console.log("Event target: ", $event);
  }

  @HostListener("mouseleave")
  mouseLeave() {
    this.isHighlighted.set(false);
    this.toggleHighlight.emit(this.isHighlighted());
    console.log("Mouse leave event triggered");
  }

  toggle() {
    this.isHighlighted.set(!this.isHighlighted());
    this.toggleHighlight.emit(this.isHighlighted());
    console.log("Toggle highlight event triggered: ", this.isHighlighted());
  }
}
