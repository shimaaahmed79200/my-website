import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  ngOnInit(): void {
    this.playSound();
  }

  playSound(): void {
    const audio = new Audio();
    audio.src = 'assets/sound/ancient.mp3';
    audio.load();
    audio.play();
  }
}
