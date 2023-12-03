import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  [x: string]: any;
  properties: { [key: string]: any } = {
    'hair': [
      { name: 'Default', value: 'default' },
      { name: 'Curls', value: 'curls' },
      { name: 'Short', value: 'short' },
      { name: 'Bang', value: 'bang' },
      { name: 'Elegant', value: 'elegant' },
      { name: 'Quiff', value: 'quiff' }
    ],
    'eyes': [
      { name: 'Default', value: 'default' },
      { name: 'Angry', value: 'angry' },
      { name: 'Naughty', value: 'naughty' },
      { name: 'Panda', value: 'panda' },
      { name: 'Smart', value: 'smart' },
      { name: 'Star', value: 'star' }
    ],
    'mouth': [
      { name: 'Default', value: 'default' },
      { name: 'Eating', value: 'eating' },
      { name: 'Tongue', value: 'tongue' },
      { name: 'Laugh', value: 'laugh' },
      { name: 'Astonished', value: 'astonished' }
    ],
    'ears': [
      { name: 'Default', value: 'default' },
      { name: 'Tilt Backward', value: 'tilt-backward' },
      { name: 'Tilt Forward', value: 'tilt-forward' }
    ],
    'neck': [
      { name: 'Default', value: 'default' },
      { name: 'Thick', value: 'thick' },
      { name: 'Bend Backward', value: 'bend-backward' },
      { name: 'Bend Forward', value: 'bend-forward' }
    ],
    'leg': [
      { name: 'Default', value: 'default' },
      { name: 'Cookie', value: 'cookie' },
      { name: 'Bubble Tea', value: 'bubble-tea' },
      { name: 'Tilt Backward', value: 'tilt-backward' },
      { name: 'Tilt Forward', value: 'tilt-forward' },
      { name: 'Game Console', value: 'game-console' }
    ],
    'accessory': [
      { name: 'Default', value: 'default' },
      { name: 'Earings', value: 'earings' },
      { name: 'Flower', value: 'flower' },
      { name: 'Glasses', value: 'glasses' },
      { name: 'Headphones', value: 'headphone' }
    ],
    'background': [
      { name: 'Blue 50', value: 'blue50' },
      { name: 'Blue 60', value: 'blue60' },
      { name: 'Blue 70', value: 'blue70' },
      { name: 'Dark Blue 30', value: 'darkblue30' },
      { name: 'Dark Blue 50', value: 'darkblue50' },
      { name: 'Dark Blue 70', value: 'darkblue70' },
      { name: 'Green 50', value: 'green50' },
      { name: 'Green 60', value: 'green60' },
      { name: 'Green 70', value: 'green70' },
      { name: 'Grey 50', value: 'grey40' },
      { name: 'Grey 60', value: 'grey70' },
      { name: 'Grey 70', value: 'grey80' },
      { name: 'Red 50', value: 'red50' },
      { name: 'Red 60', value: 'red60' },
      { name: 'Red 70', value: 'red70' },
      { name: 'Yellow 50', value: 'yellow50' },
      { name: 'Yellow 60', value: 'yellow60' },
      { name: 'Yellow 70', value: 'yellow70' }
    ]
  };

  currentProperty: string = "hair";

  alpaca: { [key: string]: any } = {
    "hair": "bang",
    "eyes": "default",
    "mouth": "default",
    "ears": "default",
    "neck": "default",
    "leg": "default",
    "accessory": "default",
    "background": "blue50"
  };

  randomize() {
    for (let property in this.alpaca) {
      let randomIndex = Math.floor(Math.random() * this.properties[property].length);
      this.alpaca[property] = this.properties[property][randomIndex].value;
    }
  }

  save() {
    const alpacaElement = document.getElementById('alpaca');
    if (alpacaElement instanceof HTMLElement) {
      html2canvas(alpacaElement).then(canvas => {
        console.log(canvas);
        window.open(canvas.toDataURL('image/png'));
      });
    }
  }

  changeProperty(property: string) {
    this.currentProperty = property;
  }

  changeStyle(value: string) {
    this.alpaca[this.currentProperty] = value;
  }

}
