import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { COLLAPSE_PANELS } from '../../types/main.constants';
import { IPanel } from '../../types/main.types';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  public panels: IPanel[] = COLLAPSE_PANELS;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  public navigate(url: string): void {
    this.router.navigate([url], { relativeTo: this.route });
  }
}
