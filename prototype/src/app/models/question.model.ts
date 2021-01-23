import { Improvement } from './improvement.model';

export interface Question {
    id: number;
    category: string;
    title: string;
    answerType: string;
    start: number;
    end: number;
    step: number;
    choices: string[];
    weight: number;
    improvement: number;
  }

