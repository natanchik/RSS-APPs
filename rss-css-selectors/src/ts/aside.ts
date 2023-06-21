export const asideBlock = document.createElement('aside');
asideBlock.classList.add('asideBlock');

const asideHeader = document.createElement('h2');
asideHeader.classList.add('title');
asideHeader.innerText = 'Level 1 of 32';
asideBlock.appendChild(asideHeader);
