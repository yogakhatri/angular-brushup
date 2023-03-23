import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { roomDetails } from 'src/interfaces/common';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnChanges, OnDestroy {
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  @Input() title: string = '';

  @Input() roomsList: roomDetails[] = [];
  // @Input() isRoomsTableVisible: boolean = true;

  @Output() selectedRoom = new EventEmitter<roomDetails>();

  selectRoom(selectedRoom: roomDetails) {
    this.selectedRoom.emit(selectedRoom);
  }
  ngOnDestroy(): void {
    console.log('on destroy is called');
  }
}
