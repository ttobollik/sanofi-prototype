import { Remedy } from './remedy.model';

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
    //remedy: Remedy;
  }

  // export interface AnswerOption {
  //   type: string;
  //   start: number;
  //   end: number;
  //   step: number;
  //   choices: string[];
  // }