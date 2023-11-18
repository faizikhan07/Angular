import { Component } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password: string = '';

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
    console.log(this.includeLetters);
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
    console.log(this.includeNumbers);
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
    console.log(this.includeSymbols);
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters)
      validChars += letters;
    if (this.includeNumbers)
      validChars += numbers;
    if (this.includeSymbols)
      validChars += symbols;
    
    let generatedPassword = ''
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    } 
    this.password = generatedPassword;
  }
}

/**
 * These below topics covered:
 * 1. Event Binding
 * 2. Property Binding
 * 3. Interpolation
 * 
 * 1. Both Event and Property binding are one-way binding.
 * 
 *        +---------------------------+     Property Binding      +---------------------------+
 *        |     Typescript Code       |-------------------------->|      HTML Template        |
 *        |     (Business Logic)      |<--------------------------|                           |
 *        +---------------------------+       Event Binding       +---------------------------+
 *                                    
 *        -------------------------------------------------------
 *        EXAMPLE OF EVENT BINDING
 *        -------------------------------------------------------                              
 *          onClick() {                                          <input (click)="onClick()"/>
 *            console.log("button clicked")
 *          }
 *  
 *        -------------------------------------------------------
 *        EXAMPLE OF PROPERTY BINDING
 *        -------------------------------------------------------
 *        this.password = '1234'                                <input [value]="password" />
 */
