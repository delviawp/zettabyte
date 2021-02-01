import { NTC } from './list';
import { Component, OnInit } from '@angular/core';
import { Ntc } from '../ntc'

@Component({
  selector: 'app-ntc',
  templateUrl: './ntc.component.html',
  styleUrls: ['./ntc.component.css']
})
export class NtcComponent implements OnInit {

  lists = NTC;
  selectedItem: Ntc | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(lists: Ntc) :void {
    this.selectedItem = lists
  }
}
