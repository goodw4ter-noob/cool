import { Directive, ElementRef, HostListener, signal } from '@angular/core';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Directive({
  selector: '[appChangeWidth]',
})
export class ChangeWidthDirective {
  private isMoving = signal<boolean>(false);

  constructor(
    private readonly elementRef: ElementRef,
    private readonly drawerRef: NzDrawerRef,
  ) {}

  @HostListener('mousedown')
  public startMove(): void {
    this.isMoving.set(true);
  }

  @HostListener('document:mouseup')
  public stopMove(): void {
    this.isMoving.set(false);
  }

  @HostListener('document:mousemove', ['$event'])
  public move(event: MouseEvent): void {
    this.drawerRef.nzWidth = `${window.innerWidth - event.clientX + (this.elementRef.nativeElement as HTMLElement).parentElement!.offsetLeft}px`
  }

}
