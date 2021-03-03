import { Component, OnInit } from '@angular/core';
import { Kitty } from '../kitty'
import { KITTIES } from '../kitty-list'

@Component({
  selector: 'app-kitties',
  templateUrl: './kitties.component.html',
  styleUrls: ['./kitties.component.css']
})
export class KittiesComponent implements OnInit {

  kitlist = KITTIES;
  selectedKitty?: Kitty;
  iconImg: string = '../assets/icons/';
  originalImg: string = '../assets/originals/';
  iconSrc: string;
  originalSrc: string;

  constructor() { }

  ngOnInit() {
  }

  onSelect(kitty: Kitty): void {
    this.selectedKitty = kitty;
    this.iconSrc = this.iconImg + this.selectedKitty.img;
    this.originalSrc = this.originalImg + this.selectedKitty.img;

  }
}
