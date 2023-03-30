import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  @Input() appHover: string = 'red';

  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log(this.eleRef.nativeElement);
    // this.eleRef.nativeElement.style.backgroundColor = this.color;
    this.renderer.setStyle(
      this.eleRef.nativeElement,
      'backgroundColor',
      this.appHover
    );
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.eleRef.nativeElement,
      'backgroundColor',
      'green'
    );
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.eleRef.nativeElement,
      'backgroundColor',
      'white'
    );
  }
}
