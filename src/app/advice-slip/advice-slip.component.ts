import { Component, OnInit } from '@angular/core';
import { AdviceApiService } from '../service/advice-api.service';

@Component({
  selector: 'app-advice-slip',
  templateUrl: './advice-slip.component.html',
  styleUrls: ['./advice-slip.component.scss']
})
export class AdviceSlipComponent implements OnInit {

  advice = {}

  constructor(private adviceApiService: AdviceApiService) { }

  ngOnInit() {

    this.adviceApiService.getRandomAdvice().subscribe((advice: {})=>{
      console.log(advice);
      this.advice = advice;
    })  
  }

}
