export type Question = {
  question: string;
  options: string[];
  answer: number;
};

export class GameplayEngine {
  static checkAnswer(
    selected: number,
    question: Question
  ) {
    const isCorrect = selected === question.answer;

    return {
      isCorrect,
      xp: isCorrect ? 10 : 0,
    };
  }

  static getNextQuestion(
    index: number,
    questions: Question[]
  ) {
    return questions[index + 1] || null;
  }
}