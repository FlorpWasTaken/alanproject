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
public results: string;

  constructor() { }

  public button1(){
    if(this.actionToTake==''){
    this.firstNumber = this.firstNumber + '1';
    }else{
      this.secondNumber= this.secondNumber + '1';
    }
    this.calculateResults();
  }
  public button2(){
    if(this.actionToTake==''){
      this.firstNumber = this.firstNumber + '2';
      }else{
        this.secondNumber= this.secondNumber + '2';
      }

      this.calculateResults();
    }

  public buttonplus(){
    this.actionToTake = '+';
    console.log('You clicked the Plus Button', this.actionToTake);
    this.calculateResults();
  }

  public calculateResults(){
    console.log('First ',this.firstNumber);
    console.log('Second ',this.secondNumber);
    console.log('Action ',this.actionToTake);
    if(this.actionToTake=='+'){
    this.results = Number(this.firstNumber) +  Number(this.secondNumber);
    }
    console.log('Results ',this.results);
  }

  public clear(){
    this.firstNumber = '';
    this.secondNumber = '';
    this.actionToTake = '';
    this.results = '';
  }

  ngOnInit(): void {
this.clear();
;  }

}
