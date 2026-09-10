import {
  Directive,
  HostBinding,
  Input,
  HostListener,
  input,
  signal,
  Output,
  EventEmitter,
} from "@angular/core";

@Directive({
  selector: "[highlighted]",
  exportAs: "hl",
})
export class HighlightedDirective {
  // highlighted = input<boolean>(false, { alias: "highlighted" });
  @Input("highlighted")
  isHighlighted: string | boolean = false;

  @Output() toggleHighlight = new EventEmitter<boolean>();

  constructor() {
    console.log("HighlightedDirective created: ", this.isHighlighted);
  }

  @HostBinding("class.highlighted")
  get cssClasses() {
    return this.isHighlighted;
  }

  @HostListener("mouseover", ["$event"])
  mouseOver($event) {
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
    console.log("Mouse over event triggered");
    console.log("Event target: ", $event);
  }

  @HostListener("mouseleave")
  mouseLeave() {
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
    console.log("Mouse leave event triggered");
  }

  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
    console.log("Toggle highlight event triggered: ", this.isHighlighted);
  }
}
