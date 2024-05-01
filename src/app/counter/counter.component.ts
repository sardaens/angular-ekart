import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  @Input() name!: string;
  @Input() val!: number;
  @Output() changed = new EventEmitter<number>()

  inc() {
    this.changed.emit(this.val + 1)
  }

  dec() {
    this.changed.emit(this.val - 1 < 0 ? 0 : this.val - 1)
  }
}
