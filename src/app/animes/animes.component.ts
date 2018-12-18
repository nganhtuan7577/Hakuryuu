import { Component, OnInit } from '@angular/core';
import { Object } from '../object';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {

  public tempData: Object[] = [
    { id: 1, name: 'Clannad', imgSrc: '../assets/images/picture.jpg', type: 'Romance' },
    { id: 2, name: 'Clannad: After Story', imgSrc: '../assets/images/picture.jpg', type: 'Romance' },
    { id: 3, name: 'Magi', imgSrc: '../assets/images/picture.jpg', type: 'Action' },
    { id: 4, name: 'Ajin', imgSrc: '../assets/images/picture.jpg', type: 'Action' },
    { id: 5, name: 'Tokyo Ravens', imgSrc: '../assets/images/picture.jpg', type: 'Fantasy' },
    { id: 6, name: 'Tokyo Ghoul', imgSrc: '../assets/images/picture.jpg', type: 'Horror' },
    { id: 7, name: 'Deadman Wonderland', imgSrc: '../assets/images/picture.jpg', type: 'Horror' },
  ]
  constructor() { }

  ngOnInit() {
  }

}
