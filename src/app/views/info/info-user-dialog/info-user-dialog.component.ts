import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-info-user-dialog',
  templateUrl: './info-user-dialog.component.html',
  styleUrls: ['./info-user-dialog.component.scss']
})
export class InfoUserDialogComponent implements OnInit {

  @Input() show = false;
  @Output() showChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  back() {
    this.showChange.emit(true);
  }

}
