import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  answer: string
  words: string[] = ["words", "three", "irate", "rends", "wrenn", "adieu", "piano", "fruit"]
  guess: string = ""
  buttonDisabled: boolean = true
  constructor() {
    this.answer = this.words[Math.floor(Math.random() * this.words.length)]
    console.log(this.answer)
  }

  submit() {
    if (this.guess == this.answer)
      window.alert("You won!")

    let outStr: string = ""
    for (let char of this.guess.split("")) {
      //console.log(char, this.guess)
      if (this.answer.charAt(this.guess.indexOf(char)) == char) {  
        outStr += char
      } else if (this.answer.includes(char)) {
        outStr = outStr + '+'
      } else {
        outStr += '-'
      }
    }
    console.log(outStr)
    this.guess = ""
  }
}
