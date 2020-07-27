import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss']
})
export class KeypadComponent implements OnInit {
public firstNumber: string;
public secondNumber: string;
public actionToTake: string;
public results: number;
public screen: string;

  constructor() { }

  //OPTIMISED CODE HERE
  //Data is what shows on the button
  //Action is false for a number, true for an operator
  public buttonPress(data,action){
    //Action goes here
    console.log ('The button you pressed was ',data);
    //If the button pressed was a number
    if(action==false){
      //If it is the first number and there is no operator
    if(this.actionToTake==''){
      //If it is the first number pressed then set the screen variable to be this number
      if(this.firstNumber==''){
        this.firstNumber= data;
        this.screen = data;
      }else{
        //This is not the first number pressed before there is an operator so we add them visually together
      this.firstNumber = this.firstNumber + data;
      this.screen = this.firstNumber
      }
     } else {
       //There is an operator so we are now building up the second number
        this.secondNumber= this.secondNumber + data;
        this.screen = this.secondNumber
      
    }
  }else{
    //The button that was pressed was an operator (the second parameter was true)
    this.actionToTake = data;
  }
    console.log ('The screen variable is ',this.screen);

  }

  //AIDAN'S CODE BENEATH THIS
  public calculateResults(){
    console.log('First ',this.firstNumber);
    console.log('Second ',this.secondNumber);
    console.log('Action ',this.actionToTake);

    //Use a Javascript switch command here instead of ifs
    if(this.actionToTake=='+'){
    this.results = Number(this.firstNumber) +  Number(this.secondNumber);
    }else
    if(this.actionToTake=='-'){
    this.results = Number(this.firstNumber) - Number(this.secondNumber);
    }else
    if(this.actionToTake=='/'){
    this.results = Number(this.firstNumber) / Number(this.secondNumber);
    }else
    if(this.actionToTake=='*'){
    this.results = Number(this.firstNumber) * Number(this.secondNumber);
    }
    //end of switch
    console.log('Results ',this.results);
    this.screen = this.results.toString();
  }

  public clear(){
    this.firstNumber = '';
    this.secondNumber = '';
    this.actionToTake = '';
    this.screen = '';
    this.results = null;
  }
  

  ngOnInit(): void {
this.clear();
;  }

}
