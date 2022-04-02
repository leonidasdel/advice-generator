import { Component, OnInit } from '@angular/core';
import { AdviceApiService } from '../service/advice-api.service';

@Component({
  selector: 'app-advice-slip',
  templateUrl: './advice-slip.component.html',
  styleUrls: ['./advice-slip.component.scss']
})
export class AdviceSlipComponent implements OnInit {

  advice: advice_item = {
    slip: {
      id: null,
      advice: ''
    }
  };

  constructor(private adviceApiService: AdviceApiService) {
  }

  ngOnInit() {
    let randomNumber = Math.floor(Math.random() * 150) + 1;  
    this.adviceApiService.getRandomAdvice(randomNumber).subscribe((advice) => {
      console.log(advice);
      this.advice = <advice_item>advice;
    })
  }

  getAnotherAdvice(){
    let randomNumber = Math.floor(Math.random() * 150) + 1;  
    this.adviceApiService.getRandomAdvice(randomNumber).subscribe((advice) => {
      console.log(advice);
      this.advice = <advice_item>advice;
      console.log(advice);
    })
  }
}

export interface advice_item {
  slip: {
    id: number | null;
    advice: string | '';
  }
}