import { Question } from 'src/app/models/question.model';

export const MockQuestions: Question[] = [
    {id: 0,
    category: 'Energy',
    title: 'Are you driving an electric car?',
    answerType: 'boolean',
    start: 1,
    end: 10,
    step: 1,
    choices: [],
    weight: 4,
    improvement: 0,
    },
    {id: 1,
      category: 'Food',
      title: 'How many times a week do you eat meat?',
      answerType: 'numberRange',
      start: 1,
      end: 10,
      step: 1,
      choices: [],
      weight: 2,
      improvement: 0,
    },
    {id: 2,
      category: 'Energy',
      title: 'How many cars do you have?',
      answerType: 'number',
      start: 1,
      end: 10,
      step: 1,
      choices: [],
      weight: 2,
      improvement: 1,
    },
    {id: 3,
      category: 'Mobility',
      title: 'What is your favourite Animal',
      answerType: 'multipleChoice',
      start: 1,
      end: 10,
      step: 1,
      choices: ['Dog', 'Cat', 'Elephant'],
      weight: 10,
      improvement: 2,
    }
  ];