const menu = document.createElement('div');
menu.classList.add('menu');
document.body.appendChild(menu);

const settingButton = document.createElement("button");
settingButton.setAttribute("id", "settingButton");
settingButton.setAttribute("class", "menuButton");
settingButton.innerText = 'Settings';
menu.appendChild(settingButton);

const lastGamesButton = document.createElement("button");
lastGamesButton.setAttribute("id", "lastGamesButton");
lastGamesButton.setAttribute("class", "menuButton");
lastGamesButton.innerText = 'Last Games';
menu.appendChild(lastGamesButton);

// Adaptive for form

document.getElementById("settingButton").onclick = () => {
  document.getElementById("levelBlock").classList.toggle('called');
}

// Adaptive for LastGames block

lastGamesButton.onclick = () => {
  document.getElementById("lastGames").classList.toggle('called');
}

// Hide blocks

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("levelBlock").classList.remove("called");
    document.getElementById("lastGames").classList.remove("called");
  }
});

// Click out -> close modal
/*
document.querySelector("#levelBlock .called").addEventListener("click", event => {
  event._isClickWithInModal = true;
});

document.getElementById("levelBlock").addEventListener("click", event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("called");
});    

window.onclick = function(event) {
  if (event.target == document.getElementById("levelBlock")) {
    if (document.getElementById("form").classList.contains('called')) {
      document.getElementById("form").classList.toggle("called");
    }    
  }
}*/