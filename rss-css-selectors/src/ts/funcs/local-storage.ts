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
    JSON.parse(levelPassed).forEach((x: number) => levels.passed.push(x));
  }
  const levelHelped = localStorage.getItem('levels-helped');
  if (levelHelped) {
    JSON.parse(levelHelped).forEach((x: number) => levels.helped.push(x));
  }
}
