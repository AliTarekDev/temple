import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  public onScroll = new EventEmitter<number>();
  private sectionStart = new BehaviorSubject<number>(0);
  sectionStart$ = this.sectionStart.asObservable();

  constructor() {}

  emitScrollYPosition(yPosition: number) {
    this.onScroll.emit(yPosition);
    console.log(yPosition);
  }

  setSectionStart(position: number) {
    this.sectionStart.next(position);
  }
}
