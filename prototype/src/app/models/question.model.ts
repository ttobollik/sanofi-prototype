import { Remedy } from './remedy.model';

export interface Question {
    id: number;
    category: string;
    titel: string;
    answerType: string;
    answerOption: string;
    weight: number;
    //remedy: Remedy;
  }