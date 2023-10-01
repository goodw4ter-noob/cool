import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appShowCloseBtn]',
})
export class ShowCloseBtnDirective {
  public isCloseBtnVisible = false;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer2: Renderer2
  ) {}

  private get icon(): Element {
    return (this.elementRef.nativeElement as HTMLElement)
      .children[1].children[1];
  }

  @HostListener('mouseenter', ['event'])
  public showCloseBtn(): void {
    this.renderer2.setStyle(this.icon, 'display', 'block');
  }

  @HostListener('mouseleave', ['event'])
  public hideCloseBtn(): void {
    this.renderer2.setStyle(this.icon, 'display', 'none');
  }
}
