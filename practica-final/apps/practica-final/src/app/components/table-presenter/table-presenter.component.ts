import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'practica-final-table-presenter',
  templateUrl: './table-presenter.component.html',
  styleUrls: ['./table-presenter.component.css']
})
export class TablePresenterComponent implements OnInit {

  constructor() { }

  @Input() data: any[];
  @Input() title: string;
  @Input() headers: string[];
  @Input() showHomeBtn: boolean;
  @Output() selectedItem = new EventEmitter<any>();

  ngOnInit(): void {
  }

  emitItem(item) {
    this.selectedItem.emit(item);
  }

}
