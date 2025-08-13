import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameQuiz, PracticeSetQuiz, QuizItem, QuizType } from '@quiznest/auth';
import { GameQuizComponent } from "../components/quiz-renderer/game-quiz/game-quiz.component";
import { PracticeSetQuizComponent } from "../components/quiz-renderer/practice-set-quiz/practice-set-quiz.component";

@Component({
  selector: 'app-quiz-view-home',
  imports: [CommonModule, GameQuizComponent, PracticeSetQuizComponent],
  templateUrl: './quiz-view-home.component.html',
  styleUrl: './quiz-view-home.component.css',
  standalone: true
})
export class QuizViewHomeComponent {
  QuizType = QuizType;
  quiz: QuizItem | null = null;

  constructor() {
    this.quiz = this.getSampleQuiz()
  }
  
  getGameQuiz():GameQuiz{
    return this.quiz as GameQuiz;
  }
  getPracticeSetQuiz():PracticeSetQuiz{
    return this.quiz as PracticeSetQuiz;
  }

  getSampleQuiz() {
    return {
      "id": "1755107915374",
      "title": "Test Game Quiz",
      "description": "test game desc",
      "type": "GAME",
      "createdBy": "Prano1234",
      "createdAt": new Date("2025-08-14T12:00:00Z"),
      "isActive": true,
      "startingPage": null,
      "questions": [
        {
          "id": "d71ee4af-c361-4623-8e24-d9747206cf86",
          "questionText": "What is the capital of France?",
          "type": "MCQ",
          "marks": 1,
          "maxTimeSec": 60,
          "mediaDisplayTimeSec": 10,
          "options": [
            {
              "id": "a1",
              "media": {
                "id": "17996911-ef5a-409b-b61f-6f72e39ceb4b",
                "type": "TEXT",
                "content": "gvjhbkjnlk"
              }
            },
            {
              "id": "a2",
              "media": {
                "id": "6b9fce2d-b83d-4c19-acd1-c1fa1a5ca745",
                "type": "LATEX",
                "content": "standalone: true"
              }
            },
            {
              "id": "a3",
              "media": {
                "id": "0924cf1d-23f1-4454-9714-72e4c54a7ac2",
                "name": "Wildflowers",
                "type": "IMAGE",
                "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
                "altText": "field of wildflowers"
              }
            },
            {
              "id": "a4",
              "media": {
                "id": "3fadbf55-3bb1-4fe4-9a83-f74a0cb3bc95",
                "type": "TEXT",
                "content": "<div><span>standalone</span><span>:</span> <span>true</span></div>"
              }
            }
          ],
          "correctOptionId": "a1",
          "media": {
            "id": "3755de5d-d655-4d65-92b4-dcab8d2ffb18",
            "name": "Desert Dunes",
            "type": "IMAGE",
            "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            "altText": "sand dunes in the desert"
          }
        },
        {
          "id": "c668e1f4-1702-4a2f-835d-48994c9b5a23",
          "questionText": "",
          "type": "MCQ",
          "marks": 1,
          "maxTimeSec": 60,
          "mediaDisplayTimeSec": 10,
          "options": [
            {
              "id": "a1",
              "media": {
                "id": "5c08e839-f782-472a-aa28-d5656f18efd2",
                "name": "Beautiful Mountains",
                "type": "IMAGE",
                "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
                "altText": "snow-covered mountains"
              }
            },
            {
              "id": "a2",
              "media": {
                "id": "92f1bce5-e145-4ca3-a380-e680c44e9fc8",
                "type": "HTML",
                "content": "<div><span>standalone</span><span>:</span> <span>true</span></div>"
              }
            },
            {
              "id": "a3",
              "media": {
                "id": "810f3866-2a50-4aa3-bfa3-b99537f8f754",
                "type": "HTML",
                "content": "<div><span>standalone</span><span>:</span> <span>true</span></div>"
              }
            },
            {
              "id": "a4",
              "media": {
                "id": "b029bb2f-488f-4596-b0eb-42910dc33c33",
                "type": "HTML",
                "content": "<div><span>standalone</span><span>:</span> <span>true</span></div>"
              }
            }
          ],
          "correctOptionId": "a1",
          "media": {
            "id": "efd3595f-3522-4335-b9b8-89539b8ab07d",
            "type": "LATEX",
            "content": "standalone:truestandalone:truestandalone:truestandalone:true"
          }
        }
      ]
    } as GameQuiz;
  }
}
