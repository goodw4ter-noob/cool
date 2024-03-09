import { Component } from '@angular/core';

@Component({
  selector: 'app-collapse-panel',
  templateUrl: './collapse-panel.component.html',
  styleUrl: './collapse-panel.component.scss',
})
export class CollapsePanelComponent {
  public panels = [
    {
      active: true,
      disabled: false,
      name: 'This is panel header 1',
      childPannel: [
        {
          active: false,
          disabled: true,
          name: 'This is panel header 1-1',
        },
      ],
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 2',
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 3',
    },
  ];
}
