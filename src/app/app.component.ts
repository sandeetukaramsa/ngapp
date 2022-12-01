import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component-copy.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  

  password = '';
  length: number = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeIncludeLetters(){
    this.includeLetters = !this.includeLetters;
    console.log(this.includeLetters)
  }

  onChangeIncludeNumbers(){
    this.includeNumbers = !this.includeNumbers;
    console.log(this.includeNumbers)
  }

  onChangeIncludeSymbols(){
    this.includeSymbols = !this.includeSymbols;
    console.log(this.includeSymbols)
  }

  onUserInput(bantu : Event){
    //String to number conversion  --> use '+' or parseInt()
    this.length = +(bantu.target as HTMLInputElement).value;
    console.log(this.length)


  }

  getPass(){
     const letters = 'abcdefghijklmnopqrstuvwxyz';
     const numbers = '0123456789';
     const symbols = '!@#$%^&*()';

     let validChars = '';

     // what babu wants

     if(this.includeLetters) validChars += letters;

     if(this.includeNumbers)  validChars += numbers;
     if(this.includeSymbols)  validChars += symbols;

     console.log(validChars);

     let generatedPassword = '';
     for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random()*validChars.length)
      generatedPassword += validChars[index];

     }
     this.password = generatedPassword;
  }

  /*
  password = ''; // PROPERTIES
  buttonclick(){
    console.log('Click ho gya');
    
  }
  */
}
