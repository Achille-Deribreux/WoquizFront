import {Injectable} from '@angular/core';
import {TakequizBody} from "../models/takequizBody";
import {HttpClient} from "@angular/common/http";
import {Takequiz} from "../models/takequiz.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    private http: HttpClient
  ) {
  }

  backDevHost = "http://localhost:8080/quiz";

  getQuiz(body: TakequizBody) : Observable<Takequiz>{
    return this.http.post<Takequiz>(this.backDevHost+"/takeQuiz",body);
  }
}
