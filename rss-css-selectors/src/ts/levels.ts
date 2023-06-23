export const levelBlock = document.createElement('aside');
levelBlock.classList.add('level-block');

const levelHeader = document.createElement('h2');
levelHeader.classList.add('level-header');
levelHeader.innerText = 'Level 1 of 10';
levelBlock.appendChild(levelHeader);

const levelPanel = document.createElement('div');
levelPanel.classList.add('level-panel');
levelBlock.appendChild(levelPanel);

for (let i = 1; i < 11; i += 1) {
  const levelButton = document.createElement('button');
  levelButton.classList.add('level-button');
  levelButton.innerText = `Level ${i}`;
  levelPanel.appendChild(levelButton);
}