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
  public button3(){
    if(this.actionToTake==''){
      this.firstNumber = this.firstNumber + '3';
      }else{
        this.secondNumber= this.secondNumber + '3';
      }

      this.calculateResults();
    }
  public button4(){
    if(this.actionToTake==''){
      this.firstNumber = this.firstNumber + '4';
      }else{
        this.secondNumber= this.secondNumber + '4';
      }

      this.calculateResults();
    }
  public button5(){
    if(this.actionToTake==''){
      this.firstNumber = this.firstNumber + '5';
      }else{
        this.secondNumber= this.secondNumber + '5';
      }

      this.calculateResults();
    }
  public button6(){
    if(this.actionToTake==''){
      this.firstNumber = this.firstNumber + '6';
      }else{
        this.secondNumber= this.secondNumber + '6';
      }

      this.calculateResults();
    }
  public button7(){
    if(this.actionToTake==''){
      this.firstNumber = this.firstNumber + '7';
      }else{
        this.secondNumber= this.secondNumber + '7';
      }

      this.calculateResults();
    }
  public button8(){
    if(this.actionToTake==''){
      this.firstNumber = this.firstNumber + '8';
      }else{
        this.secondNumber= this.secondNumber + '8';
      }

      this.calculateResults();
    }
    public button9(){
      if(this.actionToTake==''){
        this.firstNumber = this.firstNumber + '9';
        }else{
          this.secondNumber= this.secondNumber + '9';
        }
  
        this.calculateResults();
    }
    public button0(){
      if(this.actionToTake==''){
        this.firstNumber = this.firstNumber + '0';
        }else{
          this.secondNumber= this.secondNumber + '0';
        }
  
        this.calculateResults();
    }
    public buttonplus(){
      this.actionToTake = '+';
      console.log('You clicked the Plus Button', this.actionToTake);
      this.calculateResults();
    }
    public buttonminus(){
      this.actionToTake = '-';
      console.log('You clicked the Minus Button', this.actionToTake);
      this.calculateResults();
    }
    public buttondivided(){
      this.actionToTake = '/';
      console.log('You clicked the Divided By Button', this.actionToTake);
      this.calculateResults();
    }
    public buttonmultiplied(){
      this.actionToTake = '*';
      console.log('You clicked the Multiplied By Button', this.actionToTake);
      this.calculateResults();
    }

  public calculateResults(){
    console.log('First ',this.firstNumber);
    console.log('Second ',this.secondNumber);
    console.log('Action ',this.actionToTake);
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
    console.log('Results ',this.results);
  }

  public clear(){
    this.firstNumber = '';
    this.secondNumber = '';
    this.actionToTake = '';
    this.results = null;
  }

  ngOnInit(): void {
this.clear();
;  }

}
