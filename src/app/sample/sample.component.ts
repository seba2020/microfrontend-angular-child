import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: `
    <div style="border: 1px solid blue">
      <p>Data from Parent: {{dataFromParent}}</p>
      <input [(ngModel)]="input" [value]="input" (keydown.enter)="send()" />
    </div>
  `,
  styles: [
  ]
})
export class SampleComponent implements OnInit {
  @Input() dataFromParent = '';
  @Output() emitDataToParent = new EventEmitter<string>();
  input = '';
  ifLoaded = false;

  constructor() { }

  ngOnInit(): void {
    if (this.ifLoaded) {
      // este codigo solo va a correr una vez
      console.log(this.dataFromParent);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.ifLoaded) {
      this.ifLoaded = true;
      this.ngOnInit();
    }
  }

  send() {
    this.emitDataToParent.emit(this.input);
    this.input = '';
  }

}
