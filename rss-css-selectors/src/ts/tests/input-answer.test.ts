import { isAnswerLevelNumber } from '../funcs/input-answer';

describe('isAnswerLevelNumber function', () => {
  it('should return true if input answer is a level number', () => {
    const item = '5';
    const answer = isAnswerLevelNumber(item);
    expect(answer).toBeTruthy();
  });

  it('should return false if input answer is not a level number', () => {
    const item1 = 'Level5';
    const answer1 = isAnswerLevelNumber(item1);
    expect(answer1).toBeFalsy();

    const item2 = '10a';
    const answer2 = isAnswerLevelNumber(item2);
    expect(answer2).toBeFalsy();
  });
});
