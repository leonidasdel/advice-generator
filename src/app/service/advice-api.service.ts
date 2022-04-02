import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ADVICE_API_SERVER, ADVICE_API_BASE_PATH} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AdviceApiService {

  constructor(private httpClient: HttpClient) { }

  public getRandomAdvice(){
    return this.httpClient.get(ADVICE_API_SERVER + ADVICE_API_BASE_PATH );
  }
}
