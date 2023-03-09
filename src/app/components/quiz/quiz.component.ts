import {Component, OnInit} from '@angular/core';
import {Takequiz} from "../../models/takequiz.model";
import {FormBuilder, FormControl} from "@angular/forms";
import {TakequizBody} from "../../models/takequizBody";
import {QuizService} from "../../service/quiz.service";
import {WordLevel} from "../../models/wordLevel.model";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  //Word levels
  levels = new WordLevel(false,false,false)

  takeQuiz!: Takequiz;
  quizReady: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private quizService: QuizService
  ) {
  }

  ngOnInit(): void {
  }

  quizChoices = this.formBuilder.group({
    nrOfWords: new FormControl(''),
    easy: new FormControl(false),
    medium: new FormControl(false),
    hard: new FormControl(false)
  })

  quizQuestions = this.formBuilder.group({
  })

  submitQuizChoices() {
    let body: TakequizBody = new TakequizBody(this.quizChoices.value.nrOfWords, this.getLevelList())
    this.quizService.getQuiz(body)
      .subscribe((takeQuiz: Takequiz) => this.takeQuiz = takeQuiz);
    this.generateQuiz()
  }

  getLevelList(){
    let list: string[] = [];
    if (this.quizChoices.value.easy) {
      list.push('EASY');
    }
    if (this.quizChoices.value.medium) {
      list.push('MEDIUM');
    }
    if (this.quizChoices.value.hard) {
      list.push('HARD');
    }
    return list;
  }

  generateQuiz() {
    this.takeQuiz.wordList.forEach(s => this.quizChoices.addControl(
      s, new FormControl('')
    ));
    this.quizReady = true
  }

  submitQuizAnswers() {

  }


}
