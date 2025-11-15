import { AfterViewInit, Component, OnInit } from '@angular/core';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {

  ngAfterViewInit(): void {
    let deck = new Reveal({
      plugins: [Markdown],
    });
    deck.initialize({transition: 'slide'}).then(() => {
      console.log('HELLO?')
    });
  }
}
