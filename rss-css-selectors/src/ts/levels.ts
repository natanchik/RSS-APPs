export const levelBlock = document.createElement('aside');
levelBlock.classList.add('level-block');

export const levelHeader = document.createElement('h2');
levelHeader.classList.add('level-header');
levelBlock.appendChild(levelHeader);

export const levelPanel = document.createElement('div');
levelPanel.classList.add('level-panel');
levelBlock.appendChild(levelPanel);

for (let i = 1; i < 11; i += 1) {
  const levelButton = document.createElement('button');
  levelButton.classList.add('level-button');
  levelButton.setAttribute('id', `level-${i}`);
  levelButton.innerText = `Level ${i}`;
  levelPanel.appendChild(levelButton);  
}

