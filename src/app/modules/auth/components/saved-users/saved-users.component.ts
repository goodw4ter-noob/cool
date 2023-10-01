import {
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-saved-users',
  templateUrl: './saved-users.component.html',
  styleUrls: ['./saved-users.component.scss'],
})
export class SavedUsersComponent {
  @ViewChild('card', { read: ElementRef })
  private card!: ElementRef<NzCardComponent>;
}
