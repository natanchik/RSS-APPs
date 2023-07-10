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

export function getActiveLevel() {
  const levelActive = localStorage.getItem('level-active');
  if (levelActive) {
    levels.active = +levelActive;
  }
}

export function getMarkedLevels(levelsList: number[], mark: string) {
  const markedLevels = localStorage.getItem(`levels-${mark}`);
  if (markedLevels) {
    JSON.parse(markedLevels).forEach((lvl: number) => levelsList.push(lvl));
  }
}
