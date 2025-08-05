import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BaseQuestion, demoQuestions, McqQuestion, Quiz, QuestionType, TrueFalseQuestion, MsqQuestion, QuizQuestion } from '@quiznest/auth';
import { BehaviorSubject } from 'rxjs';
import { BaseMedia, ImageMedia, LatexMedia, MediaItem, MediaType, TextMedia, VideoMedia, YouTubeMedia } from 'shared/src/core/media-models';
@Injectable({
  providedIn: 'root',
})
export class QuizHelperService {
  constructor(private sanitizer: DomSanitizer) {

  }
  createDummyQuestion(type: QuestionType): QuizQuestion {
    switch (type) {
      case QuestionType.MCQ:
        return this.createDummyMcqQuestion();

      case QuestionType.MSQ:
        return this.createDummyMsqQuestion();

      case QuestionType.TrueFalse:
        return this.createDummyTrueFalseQuestion();

      default:
        throw new Error(`Unsupported QuestionType: ${type}`);
    }
  }

  createDummyMcqQuestion(): McqQuestion {
    return {
      id: crypto.randomUUID(),
      type: QuestionType.MCQ,
      questionText: '',
      media: null,
      options: [
        { id: 'A', text: '' },
        { id: 'B', text: '' },
        { id: 'C', text: '' },
        { id: 'D', text: '' }
      ],
      correctOptionId: 'A',
    };
  }

  createDummyMsqQuestion(): MsqQuestion {
    return {
      id: crypto.randomUUID(),
      type: QuestionType.MSQ,
      questionText: '',
      media: null,
      options: [
        { id: 'A', text: '' },
        { id: 'B', text: '' },
        { id: 'C', text: '' },
        { id: 'D', text: '' }
      ],
      correctOptionIds: ['A'],
    };
  }

  createDummyTrueFalseQuestion(): TrueFalseQuestion {
    return {
      id: crypto.randomUUID(),
      type: QuestionType.TrueFalse,
      media: null,
      questionText: '',
      correctAnswer: true,
    };
  }

  getOriginalQuestionFormat(question: BaseQuestion | null): QuizQuestion | null {
    if (!question) {
      return null;
    }
    switch (question.type) {
      case QuestionType.MCQ:
        return question as McqQuestion;
      case QuestionType.MSQ:
        return question as MsqQuestion;
      case QuestionType.TrueFalse:
        return question as TrueFalseQuestion;
      default:
        return null;
    }
  }
  getOriginalMediaFormat(media: BaseMedia | MediaItem | null): MediaItem | null {
    if (!media) {
      return null;
    }
    switch (media.type) {
      case MediaType.IMAGE:
        return media as ImageMedia;
      case MediaType.TEXT:
        return media as TextMedia;
      case MediaType.VIDEO:
        return media as VideoMedia;
      case MediaType.YOUTUBE:
        return media as YouTubeMedia;
      case MediaType.LATEX:
        return media as LatexMedia;
      default:
        return null;
    }
  }


  getSafeUrlForYoutube(url: string): SafeResourceUrl {
    const videoId = this.extractYoutubeVideoId(url);
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  };

  extractYoutubeVideoId(url: string): string {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\s&?/]+)/
    );
    return match && match[1] ? match[1] : '';
  }
}


