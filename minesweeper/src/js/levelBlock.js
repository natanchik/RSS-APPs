// Form for choose level and amount of mines

let levelBlock = document.createElement("div");
levelBlock.setAttribute("name", "levelBlock");
levelBlock.classList.add("levelBlock");
levelBlock.setAttribute("id", "levelBlock");
levelBlock.innerHTML = '<p>You can choose level <br>and amount of mines: </p>';

let easy = document.createElement("INPUT");
easy.setAttribute("type", "radio");
easy.setAttribute("name", "size");
easy.setAttribute("id", "easy");
easy.setAttribute("class", "radio");
easy.setAttribute("Checked", 'true');
let easyLabel = document.createElement("LABEL");
easyLabel.setAttribute("for", "easy");
easyLabel.innerText = 'Easy level, size: 10 x 10 ';
levelBlock.appendChild(easyLabel);
easyLabel.appendChild(easy);

let medium = document.createElement("INPUT");
medium.setAttribute("type", "radio");
medium.setAttribute("name", "size");
medium.setAttribute("id", "medium");
medium.setAttribute("class", "radio");
let mediumLabel = document.createElement("LABEL");
mediumLabel.setAttribute("for", "medium");
mediumLabel.innerText = 'Medium level, size: 15 x 15 ';
levelBlock.appendChild(mediumLabel);
mediumLabel.appendChild(medium);

let hard = document.createElement("INPUT");
hard.setAttribute("type", "radio");
hard.setAttribute("name", "size");
hard.setAttribute("id", "hard");
hard.setAttribute("class", "radio");
let hardLabel = document.createElement("LABEL");
hardLabel.setAttribute("for", "hard");
hardLabel.innerText = 'Hard level, size: 25 x 25 ';
levelBlock.appendChild(hardLabel);
hardLabel.appendChild(hard);

let inputMine = document.createElement("INPUT");
inputMine.setAttribute("type", "number");
inputMine.setAttribute("name", "inputMine");
inputMine.setAttribute("min", "10");
inputMine.setAttribute("max", "99");
inputMine.setAttribute("id", "inputMine");
inputMine.setAttribute("class", "input");
let inputLabel = document.createElement("LABEL");
inputLabel.setAttribute("for", "inputMine");
inputLabel.innerText = 'Input amount of mines ';
levelBlock.appendChild(inputLabel);
inputLabel.appendChild(inputMine);

let submitButton = document.createElement("button");
// submitButton.setAttribute("type", "button");
submitButton.setAttribute("name", "sumbit");
submitButton.setAttribute("id", "submit");
submitButton.setAttribute("class", "submit");
submitButton.innerText = 'OK';
levelBlock.appendChild(submitButton);

export { levelBlock, submitButton }