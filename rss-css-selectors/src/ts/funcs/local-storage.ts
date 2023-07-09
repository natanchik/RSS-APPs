export type Levels = {
  active: number;
  passed: number[];
  helped: number[];
};

export const levels: Levels = {
  active: 1,
  passed: [],
  helped: [],
};

export function getDataFromLocStor() {
  const levelActive = localStorage.getItem('level-active');
  if (levelActive) {
    levels.active = +levelActive;
  }
  const levelPassed = localStorage.getItem('levels-passed');
  if (levelPassed) {
    levels.passed = JSON.parse(levelPassed);
  }
  const levelHelped = localStorage.getItem('levels-helped');
  if (levelHelped) {
    levels.helped = JSON.parse(levelHelped);
  }
}
