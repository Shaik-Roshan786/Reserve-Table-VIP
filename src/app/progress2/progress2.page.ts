import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress2',
  templateUrl: './progress2.page.html',
  styleUrls: ['./progress2.page.scss'],
})
export class Progress2Page implements OnInit {
  start = 0;

  constructor() { }

  ngOnInit() {
  }

  bar() {
    const progressCircular = document.querySelector('.progress-circular') as HTMLElement;
    const inp = document.querySelector('ion-input');
    const value = document.querySelector('.value') as HTMLElement;
    
    let inputValue = 0; // Declare inputValue outside of setInterval
    
    const progressEND = () => {
      value.textContent = `${this.start}%`;
      progressCircular.style.background = `conic-gradient(#880bea ${
        this.start * 3.6
      }deg, #ededed 0deg)`;
      if (this.start === inputValue) {
        clearInterval(progress);
        if (inp) {
          inp.value = '';
        }
      }
    };
    
    const progress = setInterval(() => {
      inputValue = inp ? parseInt(inp.value as string) : 0; // Assign value to inputValue

      if (this.start < inputValue) {
        this.start++;
        progressEND();
      } else {
        this.start--;
        progressEND();
      }
    }, 30);
  }
}


