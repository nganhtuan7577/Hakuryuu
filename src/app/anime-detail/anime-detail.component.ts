import { Component, OnInit, Input } from '@angular/core';
import { Object } from '../object';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  @Input() public anime: Object;
  constructor() { }

  ngOnInit() {
  }

}
