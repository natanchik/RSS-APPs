export const maxLevel = 10;

export function markLevel(markedList: number[], curLevel: number, mark: string) {
  const levelButton = document.getElementById(`level-${curLevel}`);
  if (levelButton && !markedList.includes(curLevel) && curLevel > 0 && curLevel <= maxLevel) {
    levelButton.classList.add(mark);
    markedList.push(curLevel);
    localStorage.setItem(`levels-${mark}`, JSON.stringify(markedList));
  }
}
