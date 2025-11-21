import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements AfterViewInit {

  ngAfterViewInit(): void {
    const deck = new Reveal({
      plugins: [Markdown],
    });
    deck.initialize({transition: 'slide'})//.then(() => {});
  }
}
