/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./minesweeper/src/js/createBoard.js":
/*!*******************************************!*\
  !*** ./minesweeper/src/js/createBoard.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   board: () => (/* binding */ board),
/* harmony export */   createBoard: () => (/* binding */ createBoard)
/* harmony export */ });
const board = document.createElement('div');
board.classList.add('board');
board.setAttribute('id', 'board'); 

// Fill board with rows and cells

function createBoard(width, height) {  
  for (let i = 0; i < height; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    board.appendChild(row);
    for (let j = 0; j < width; j++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('id', `${i}-${j}`);    
      row.appendChild(cell);
    }
  } 
}

// Input custom's choice
/*
document.getElementById("submit").addEventListener("submit", function() {
  console.log('inputMine', inputMine);
  console.log('inputMine.value', inputMine.value);  
   
  const chosenLevel = document.querySelectorAll('.radio:checked');
  
  console.log("chosenLevel[0].id == 'easy'", chosenLevel[0].id == 'easy');
  
  if (chosenLevel[0].id === 'medium') { width = height = 15;
  } else if (chosenLevel[0].id === 'hard') { width = height = 25;
  } else { width = height = 10 }
   
  console.log('width', width);
  
  prepareToGame();  
  game(width, height, inputMine.value); 
  return false; 
});
*/


/***/ }),

/***/ "./minesweeper/src/js/levelBlock.js":
/*!******************************************!*\
  !*** ./minesweeper/src/js/levelBlock.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   levelBlock: () => (/* binding */ levelBlock),
/* harmony export */   submitButton: () => (/* binding */ submitButton)
/* harmony export */ });
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



/***/ }),

/***/ "./minesweeper/src/js/menu.js":
/*!************************************!*\
  !*** ./minesweeper/src/js/menu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lastGamesButton: () => (/* binding */ lastGamesButton),
/* harmony export */   menu: () => (/* binding */ menu),
/* harmony export */   settingButton: () => (/* binding */ settingButton)
/* harmony export */ });
const menu = document.createElement('div');
menu.classList.add('menu');

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

settingButton.onclick = () => {
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



/***/ }),

/***/ "./minesweeper/src/js/startGame.js":
/*!*****************************************!*\
  !*** ./minesweeper/src/js/startGame.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcMinesAround: () => (/* binding */ calcMinesAround),
/* harmony export */   getCellsAround: () => (/* binding */ getCellsAround),
/* harmony export */   mine: () => (/* binding */ mine),
/* harmony export */   mineList: () => (/* binding */ mineList)
/* harmony export */ });
let mineList = []; 

function getCellsAround(i, j) {  
  let cellsAround = [`${i-1}-${j-1}`, `${i-1}-${j}`, `${i-1}-${j+1}`, 
                     `${i}-${j-1}`, `${i}-${j+1}`,
                     `${i+1}-${j-1}`, `${i+1}-${j}`, `${i+1}-${j+1}`]; 
  return cellsAround;
}

function mine(minesAmount, width, height) { 
  mineList = [];   
  for (let i = 0; i < minesAmount; i++) {
    let mineX = Math.floor(Math.random() * width);
    console.log('mineX', mineX);
    let mineY = Math.floor(Math.random() * height);
    console.log('mineY', mineY);
    let mineCell = document.getElementById(`${mineX}-${mineY}`);
    while (mineCell.classList.contains('mined') || mineCell.classList.contains('opened')) {
      mineX = Math.floor(Math.random() * width);
      mineY = Math.floor(Math.random() * height);
      mineCell = document.getElementById(`${mineX}-${mineY}`);
    } 
    mineCell.classList.add('mined');       
    mineCell.innerHTML = '<span> &#10038; </span>';
    mineList.push(`${mineX}-${mineY}`);
  }  
}

function calcMinesAround(mineList, width, height) { 
  const colorNumbers = {1: '#0000FF', 2: '#00FF00', 3: '#FF00FF', 4: '#FFFF00', 
                        5: '#FFA500', 6: '#00FFFF', 7: '#800000', 8: '#008080' }
                    // {1: 'blue', 2: 'lime', 3: 'fuchsia', 4: 'yellow', 
                    //  5: 'orange', 6: 'cyan', 7: 'maroon', 8: 'teal' } 
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) { 
      const cell = document.getElementById(`${i}-${j}`);
      if (cell.classList.contains('mined')) {
        continue;
      }      
      let idCellsAround = getCellsAround(i, j);  
      const mineAround = mineList.filter(el => idCellsAround.includes(el));  
      const sumMineAround= mineAround.length;      
      if (sumMineAround !== 0) {
        cell.innerText = sumMineAround;      
        cell.setAttribute('style', `color: ${colorNumbers[sumMineAround]}`);   
      } else {
        cell.classList.add('empty');
      }
    }
  }  
}



/***/ }),

/***/ "./minesweeper/src/js/tablo.js":
/*!*************************************!*\
  !*** ./minesweeper/src/js/tablo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   counterBlock: () => (/* binding */ counterBlock),
/* harmony export */   startButton: () => (/* binding */ startButton),
/* harmony export */   tablo: () => (/* binding */ tablo),
/* harmony export */   timerBlock: () => (/* binding */ timerBlock)
/* harmony export */ });
let tablo = document.createElement('div');
tablo.classList.add('tablo');

let counterBlock = document.createElement('div');
counterBlock.classList.add('counter');
tablo.appendChild(counterBlock);

let startButton = document.createElement('div');
startButton.classList.add('startButton');
startButton.innerHTML = '<span> &#128578; </span>';
tablo.appendChild(startButton);

const timerBlock = document.createElement('div');
timerBlock.classList.add('timer');
tablo.appendChild(timerBlock);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./minesweeper/src/normalize.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./minesweeper/src/normalize.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\n html {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n \r\n\r\nbutton,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n}\r\n*/\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n/*\r\n [type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  /*outline-offset: -2px; /* 2 */\r\n\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}", "",{"version":3,"sources":["webpack://./minesweeper/src/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;CAED;EACC,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;;;;;;;;;CAUC;AACD;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;;uCAEuC;EACrC,8BAA8B;;;AAGhC;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\n html {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n \r\n\r\nbutton,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n}\r\n*/\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n/*\r\n [type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  /*outline-offset: -2px; /* 2 */\r\n\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./minesweeper/src/style.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./minesweeper/src/style.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./minesweeper/src/normalize.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Orbitron:wght@600&family=Roboto:wght@300;500&display=swap);"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  box-sizing: border-box;\r\n  background-image: linear-gradient(135grad, rgba(74, 74, 77, 0.379), rgb(44, 42, 52));\r\n  padding: 15px;\r\n}\r\n\r\n.menu {\r\n  display: block;\r\n  padding: 5px;\r\n  width: auto;    \r\n  font: normal 16px 'Roboto', sans-serif;\r\n  border: 2px solid #969393;   \r\n}\r\n\r\n.h1 {\r\n  margin: 5px auto;\r\n  text-align: center;\r\n  font: normal bold 30px 'Orbitron', sans-serif;\r\n  color: white;\r\n}\r\n\r\n.mainBlock {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  position: relative;\r\n}\r\n\r\n.levelBlock, \r\n.lastGames {\r\n  display: none;  \r\n  flex-direction: column;\r\n  margin: 10px 20px;\r\n  padding: 10px;  \r\n  width: 250px;\r\n  min-height: 250px;\r\n  max-height: max-content;\r\n  height: max-content;\r\n  align-self: right;  \r\n  text-align: right;\r\n  font: normal 16px 'Roboto', sans-serif;\r\n  line-height: 24px;  \r\n  background-image: linear-gradient(135grad, rgba(118, 118, 123, 0.379), rgb(158, 157, 161));\r\n  color: white;  \r\n  box-shadow: 7px 7px 0px 0px #817f7f;\r\n}\r\n\r\n.levelBlock p,\r\n.lastGames p {\r\n  font: normal bold 18px 'Roboto', sans-serif;\r\n}\r\n\r\n.radio {  \r\n  display: inline;\r\n  text-align: left;\r\n}\r\n\r\n.submit,\r\n.menuButton {\r\n  display: inline-block;\r\n  width: max-content;\r\n  height: max-content;\r\n  margin: 10px auto;\r\n  padding: 7px;\r\n  margin: 10px;\r\n  border: 2px solid #969393; \r\n  border-radius: 10px; \r\n  background-image: linear-gradient(100grad, rgba(187, 187, 189, 0.379), rgb(176, 175, 178)); \r\n}\r\n\r\n.menuButton:hover, .menuButton:focus, .menuButton:active {\r\n  cursor: pointer;\r\n  color: #171718;\r\n  border: 2px solid #6b6969;  \r\n  background-image: linear-gradient(100grad, rgb(176, 175, 178), rgba(187, 187, 189, 0.379)); \r\n}\r\n\r\n.tablo {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 50px;\r\n  margin: 10px auto;\r\n  padding: 15px;\r\n  justify-content: space-between;\r\n  background: #a3a1a1;\r\n  border: 2px solid #969393;  \r\n  font: normal bold 20px 'Orbitron', sans-serif;\r\n  line-height: 50px;  \r\n  text-align: center;   \r\n}\r\n\r\n.counter,\r\n.timer {\r\n  display: inline-block;\r\n  width: 100px;\r\n  border: 3px solid #747070;\r\n  color: red;\r\n  background: black;\r\n}\r\n\r\n.board {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  padding: 15px;\r\n  justify-content: space-between;\r\n  align-content: center;\r\n  width: min-content;\r\n  margin: 5px auto;  \r\n  background: #888888;\r\n  border: 10px solid #888888;\r\n  box-shadow: 7px 7px 0px 0px #6e6d6d;\r\n}\r\n\r\n.row {  \r\n  display: flex;  \r\n  margin: 0 auto;\r\n  justify-content: space-between;    \r\n}\r\n\r\n.cell,\r\n.startButton {\r\n  display: inline-block;  \r\n  cursor: pointer;\r\n  width: 40px;\r\n  height: 40px;  \r\n  font: normal bold 0px 'Orbitron', sans-serif;\r\n  line-height: 50px;\r\n  text-align: center;  \r\n  background: #a3a1a1;    \r\n  box-shadow:     \r\n    inset 0 0 2px 1px rgba(131, 129, 129, 0.25),\r\n    inset rgba(12, 9, 9, 0.25) -3px -3px 1px 5px,\r\n    inset rgba(255,255,255,.3) 3px 3px 1px 5px,\r\n    1px 1px 1px rgba(97, 95, 95, 0.15),\r\n    -2px -2px 5px rgba(28, 12, 12, 0.25);   \r\n  border: 1px solid #969393; \r\n}\r\n\r\n.startButton {  \r\n  width: 60px;\r\n  height: 60px;  \r\n  line-height: 60px;\r\n  font-size: 30px; \r\n}\r\n\r\n.cell.opened {    \r\n  background: #a3a1a1;  \r\n  box-shadow: none;  \r\n  font-size: 20px;  \r\n  border: 1px solid #969393;  \r\n}\r\n\r\n.mined.opened.other {\r\n  color: black;\r\n  background: red;\r\n}\r\n\r\n.mined.other {  \r\n  background: #a3a1a1;\r\n  color: black;\r\n  font-size: 20px; \r\n}\r\n\r\n.flagged {\r\n  color: red;\r\n  font-size: 20px; \r\n}\r\n\r\n@media (max-width: 700px) {\r\n  #board {order: -1;};\r\n\r\n  .levelBlock, \r\n  .lastGames {\r\n    display: none; \r\n  } \r\n}\r\n\r\n@media (min-width: 700px) {\r\n  .menu {\r\n    display: none;\r\n  }\r\n\r\n  .levelBlock, \r\n  .lastGames {\r\n    display: flex; \r\n  } \r\n}\r\n\r\n.called {\r\n  position: absolute;\r\n  display: flex;\r\n  background:rgb(176, 175, 178);\r\n  border: 2px solid #888888; \r\n  box-shadow: none;\r\n  z-index: 2;\r\n}\r\n\r\n.levelBlock.called { \r\n  top: -160px;\r\n  left: -20px;   \r\n}\r\n\r\n.lastGames.called {\r\n  top: -160px;\r\n  left: 92px;  \r\n}", "",{"version":3,"sources":["webpack://./minesweeper/src/style.css"],"names":[],"mappings":"AAGA;EACE,sBAAsB;EACtB,oFAAoF;EACpF,aAAa;AACf;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,WAAW;EACX,sCAAsC;EACtC,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,6CAA6C;EAC7C,YAAY;AACd;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;EACjB,sCAAsC;EACtC,iBAAiB;EACjB,0FAA0F;EAC1F,YAAY;EACZ,mCAAmC;AACrC;;AAEA;;EAEE,2CAA2C;AAC7C;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;;EAEE,qBAAqB;EACrB,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;EACnB,0FAA0F;AAC5F;;AAEA;EACE,eAAe;EACf,cAAc;EACd,yBAAyB;EACzB,0FAA0F;AAC5F;;AAEA;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,yBAAyB;EACzB,6CAA6C;EAC7C,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;;EAEE,qBAAqB;EACrB,YAAY;EACZ,yBAAyB;EACzB,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,0BAA0B;EAC1B,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,cAAc;EACd,8BAA8B;AAChC;;AAEA;;EAEE,qBAAqB;EACrB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,4CAA4C;EAC5C,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB;;;;;wCAKsC;EACtC,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,QAAQ,SAAS,CAAC,CAAA;;EAElB;;IAEE,aAAa;EACf;AACF;;AAEA;EACE;IACE,aAAa;EACf;;EAEA;;IAEE,aAAa;EACf;AACF;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,6BAA6B;EAC7B,yBAAyB;EACzB,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,WAAW;AACb;;AAEA;EACE,WAAW;EACX,UAAU;AACZ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Orbitron:wght@600&family=Roboto:wght@300;500&display=swap');\r\n@import './normalize.css';\r\n\r\nbody {\r\n  box-sizing: border-box;\r\n  background-image: linear-gradient(135grad, rgba(74, 74, 77, 0.379), rgb(44, 42, 52));\r\n  padding: 15px;\r\n}\r\n\r\n.menu {\r\n  display: block;\r\n  padding: 5px;\r\n  width: auto;    \r\n  font: normal 16px 'Roboto', sans-serif;\r\n  border: 2px solid #969393;   \r\n}\r\n\r\n.h1 {\r\n  margin: 5px auto;\r\n  text-align: center;\r\n  font: normal bold 30px 'Orbitron', sans-serif;\r\n  color: white;\r\n}\r\n\r\n.mainBlock {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  position: relative;\r\n}\r\n\r\n.levelBlock, \r\n.lastGames {\r\n  display: none;  \r\n  flex-direction: column;\r\n  margin: 10px 20px;\r\n  padding: 10px;  \r\n  width: 250px;\r\n  min-height: 250px;\r\n  max-height: max-content;\r\n  height: max-content;\r\n  align-self: right;  \r\n  text-align: right;\r\n  font: normal 16px 'Roboto', sans-serif;\r\n  line-height: 24px;  \r\n  background-image: linear-gradient(135grad, rgba(118, 118, 123, 0.379), rgb(158, 157, 161));\r\n  color: white;  \r\n  box-shadow: 7px 7px 0px 0px #817f7f;\r\n}\r\n\r\n.levelBlock p,\r\n.lastGames p {\r\n  font: normal bold 18px 'Roboto', sans-serif;\r\n}\r\n\r\n.radio {  \r\n  display: inline;\r\n  text-align: left;\r\n}\r\n\r\n.submit,\r\n.menuButton {\r\n  display: inline-block;\r\n  width: max-content;\r\n  height: max-content;\r\n  margin: 10px auto;\r\n  padding: 7px;\r\n  margin: 10px;\r\n  border: 2px solid #969393; \r\n  border-radius: 10px; \r\n  background-image: linear-gradient(100grad, rgba(187, 187, 189, 0.379), rgb(176, 175, 178)); \r\n}\r\n\r\n.menuButton:hover, .menuButton:focus, .menuButton:active {\r\n  cursor: pointer;\r\n  color: #171718;\r\n  border: 2px solid #6b6969;  \r\n  background-image: linear-gradient(100grad, rgb(176, 175, 178), rgba(187, 187, 189, 0.379)); \r\n}\r\n\r\n.tablo {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 50px;\r\n  margin: 10px auto;\r\n  padding: 15px;\r\n  justify-content: space-between;\r\n  background: #a3a1a1;\r\n  border: 2px solid #969393;  \r\n  font: normal bold 20px 'Orbitron', sans-serif;\r\n  line-height: 50px;  \r\n  text-align: center;   \r\n}\r\n\r\n.counter,\r\n.timer {\r\n  display: inline-block;\r\n  width: 100px;\r\n  border: 3px solid #747070;\r\n  color: red;\r\n  background: black;\r\n}\r\n\r\n.board {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  padding: 15px;\r\n  justify-content: space-between;\r\n  align-content: center;\r\n  width: min-content;\r\n  margin: 5px auto;  \r\n  background: #888888;\r\n  border: 10px solid #888888;\r\n  box-shadow: 7px 7px 0px 0px #6e6d6d;\r\n}\r\n\r\n.row {  \r\n  display: flex;  \r\n  margin: 0 auto;\r\n  justify-content: space-between;    \r\n}\r\n\r\n.cell,\r\n.startButton {\r\n  display: inline-block;  \r\n  cursor: pointer;\r\n  width: 40px;\r\n  height: 40px;  \r\n  font: normal bold 0px 'Orbitron', sans-serif;\r\n  line-height: 50px;\r\n  text-align: center;  \r\n  background: #a3a1a1;    \r\n  box-shadow:     \r\n    inset 0 0 2px 1px rgba(131, 129, 129, 0.25),\r\n    inset rgba(12, 9, 9, 0.25) -3px -3px 1px 5px,\r\n    inset rgba(255,255,255,.3) 3px 3px 1px 5px,\r\n    1px 1px 1px rgba(97, 95, 95, 0.15),\r\n    -2px -2px 5px rgba(28, 12, 12, 0.25);   \r\n  border: 1px solid #969393; \r\n}\r\n\r\n.startButton {  \r\n  width: 60px;\r\n  height: 60px;  \r\n  line-height: 60px;\r\n  font-size: 30px; \r\n}\r\n\r\n.cell.opened {    \r\n  background: #a3a1a1;  \r\n  box-shadow: none;  \r\n  font-size: 20px;  \r\n  border: 1px solid #969393;  \r\n}\r\n\r\n.mined.opened.other {\r\n  color: black;\r\n  background: red;\r\n}\r\n\r\n.mined.other {  \r\n  background: #a3a1a1;\r\n  color: black;\r\n  font-size: 20px; \r\n}\r\n\r\n.flagged {\r\n  color: red;\r\n  font-size: 20px; \r\n}\r\n\r\n@media (max-width: 700px) {\r\n  #board {order: -1;};\r\n\r\n  .levelBlock, \r\n  .lastGames {\r\n    display: none; \r\n  } \r\n}\r\n\r\n@media (min-width: 700px) {\r\n  .menu {\r\n    display: none;\r\n  }\r\n\r\n  .levelBlock, \r\n  .lastGames {\r\n    display: flex; \r\n  } \r\n}\r\n\r\n.called {\r\n  position: absolute;\r\n  display: flex;\r\n  background:rgb(176, 175, 178);\r\n  border: 2px solid #888888; \r\n  box-shadow: none;\r\n  z-index: 2;\r\n}\r\n\r\n.levelBlock.called { \r\n  top: -160px;\r\n  left: -20px;   \r\n}\r\n\r\n.lastGames.called {\r\n  top: -160px;\r\n  left: 92px;  \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./minesweeper/src/style.css":
/*!***********************************!*\
  !*** ./minesweeper/src/style.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_Loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-Loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-Loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_Loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_Loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_Loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-Loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-Loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_Loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_Loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_Loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-Loader/dist/runtime/insertBySelector.js */ "./node_modules/style-Loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_Loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_Loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_Loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-Loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-Loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_Loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_Loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_Loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-Loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-Loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_Loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_Loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_Loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-Loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-Loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_Loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_Loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./minesweeper/src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_Loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_Loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_Loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_Loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_Loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_Loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-Loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-Loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-Loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-Loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-Loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-Loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-Loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-Loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-Loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-Loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-Loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-Loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./minesweeper/src/main.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./minesweeper/src/style.css");
/* harmony import */ var _js_tablo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/tablo.js */ "./minesweeper/src/js/tablo.js");
/* harmony import */ var _js_levelBlock_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/levelBlock.js */ "./minesweeper/src/js/levelBlock.js");
/* harmony import */ var _js_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/menu.js */ "./minesweeper/src/js/menu.js");
/* harmony import */ var _js_createBoard_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/createBoard.js */ "./minesweeper/src/js/createBoard.js");
/* harmony import */ var _js_startGame_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/startGame.js */ "./minesweeper/src/js/startGame.js");







let boardWidth = 10; 
let boardHeight = 10;
let totalMineAmount = 10;

document.body.appendChild(_js_menu_js__WEBPACK_IMPORTED_MODULE_3__.menu);

const instruction = document.createElement('h1');
instruction.classList.add('h1');
instruction.innerHTML = '<p>To restart the game push the button &#128578;</p>';
document.body.appendChild(instruction);

const mainBlock = document.createElement('div');
mainBlock.classList.add('mainBlock');
document.body.appendChild(mainBlock);
mainBlock.appendChild(_js_levelBlock_js__WEBPACK_IMPORTED_MODULE_2__.levelBlock);

let counter = 0;
let timer = 0;
let timerUp;
mainBlock.appendChild(_js_createBoard_js__WEBPACK_IMPORTED_MODULE_4__.board); 
_js_createBoard_js__WEBPACK_IMPORTED_MODULE_4__.board.appendChild(_js_tablo_js__WEBPACK_IMPORTED_MODULE_1__.tablo);
_js_tablo_js__WEBPACK_IMPORTED_MODULE_1__.counterBlock.innerText = counter;
_js_tablo_js__WEBPACK_IMPORTED_MODULE_1__.timerBlock.innerText = timer;

const lastGames = document.createElement('div');
lastGames.classList.add('lastGames');
lastGames.setAttribute('id', 'lastGames'); 
lastGames.innerHTML = '<p>Last games:</p>';
mainBlock.appendChild(lastGames);

function prepareToGame() {
  _js_tablo_js__WEBPACK_IMPORTED_MODULE_1__.startButton.innerHTML = '<span> &#128578; </span>';
  counter = 0;
  _js_tablo_js__WEBPACK_IMPORTED_MODULE_1__.counterBlock.innerText = counter;
  timer = 0;
  _js_tablo_js__WEBPACK_IMPORTED_MODULE_1__.timerBlock.innerText = timer;
}

function deleteBoard() {  
  let rows = document.querySelectorAll('.row');
  if (rows) {
    let cells = _js_createBoard_js__WEBPACK_IMPORTED_MODULE_4__.board.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++) { cells[i].remove() } 
    for (let i = 0; i < rows.length; i++) { rows[i].remove() }
  }   
}

function stopGame() {
  clearInterval(timerUp);   
  let minedCells = document.querySelectorAll('.mined');  
  for (let i = 0; i < minedCells.length; i++) {
    minedCells[i].classList.add('other');        
  }
  _js_createBoard_js__WEBPACK_IMPORTED_MODULE_4__.board.onmousedown = () => {};  
}

function openEmpty(cell) {
  let idCell = cell.id.split('-');
  let i = +idCell[0];
  let j = +idCell[1];  
  let idCellsAround = (0,_js_startGame_js__WEBPACK_IMPORTED_MODULE_5__.getCellsAround)(i, j);   
  for (let el of idCellsAround) {
    let row = el.split('-')[0];
    let col = el.split('-')[1]; 
    if (el.includes('--') || el.startsWith('-') || +row >= boardHeight || +col >= boardWidth ) {
      continue;
    }
    let cellAround = document.getElementById(`${el}`);
    if (!cellAround.classList.contains('opened')) {  
      cellAround.classList.add('opened');
      if (cellAround.classList.contains('empty')) {        
      openEmpty(cellAround);
      }
    }   
  }
}

function win() {
  let openedCells = document.querySelectorAll('.opened');
  if (openedCells.length === boardWidth * boardHeight - totalMineAmount) {
    stopGame();
    _js_tablo_js__WEBPACK_IMPORTED_MODULE_1__.startButton.innerHTML = '<span> &#129321; </span>';
    alert(`Hooray! You found all mines in ${timer} seconds and ${counter} moves!`);          
  } 
}

function lose(target) {
  if (target.classList.contains('mined')) {      
    stopGame();
    _js_tablo_js__WEBPACK_IMPORTED_MODULE_1__.startButton.innerHTML = '<span> &#128565; </span>';
    alert('Game over. Try again');                    
  } 
}

function startGame(event, minesAmount, width, height) {
  const { target } = event;
  counter++; 
  _js_tablo_js__WEBPACK_IMPORTED_MODULE_1__.counterBlock.innerText = counter;
  target.classList.add('opened');
  (0,_js_startGame_js__WEBPACK_IMPORTED_MODULE_5__.mine)(minesAmount, width, height);
  (0,_js_startGame_js__WEBPACK_IMPORTED_MODULE_5__.calcMinesAround)(_js_startGame_js__WEBPACK_IMPORTED_MODULE_5__.mineList, width, height);
  if (target.classList.contains('empty')) {
    openEmpty(target);
  }
  win();
}

function mouseDown(event) {
  const { target } = event;
  if (target.classList.contains('cell')) {  
    if (event.button === 0 && !target.classList.contains('opened')) {
      counter++; 
      _js_tablo_js__WEBPACK_IMPORTED_MODULE_1__.counterBlock.innerText = counter;
      target.classList.add('opened');
      if (target.classList.contains('empty')) {
        openEmpty(target);
      }
      win();      
      lose(target);           
    } /*
    if (event.button === 2) {
      if (!target.classList.contains('flagged')) {
        target.classList.add('flagged');
        target.innerHTML = '<span> &#9873; </span>';
      } else {
        target.classList.remove('flagged');
      }      
    }*/
  }
}

function game(width, height, minesAmount) {   
  deleteBoard();  
  (0,_js_createBoard_js__WEBPACK_IMPORTED_MODULE_4__.createBoard)(width, height);
  let board = document.getElementById('board');
  board.onmousedown = function (event) { 
    if (event.target.classList.contains('cell')) {
      startGame(event, minesAmount, width, height);  
      timerUp = setInterval(() => _js_tablo_js__WEBPACK_IMPORTED_MODULE_1__.timerBlock.innerText = timer++, 1000);
      board.onmousedown = function (event) { mouseDown(event); }; 
    }
  }   
}

game(boardWidth, boardHeight, totalMineAmount);

_js_tablo_js__WEBPACK_IMPORTED_MODULE_1__.startButton.onmousedown = () => {
  prepareToGame();  
  game(boardWidth, boardHeight, totalMineAmount);
}

// Input custom's choice

_js_levelBlock_js__WEBPACK_IMPORTED_MODULE_2__.submitButton.addEventListener("click", function() {
  totalMineAmount = inputMine.value;
  const chosenLevel = document.querySelector('.radio:checked'); 
  if (chosenLevel.id === 'medium') { boardWidth = boardHeight = 15;
  } else if (chosenLevel.id === 'hard') { boardWidth = boardHeight = 25;
  } else { boardWidth = boardHeight = 10 }   
  prepareToGame();  
  game(boardWidth, boardHeight, totalMineAmount);   
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQix1QkFBdUIsT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLHVCQUF1QixPQUFPLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLE1BQU0sT0FBTyxzQkFBc0IscUJBQXFCLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxRQUFRLE1BQU0sU0FBUyxzQkFBc0IscUJBQXFCLHVCQUF1QixxQkFBcUIsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxjQUFjLEtBQUssTUFBTSxNQUFNLFFBQVEsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxTQUFTLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLHVCQUF1QixPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sc0JBQXNCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLE1BQU0sTUFBTSxPQUFPLGVBQWUsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIsT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sTUFB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WDtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25hdGFuY2hpay1qc2ZlMjAyM3ExLy4vbWluZXN3ZWVwZXIvc3JjL2pzL2NyZWF0ZUJvYXJkLmpzIiwid2VicGFjazovL25hdGFuY2hpay1qc2ZlMjAyM3ExLy4vbWluZXN3ZWVwZXIvc3JjL2pzL2xldmVsQmxvY2suanMiLCJ3ZWJwYWNrOi8vbmF0YW5jaGlrLWpzZmUyMDIzcTEvLi9taW5lc3dlZXBlci9zcmMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly9uYXRhbmNoaWstanNmZTIwMjNxMS8uL21pbmVzd2VlcGVyL3NyYy9qcy9zdGFydEdhbWUuanMiLCJ3ZWJwYWNrOi8vbmF0YW5jaGlrLWpzZmUyMDIzcTEvLi9taW5lc3dlZXBlci9zcmMvanMvdGFibG8uanMiLCJ3ZWJwYWNrOi8vbmF0YW5jaGlrLWpzZmUyMDIzcTEvLi9taW5lc3dlZXBlci9zcmMvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly9uYXRhbmNoaWstanNmZTIwMjNxMS8uL21pbmVzd2VlcGVyL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbmF0YW5jaGlrLWpzZmUyMDIzcTEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25hdGFuY2hpay1qc2ZlMjAyM3ExLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbmF0YW5jaGlrLWpzZmUyMDIzcTEvLi9taW5lc3dlZXBlci9zcmMvc3R5bGUuY3NzPzdiYzMiLCJ3ZWJwYWNrOi8vbmF0YW5jaGlrLWpzZmUyMDIzcTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtTG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbmF0YW5jaGlrLWpzZmUyMDIzcTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtTG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25hdGFuY2hpay1qc2ZlMjAyM3ExLy4vbm9kZV9tb2R1bGVzL3N0eWxlLUxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25hdGFuY2hpay1qc2ZlMjAyM3ExLy4vbm9kZV9tb2R1bGVzL3N0eWxlLUxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25hdGFuY2hpay1qc2ZlMjAyM3ExLy4vbm9kZV9tb2R1bGVzL3N0eWxlLUxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbmF0YW5jaGlrLWpzZmUyMDIzcTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtTG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9uYXRhbmNoaWstanNmZTIwMjNxMS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uYXRhbmNoaWstanNmZTIwMjNxMS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9uYXRhbmNoaWstanNmZTIwMjNxMS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmF0YW5jaGlrLWpzZmUyMDIzcTEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9uYXRhbmNoaWstanNmZTIwMjNxMS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25hdGFuY2hpay1qc2ZlMjAyM3ExL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9uYXRhbmNoaWstanNmZTIwMjNxMS8uL21pbmVzd2VlcGVyL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XHJcbmJvYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnYm9hcmQnKTsgXHJcblxyXG4vLyBGaWxsIGJvYXJkIHdpdGggcm93cyBhbmQgY2VsbHNcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkKHdpZHRoLCBoZWlnaHQpIHsgIFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHtcclxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xyXG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xyXG4gICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX0tJHtqfWApOyAgICBcclxuICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgfVxyXG4gIH0gXHJcbn1cclxuXHJcbi8vIElucHV0IGN1c3RvbSdzIGNob2ljZVxyXG4vKlxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKCkge1xyXG4gIGNvbnNvbGUubG9nKCdpbnB1dE1pbmUnLCBpbnB1dE1pbmUpO1xyXG4gIGNvbnNvbGUubG9nKCdpbnB1dE1pbmUudmFsdWUnLCBpbnB1dE1pbmUudmFsdWUpOyAgXHJcbiAgIFxyXG4gIGNvbnN0IGNob3NlbkxldmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhZGlvOmNoZWNrZWQnKTtcclxuICBcclxuICBjb25zb2xlLmxvZyhcImNob3NlbkxldmVsWzBdLmlkID09ICdlYXN5J1wiLCBjaG9zZW5MZXZlbFswXS5pZCA9PSAnZWFzeScpO1xyXG4gIFxyXG4gIGlmIChjaG9zZW5MZXZlbFswXS5pZCA9PT0gJ21lZGl1bScpIHsgd2lkdGggPSBoZWlnaHQgPSAxNTtcclxuICB9IGVsc2UgaWYgKGNob3NlbkxldmVsWzBdLmlkID09PSAnaGFyZCcpIHsgd2lkdGggPSBoZWlnaHQgPSAyNTtcclxuICB9IGVsc2UgeyB3aWR0aCA9IGhlaWdodCA9IDEwIH1cclxuICAgXHJcbiAgY29uc29sZS5sb2coJ3dpZHRoJywgd2lkdGgpO1xyXG4gIFxyXG4gIHByZXBhcmVUb0dhbWUoKTsgIFxyXG4gIGdhbWUod2lkdGgsIGhlaWdodCwgaW5wdXRNaW5lLnZhbHVlKTsgXHJcbiAgcmV0dXJuIGZhbHNlOyBcclxufSk7XHJcbiovXHJcbmV4cG9ydCB7IGJvYXJkLCBjcmVhdGVCb2FyZCB9IiwiLy8gRm9ybSBmb3IgY2hvb3NlIGxldmVsIGFuZCBhbW91bnQgb2YgbWluZXNcclxuXHJcbmxldCBsZXZlbEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubGV2ZWxCbG9jay5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibGV2ZWxCbG9ja1wiKTtcclxubGV2ZWxCbG9jay5jbGFzc0xpc3QuYWRkKFwibGV2ZWxCbG9ja1wiKTtcclxubGV2ZWxCbG9jay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxldmVsQmxvY2tcIik7XHJcbmxldmVsQmxvY2suaW5uZXJIVE1MID0gJzxwPllvdSBjYW4gY2hvb3NlIGxldmVsIDxicj5hbmQgYW1vdW50IG9mIG1pbmVzOiA8L3A+JztcclxuXHJcbmxldCBlYXN5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpO1xyXG5lYXN5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuZWFzeS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwic2l6ZVwiKTtcclxuZWFzeS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVhc3lcIik7XHJcbmVhc3kuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJyYWRpb1wiKTtcclxuZWFzeS5zZXRBdHRyaWJ1dGUoXCJDaGVja2VkXCIsICd0cnVlJyk7XHJcbmxldCBlYXN5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTEFCRUxcIik7XHJcbmVhc3lMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlYXN5XCIpO1xyXG5lYXN5TGFiZWwuaW5uZXJUZXh0ID0gJ0Vhc3kgbGV2ZWwsIHNpemU6IDEwIHggMTAgJztcclxubGV2ZWxCbG9jay5hcHBlbmRDaGlsZChlYXN5TGFiZWwpO1xyXG5lYXN5TGFiZWwuYXBwZW5kQ2hpbGQoZWFzeSk7XHJcblxyXG5sZXQgbWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpO1xyXG5tZWRpdW0uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xyXG5tZWRpdW0uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInNpemVcIik7XHJcbm1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lZGl1bVwiKTtcclxubWVkaXVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicmFkaW9cIik7XHJcbmxldCBtZWRpdW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMQUJFTFwiKTtcclxubWVkaXVtTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibWVkaXVtXCIpO1xyXG5tZWRpdW1MYWJlbC5pbm5lclRleHQgPSAnTWVkaXVtIGxldmVsLCBzaXplOiAxNSB4IDE1ICc7XHJcbmxldmVsQmxvY2suYXBwZW5kQ2hpbGQobWVkaXVtTGFiZWwpO1xyXG5tZWRpdW1MYWJlbC5hcHBlbmRDaGlsZChtZWRpdW0pO1xyXG5cclxubGV0IGhhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIik7XHJcbmhhcmQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xyXG5oYXJkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJzaXplXCIpO1xyXG5oYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGFyZFwiKTtcclxuaGFyZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJhZGlvXCIpO1xyXG5sZXQgaGFyZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxBQkVMXCIpO1xyXG5oYXJkTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaGFyZFwiKTtcclxuaGFyZExhYmVsLmlubmVyVGV4dCA9ICdIYXJkIGxldmVsLCBzaXplOiAyNSB4IDI1ICc7XHJcbmxldmVsQmxvY2suYXBwZW5kQ2hpbGQoaGFyZExhYmVsKTtcclxuaGFyZExhYmVsLmFwcGVuZENoaWxkKGhhcmQpO1xyXG5cclxubGV0IGlucHV0TWluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKTtcclxuaW5wdXRNaW5lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJudW1iZXJcIik7XHJcbmlucHV0TWluZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiaW5wdXRNaW5lXCIpO1xyXG5pbnB1dE1pbmUuc2V0QXR0cmlidXRlKFwibWluXCIsIFwiMTBcIik7XHJcbmlucHV0TWluZS5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgXCI5OVwiKTtcclxuaW5wdXRNaW5lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW5wdXRNaW5lXCIpO1xyXG5pbnB1dE1pbmUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dFwiKTtcclxubGV0IGlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTEFCRUxcIik7XHJcbmlucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaW5wdXRNaW5lXCIpO1xyXG5pbnB1dExhYmVsLmlubmVyVGV4dCA9ICdJbnB1dCBhbW91bnQgb2YgbWluZXMgJztcclxubGV2ZWxCbG9jay5hcHBlbmRDaGlsZChpbnB1dExhYmVsKTtcclxuaW5wdXRMYWJlbC5hcHBlbmRDaGlsZChpbnB1dE1pbmUpO1xyXG5cclxubGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbi8vIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG5zdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInN1bWJpdFwiKTtcclxuc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0XCIpO1xyXG5zdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzdWJtaXRcIik7XHJcbnN1Ym1pdEJ1dHRvbi5pbm5lclRleHQgPSAnT0snO1xyXG5sZXZlbEJsb2NrLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG5leHBvcnQgeyBsZXZlbEJsb2NrLCBzdWJtaXRCdXR0b24gfSIsImNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxubWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcblxyXG5jb25zdCBzZXR0aW5nQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuc2V0dGluZ0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNldHRpbmdCdXR0b25cIik7XHJcbnNldHRpbmdCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51QnV0dG9uXCIpO1xyXG5zZXR0aW5nQnV0dG9uLmlubmVyVGV4dCA9ICdTZXR0aW5ncyc7XHJcbm1lbnUuYXBwZW5kQ2hpbGQoc2V0dGluZ0J1dHRvbik7XHJcblxyXG5jb25zdCBsYXN0R2FtZXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5sYXN0R2FtZXNCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsYXN0R2FtZXNCdXR0b25cIik7XHJcbmxhc3RHYW1lc0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVCdXR0b25cIik7XHJcbmxhc3RHYW1lc0J1dHRvbi5pbm5lclRleHQgPSAnTGFzdCBHYW1lcyc7XHJcbm1lbnUuYXBwZW5kQ2hpbGQobGFzdEdhbWVzQnV0dG9uKTtcclxuXHJcbi8vIEFkYXB0aXZlIGZvciBmb3JtXHJcblxyXG5zZXR0aW5nQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZXZlbEJsb2NrXCIpLmNsYXNzTGlzdC50b2dnbGUoJ2NhbGxlZCcpO1xyXG59XHJcblxyXG4vLyBBZGFwdGl2ZSBmb3IgTGFzdEdhbWVzIGJsb2NrXHJcblxyXG5sYXN0R2FtZXNCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhc3RHYW1lc1wiKS5jbGFzc0xpc3QudG9nZ2xlKCdjYWxsZWQnKTtcclxufVxyXG5cclxuLy8gSGlkZSBibG9ja3NcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZXZlbEJsb2NrXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjYWxsZWRcIik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhc3RHYW1lc1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2FsbGVkXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBDbGljayBvdXQgLT4gY2xvc2UgbW9kYWxcclxuLypcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsZXZlbEJsb2NrIC5jYWxsZWRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICBldmVudC5faXNDbGlja1dpdGhJbk1vZGFsID0gdHJ1ZTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxldmVsQmxvY2tcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICBpZiAoZXZlbnQuX2lzQ2xpY2tXaXRoSW5Nb2RhbCkgcmV0dXJuO1xyXG4gIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImNhbGxlZFwiKTtcclxufSk7ICAgIFxyXG5cclxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xyXG4gIGlmIChldmVudC50YXJnZXQgPT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZXZlbEJsb2NrXCIpKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpLmNsYXNzTGlzdC5jb250YWlucygnY2FsbGVkJykpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJjYWxsZWRcIik7XHJcbiAgICB9ICAgIFxyXG4gIH1cclxufSovXHJcblxyXG5leHBvcnQgeyBtZW51LCBzZXR0aW5nQnV0dG9uLCBsYXN0R2FtZXNCdXR0b24gfSIsImxldCBtaW5lTGlzdCA9IFtdOyBcclxuXHJcbmZ1bmN0aW9uIGdldENlbGxzQXJvdW5kKGksIGopIHsgIFxyXG4gIGxldCBjZWxsc0Fyb3VuZCA9IFtgJHtpLTF9LSR7ai0xfWAsIGAke2ktMX0tJHtqfWAsIGAke2ktMX0tJHtqKzF9YCwgXHJcbiAgICAgICAgICAgICAgICAgICAgIGAke2l9LSR7ai0xfWAsIGAke2l9LSR7aisxfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgIGAke2krMX0tJHtqLTF9YCwgYCR7aSsxfS0ke2p9YCwgYCR7aSsxfS0ke2orMX1gXTsgXHJcbiAgcmV0dXJuIGNlbGxzQXJvdW5kO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtaW5lKG1pbmVzQW1vdW50LCB3aWR0aCwgaGVpZ2h0KSB7IFxyXG4gIG1pbmVMaXN0ID0gW107ICAgXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtaW5lc0Ftb3VudDsgaSsrKSB7XHJcbiAgICBsZXQgbWluZVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3aWR0aCk7XHJcbiAgICBjb25zb2xlLmxvZygnbWluZVgnLCBtaW5lWCk7XHJcbiAgICBsZXQgbWluZVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBoZWlnaHQpO1xyXG4gICAgY29uc29sZS5sb2coJ21pbmVZJywgbWluZVkpO1xyXG4gICAgbGV0IG1pbmVDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7bWluZVh9LSR7bWluZVl9YCk7XHJcbiAgICB3aGlsZSAobWluZUNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaW5lZCcpIHx8IG1pbmVDZWxsLmNsYXNzTGlzdC5jb250YWlucygnb3BlbmVkJykpIHtcclxuICAgICAgbWluZVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3aWR0aCk7XHJcbiAgICAgIG1pbmVZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaGVpZ2h0KTtcclxuICAgICAgbWluZUNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHttaW5lWH0tJHttaW5lWX1gKTtcclxuICAgIH0gXHJcbiAgICBtaW5lQ2VsbC5jbGFzc0xpc3QuYWRkKCdtaW5lZCcpOyAgICAgICBcclxuICAgIG1pbmVDZWxsLmlubmVySFRNTCA9ICc8c3Bhbj4gJiMxMDAzODsgPC9zcGFuPic7XHJcbiAgICBtaW5lTGlzdC5wdXNoKGAke21pbmVYfS0ke21pbmVZfWApO1xyXG4gIH0gIFxyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjTWluZXNBcm91bmQobWluZUxpc3QsIHdpZHRoLCBoZWlnaHQpIHsgXHJcbiAgY29uc3QgY29sb3JOdW1iZXJzID0gezE6ICcjMDAwMEZGJywgMjogJyMwMEZGMDAnLCAzOiAnI0ZGMDBGRicsIDQ6ICcjRkZGRjAwJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDU6ICcjRkZBNTAwJywgNjogJyMwMEZGRkYnLCA3OiAnIzgwMDAwMCcsIDg6ICcjMDA4MDgwJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gezE6ICdibHVlJywgMjogJ2xpbWUnLCAzOiAnZnVjaHNpYScsIDQ6ICd5ZWxsb3cnLCBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgNTogJ29yYW5nZScsIDY6ICdjeWFuJywgNzogJ21hcm9vbicsIDg6ICd0ZWFsJyB9IFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBoZWlnaHQ7IGorKykgeyBcclxuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2l9LSR7an1gKTtcclxuICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaW5lZCcpKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH0gICAgICBcclxuICAgICAgbGV0IGlkQ2VsbHNBcm91bmQgPSBnZXRDZWxsc0Fyb3VuZChpLCBqKTsgIFxyXG4gICAgICBjb25zdCBtaW5lQXJvdW5kID0gbWluZUxpc3QuZmlsdGVyKGVsID0+IGlkQ2VsbHNBcm91bmQuaW5jbHVkZXMoZWwpKTsgIFxyXG4gICAgICBjb25zdCBzdW1NaW5lQXJvdW5kPSBtaW5lQXJvdW5kLmxlbmd0aDsgICAgICBcclxuICAgICAgaWYgKHN1bU1pbmVBcm91bmQgIT09IDApIHtcclxuICAgICAgICBjZWxsLmlubmVyVGV4dCA9IHN1bU1pbmVBcm91bmQ7ICAgICAgXHJcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGNvbG9yOiAke2NvbG9yTnVtYmVyc1tzdW1NaW5lQXJvdW5kXX1gKTsgICBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9ICBcclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0Q2VsbHNBcm91bmQsIG1pbmUsIGNhbGNNaW5lc0Fyb3VuZCwgbWluZUxpc3QgfSIsImxldCB0YWJsbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG50YWJsby5jbGFzc0xpc3QuYWRkKCd0YWJsbycpO1xyXG5cclxubGV0IGNvdW50ZXJCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb3VudGVyQmxvY2suY2xhc3NMaXN0LmFkZCgnY291bnRlcicpO1xyXG50YWJsby5hcHBlbmRDaGlsZChjb3VudGVyQmxvY2spO1xyXG5cclxubGV0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0QnV0dG9uJyk7XHJcbnN0YXJ0QnV0dG9uLmlubmVySFRNTCA9ICc8c3Bhbj4gJiMxMjg1Nzg7IDwvc3Bhbj4nO1xyXG50YWJsby5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XHJcblxyXG5jb25zdCB0aW1lckJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnRpbWVyQmxvY2suY2xhc3NMaXN0LmFkZCgndGltZXInKTtcclxudGFibG8uYXBwZW5kQ2hpbGQodGltZXJCbG9jayk7XHJcblxyXG5leHBvcnQgeyB0YWJsbywgY291bnRlckJsb2NrLCB0aW1lckJsb2NrLCBzdGFydEJ1dHRvbiB9IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxyXFxuXFxyXFxuLyogRG9jdW1lbnRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXHJcXG4gKi9cXHJcXG5cXHJcXG4gaHRtbCB7XFxyXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcclxcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIFNlY3Rpb25zXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcclxcbiAqL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXHJcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogR3JvdXBpbmcgY29udGVudFxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXHJcXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5ociB7XFxyXFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcclxcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxyXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5wcmUge1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxyXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcclxcbiAqL1xcclxcblxcclxcbmEge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxyXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hYmJyW3RpdGxlXSB7XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuYixcXHJcXG5zdHJvbmcge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuY29kZSxcXHJcXG5rYmQsXFxyXFxuc2FtcCB7XFxyXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnNtYWxsIHtcXHJcXG4gIGZvbnQtc2l6ZTogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXHJcXG4gKiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuc3ViLFxcclxcbnN1cCB7XFxyXFxuICBmb250LXNpemU6IDc1JTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5zdWIge1xcclxcbiAgYm90dG9tOiAtMC4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5zdXAge1xcclxcbiAgdG9wOiAtMC41ZW07XFxyXFxufVxcclxcblxcclxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICovXFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9ybXNcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxub3B0Z3JvdXAsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxyXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxyXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxyXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQgeyAvKiAxICovXFxyXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxyXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5zZWxlY3QgeyAvKiAxICovXFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXHJcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXHJcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxufVxcclxcbiovXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxyXFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcclxcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxyXFxuICovXFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcclxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXHJcXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxyXFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXHJcXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxyXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxyXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxyXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxyXFxuICovXFxyXFxuXFxyXFxucHJvZ3Jlc3Mge1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXHJcXG4gKi9cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxyXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcclxcbiAqL1xcclxcblxcclxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcclxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXHJcXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcclxcbiAqL1xcclxcblxcclxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXHJcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG4vKlxcclxcbiBbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXHJcXG4gIC8qb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXHJcXG5cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxyXFxuICovXFxyXFxuXFxyXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcclxcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbnRlcmFjdGl2ZVxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLypcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcclxcbiAqL1xcclxcblxcclxcbmRldGFpbHMge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnN1bW1hcnkge1xcclxcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNaXNjXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxyXFxuICovXFxyXFxuXFxyXFxudGVtcGxhdGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxyXFxuICovXFxyXFxuXFxyXFxuW2hpZGRlbl0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbWluZXN3ZWVwZXIvc3JjL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7Q0FFRDtFQUNDLGlCQUFpQixFQUFFLE1BQU07RUFDekIsOEJBQThCLEVBQUUsTUFBTTtBQUN4Qzs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsU0FBUztBQUNYOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsdUJBQXVCLEVBQUUsTUFBTTtFQUMvQixTQUFTLEVBQUUsTUFBTTtFQUNqQixpQkFBaUIsRUFBRSxNQUFNO0FBQzNCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsaUNBQWlDLEVBQUUsTUFBTTtBQUMzQzs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFOztBQUVGOzs7RUFHRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGOzs7OztFQUtFLG9CQUFvQixFQUFFLE1BQU07RUFDNUIsZUFBZSxFQUFFLE1BQU07RUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtFQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7UUFDUSxNQUFNO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtTQUNTLE1BQU07RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7Ozs7Ozs7Ozs7Q0FVQztBQUNEOztFQUVFOztBQUVGOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7Ozs7RUFLRTs7QUFFRjtFQUNFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsY0FBYyxFQUFFLE1BQU07RUFDdEIsY0FBYyxFQUFFLE1BQU07RUFDdEIsZUFBZSxFQUFFLE1BQU07RUFDdkIsVUFBVSxFQUFFLE1BQU07RUFDbEIsbUJBQW1CLEVBQUUsTUFBTTtBQUM3Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGOztFQUVFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsVUFBVSxFQUFFLE1BQU07QUFDcEI7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsWUFBWTtBQUNkOztBQUVBOzs7RUFHRTs7QUFFRjs7dUNBRXVDO0VBQ3JDLDhCQUE4Qjs7O0FBR2hDOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsYUFBYSxFQUFFLE1BQU07QUFDdkI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxyXFxuXFxyXFxuLyogRG9jdW1lbnRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXHJcXG4gKi9cXHJcXG5cXHJcXG4gaHRtbCB7XFxyXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcclxcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIFNlY3Rpb25zXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcclxcbiAqL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXHJcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogR3JvdXBpbmcgY29udGVudFxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXHJcXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5ociB7XFxyXFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcclxcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxyXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5wcmUge1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxyXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcclxcbiAqL1xcclxcblxcclxcbmEge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxyXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hYmJyW3RpdGxlXSB7XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuYixcXHJcXG5zdHJvbmcge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuY29kZSxcXHJcXG5rYmQsXFxyXFxuc2FtcCB7XFxyXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnNtYWxsIHtcXHJcXG4gIGZvbnQtc2l6ZTogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXHJcXG4gKiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuc3ViLFxcclxcbnN1cCB7XFxyXFxuICBmb250LXNpemU6IDc1JTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5zdWIge1xcclxcbiAgYm90dG9tOiAtMC4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5zdXAge1xcclxcbiAgdG9wOiAtMC41ZW07XFxyXFxufVxcclxcblxcclxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICovXFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9ybXNcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxub3B0Z3JvdXAsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxyXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxyXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxyXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQgeyAvKiAxICovXFxyXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxyXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5zZWxlY3QgeyAvKiAxICovXFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXHJcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXHJcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxufVxcclxcbiovXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxyXFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcclxcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxyXFxuICovXFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcclxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXHJcXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxyXFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXHJcXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxyXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxyXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxyXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxyXFxuICovXFxyXFxuXFxyXFxucHJvZ3Jlc3Mge1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXHJcXG4gKi9cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxyXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcclxcbiAqL1xcclxcblxcclxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcclxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXHJcXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcclxcbiAqL1xcclxcblxcclxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXHJcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG4vKlxcclxcbiBbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXHJcXG4gIC8qb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXHJcXG5cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxyXFxuICovXFxyXFxuXFxyXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcclxcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbnRlcmFjdGl2ZVxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLypcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcclxcbiAqL1xcclxcblxcclxcbmRldGFpbHMge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnN1bW1hcnkge1xcclxcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNaXNjXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxyXFxuICovXFxyXFxuXFxyXFxudGVtcGxhdGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxyXFxuICovXFxyXFxuXFxyXFxuW2hpZGRlbl0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUluc3RydW1lbnQrU2VyaWYmZmFtaWx5PU9yYml0cm9uOndnaHRANjAwJmZhbWlseT1Sb2JvdG86d2dodEAzMDA7NTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVncmFkLCByZ2JhKDc0LCA3NCwgNzcsIDAuMzc5KSwgcmdiKDQ0LCA0MiwgNTIpKTtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgd2lkdGg6IGF1dG87ICAgIFxcclxcbiAgZm9udDogbm9ybWFsIDE2cHggJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjOTY5MzkzOyAgIFxcclxcbn1cXHJcXG5cXHJcXG4uaDEge1xcclxcbiAgbWFyZ2luOiA1cHggYXV0bztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQ6IG5vcm1hbCBib2xkIDMwcHggJ09yYml0cm9uJywgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5CbG9jayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbEJsb2NrLCBcXHJcXG4ubGFzdEdhbWVzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7ICBcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IDEwcHggMjBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7ICBcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xcclxcbiAgbWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgYWxpZ24tc2VsZjogcmlnaHQ7ICBcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgZm9udDogbm9ybWFsIDE2cHggJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICBsaW5lLWhlaWdodDogMjRweDsgIFxcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWdyYWQsIHJnYmEoMTE4LCAxMTgsIDEyMywgMC4zNzkpLCByZ2IoMTU4LCAxNTcsIDE2MSkpO1xcclxcbiAgY29sb3I6IHdoaXRlOyAgXFxyXFxuICBib3gtc2hhZG93OiA3cHggN3B4IDBweCAwcHggIzgxN2Y3ZjtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsQmxvY2sgcCxcXHJcXG4ubGFzdEdhbWVzIHAge1xcclxcbiAgZm9udDogbm9ybWFsIGJvbGQgMThweCAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnJhZGlvIHsgIFxcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdCxcXHJcXG4ubWVudUJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICBwYWRkaW5nOiA3cHg7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjOTY5MzkzOyBcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEwMGdyYWQsIHJnYmEoMTg3LCAxODcsIDE4OSwgMC4zNzkpLCByZ2IoMTc2LCAxNzUsIDE3OCkpOyBcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVCdXR0b246aG92ZXIsIC5tZW51QnV0dG9uOmZvY3VzLCAubWVudUJ1dHRvbjphY3RpdmUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6ICMxNzE3MTg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjNmI2OTY5OyAgXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTAwZ3JhZCwgcmdiKDE3NiwgMTc1LCAxNzgpLCByZ2JhKDE4NywgMTg3LCAxODksIDAuMzc5KSk7IFxcclxcbn1cXHJcXG5cXHJcXG4udGFibG8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYmFja2dyb3VuZDogI2EzYTFhMTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5NjkzOTM7ICBcXHJcXG4gIGZvbnQ6IG5vcm1hbCBib2xkIDIwcHggJ09yYml0cm9uJywgc2Fucy1zZXJpZjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4OyAgXFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgXFxyXFxufVxcclxcblxcclxcbi5jb3VudGVyLFxcclxcbi50aW1lciB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjNzQ3MDcwO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxyXFxuICBtYXJnaW46IDVweCBhdXRvOyAgXFxyXFxuICBiYWNrZ3JvdW5kOiAjODg4ODg4O1xcclxcbiAgYm9yZGVyOiAxMHB4IHNvbGlkICM4ODg4ODg7XFxyXFxuICBib3gtc2hhZG93OiA3cHggN3B4IDBweCAwcHggIzZlNmQ2ZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdyB7ICBcXHJcXG4gIGRpc3BsYXk6IGZsZXg7ICBcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwsXFxyXFxuLnN0YXJ0QnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgIFxcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7ICBcXHJcXG4gIGZvbnQ6IG5vcm1hbCBib2xkIDBweCAnT3JiaXRyb24nLCBzYW5zLXNlcmlmO1xcclxcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcXHJcXG4gIGJhY2tncm91bmQ6ICNhM2ExYTE7ICAgIFxcclxcbiAgYm94LXNoYWRvdzogICAgIFxcclxcbiAgICBpbnNldCAwIDAgMnB4IDFweCByZ2JhKDEzMSwgMTI5LCAxMjksIDAuMjUpLFxcclxcbiAgICBpbnNldCByZ2JhKDEyLCA5LCA5LCAwLjI1KSAtM3B4IC0zcHggMXB4IDVweCxcXHJcXG4gICAgaW5zZXQgcmdiYSgyNTUsMjU1LDI1NSwuMykgM3B4IDNweCAxcHggNXB4LFxcclxcbiAgICAxcHggMXB4IDFweCByZ2JhKDk3LCA5NSwgOTUsIDAuMTUpLFxcclxcbiAgICAtMnB4IC0ycHggNXB4IHJnYmEoMjgsIDEyLCAxMiwgMC4yNSk7ICAgXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTY5MzkzOyBcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0QnV0dG9uIHsgIFxcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBoZWlnaHQ6IDYwcHg7ICBcXHJcXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xcclxcbiAgZm9udC1zaXplOiAzMHB4OyBcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwub3BlbmVkIHsgICAgXFxyXFxuICBiYWNrZ3JvdW5kOiAjYTNhMWExOyAgXFxyXFxuICBib3gtc2hhZG93OiBub25lOyAgXFxyXFxuICBmb250LXNpemU6IDIwcHg7ICBcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5NjkzOTM7ICBcXHJcXG59XFxyXFxuXFxyXFxuLm1pbmVkLm9wZW5lZC5vdGhlciB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5taW5lZC5vdGhlciB7ICBcXHJcXG4gIGJhY2tncm91bmQ6ICNhM2ExYTE7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDIwcHg7IFxcclxcbn1cXHJcXG5cXHJcXG4uZmxhZ2dlZCB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgZm9udC1zaXplOiAyMHB4OyBcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxyXFxuICAjYm9hcmQge29yZGVyOiAtMTt9O1xcclxcblxcclxcbiAgLmxldmVsQmxvY2ssIFxcclxcbiAgLmxhc3RHYW1lcyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7IFxcclxcbiAgfSBcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxyXFxuICAubWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGV2ZWxCbG9jaywgXFxyXFxuICAubGFzdEdhbWVzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDsgXFxyXFxuICB9IFxcclxcbn1cXHJcXG5cXHJcXG4uY2FsbGVkIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBiYWNrZ3JvdW5kOnJnYigxNzYsIDE3NSwgMTc4KTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM4ODg4ODg7IFxcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbEJsb2NrLmNhbGxlZCB7IFxcclxcbiAgdG9wOiAtMTYwcHg7XFxyXFxuICBsZWZ0OiAtMjBweDsgICBcXHJcXG59XFxyXFxuXFxyXFxuLmxhc3RHYW1lcy5jYWxsZWQge1xcclxcbiAgdG9wOiAtMTYwcHg7XFxyXFxuICBsZWZ0OiA5MnB4OyAgXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL21pbmVzd2VlcGVyL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxzQkFBc0I7RUFDdEIsb0ZBQW9GO0VBQ3BGLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLHNDQUFzQztFQUN0Qyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDZDQUE2QztFQUM3QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsMEZBQTBGO0VBQzFGLFlBQVk7RUFDWixtQ0FBbUM7QUFDckM7O0FBRUE7O0VBRUUsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLDBGQUEwRjtBQUM1Rjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLDBGQUEwRjtBQUM1Rjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsNkNBQTZDO0VBQzdDLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWiw0Q0FBNEM7RUFDNUMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkI7Ozs7O3dDQUtzQztFQUN0Qyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFFBQVEsU0FBUyxDQUFDLENBQUE7O0VBRWxCOztJQUVFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7O0lBRUUsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUluc3RydW1lbnQrU2VyaWYmZmFtaWx5PU9yYml0cm9uOndnaHRANjAwJmZhbWlseT1Sb2JvdG86d2dodEAzMDA7NTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBpbXBvcnQgJy4vbm9ybWFsaXplLmNzcyc7XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWdyYWQsIHJnYmEoNzQsIDc0LCA3NywgMC4zNzkpLCByZ2IoNDQsIDQyLCA1MikpO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICB3aWR0aDogYXV0bzsgICAgXFxyXFxuICBmb250OiBub3JtYWwgMTZweCAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5NjkzOTM7ICAgXFxyXFxufVxcclxcblxcclxcbi5oMSB7XFxyXFxuICBtYXJnaW46IDVweCBhdXRvO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udDogbm9ybWFsIGJvbGQgMzBweCAnT3JiaXRyb24nLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbkJsb2NrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsQmxvY2ssIFxcclxcbi5sYXN0R2FtZXMge1xcclxcbiAgZGlzcGxheTogbm9uZTsgIFxcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbjogMTBweCAyMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDsgIFxcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgbWluLWhlaWdodDogMjUwcHg7XFxyXFxuICBtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICBhbGlnbi1zZWxmOiByaWdodDsgIFxcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICBmb250OiBub3JtYWwgMTZweCAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4OyAgXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1Z3JhZCwgcmdiYSgxMTgsIDExOCwgMTIzLCAwLjM3OSksIHJnYigxNTgsIDE1NywgMTYxKSk7XFxyXFxuICBjb2xvcjogd2hpdGU7ICBcXHJcXG4gIGJveC1zaGFkb3c6IDdweCA3cHggMHB4IDBweCAjODE3ZjdmO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWxCbG9jayBwLFxcclxcbi5sYXN0R2FtZXMgcCB7XFxyXFxuICBmb250OiBub3JtYWwgYm9sZCAxOHB4ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFkaW8geyAgXFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LFxcclxcbi5tZW51QnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gIHBhZGRpbmc6IDdweDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5NjkzOTM7IFxcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTAwZ3JhZCwgcmdiYSgxODcsIDE4NywgMTg5LCAwLjM3OSksIHJnYigxNzYsIDE3NSwgMTc4KSk7IFxcclxcbn1cXHJcXG5cXHJcXG4ubWVudUJ1dHRvbjpob3ZlciwgLm1lbnVCdXR0b246Zm9jdXMsIC5tZW51QnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogIzE3MTcxODtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2YjY5Njk7ICBcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMDBncmFkLCByZ2IoMTc2LCAxNzUsIDE3OCksIHJnYmEoMTg3LCAxODcsIDE4OSwgMC4zNzkpKTsgXFxyXFxufVxcclxcblxcclxcbi50YWJsbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBiYWNrZ3JvdW5kOiAjYTNhMWExO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzk2OTM5MzsgIFxcclxcbiAgZm9udDogbm9ybWFsIGJvbGQgMjBweCAnT3JiaXRyb24nLCBzYW5zLXNlcmlmO1xcclxcbiAgbGluZS1oZWlnaHQ6IDUwcHg7ICBcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgICBcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50ZXIsXFxyXFxuLnRpbWVyIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICM3NDcwNzA7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXHJcXG4gIG1hcmdpbjogNXB4IGF1dG87ICBcXHJcXG4gIGJhY2tncm91bmQ6ICM4ODg4ODg7XFxyXFxuICBib3JkZXI6IDEwcHggc29saWQgIzg4ODg4ODtcXHJcXG4gIGJveC1zaGFkb3c6IDdweCA3cHggMHB4IDBweCAjNmU2ZDZkO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93IHsgIFxcclxcbiAgZGlzcGxheTogZmxleDsgIFxcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCxcXHJcXG4uc3RhcnRCdXR0b24ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAgXFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDsgIFxcclxcbiAgZm9udDogbm9ybWFsIGJvbGQgMHB4ICdPcmJpdHJvbicsIHNhbnMtc2VyaWY7XFxyXFxuICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgIFxcclxcbiAgYmFja2dyb3VuZDogI2EzYTFhMTsgICAgXFxyXFxuICBib3gtc2hhZG93OiAgICAgXFxyXFxuICAgIGluc2V0IDAgMCAycHggMXB4IHJnYmEoMTMxLCAxMjksIDEyOSwgMC4yNSksXFxyXFxuICAgIGluc2V0IHJnYmEoMTIsIDksIDksIDAuMjUpIC0zcHggLTNweCAxcHggNXB4LFxcclxcbiAgICBpbnNldCByZ2JhKDI1NSwyNTUsMjU1LC4zKSAzcHggM3B4IDFweCA1cHgsXFxyXFxuICAgIDFweCAxcHggMXB4IHJnYmEoOTcsIDk1LCA5NSwgMC4xNSksXFxyXFxuICAgIC0ycHggLTJweCA1cHggcmdiYSgyOCwgMTIsIDEyLCAwLjI1KTsgICBcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5NjkzOTM7IFxcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnRCdXR0b24geyAgXFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG4gIGhlaWdodDogNjBweDsgIFxcclxcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XFxyXFxuICBmb250LXNpemU6IDMwcHg7IFxcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5vcGVuZWQgeyAgICBcXHJcXG4gIGJhY2tncm91bmQ6ICNhM2ExYTE7ICBcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7ICBcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDsgIFxcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzk2OTM5MzsgIFxcclxcbn1cXHJcXG5cXHJcXG4ubWluZWQub3BlbmVkLm90aGVyIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJhY2tncm91bmQ6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1pbmVkLm90aGVyIHsgIFxcclxcbiAgYmFja2dyb3VuZDogI2EzYTFhMTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDsgXFxyXFxufVxcclxcblxcclxcbi5mbGFnZ2VkIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBmb250LXNpemU6IDIwcHg7IFxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXHJcXG4gICNib2FyZCB7b3JkZXI6IC0xO307XFxyXFxuXFxyXFxuICAubGV2ZWxCbG9jaywgXFxyXFxuICAubGFzdEdhbWVzIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTsgXFxyXFxuICB9IFxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXHJcXG4gIC5tZW51IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sZXZlbEJsb2NrLCBcXHJcXG4gIC5sYXN0R2FtZXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4OyBcXHJcXG4gIH0gXFxyXFxufVxcclxcblxcclxcbi5jYWxsZWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQ6cmdiKDE3NiwgMTc1LCAxNzgpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzg4ODg4ODsgXFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsQmxvY2suY2FsbGVkIHsgXFxyXFxuICB0b3A6IC0xNjBweDtcXHJcXG4gIGxlZnQ6IC0yMHB4OyAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubGFzdEdhbWVzLmNhbGxlZCB7XFxyXFxuICB0b3A6IC0xNjBweDtcXHJcXG4gIGxlZnQ6IDkycHg7ICBcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtTG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtTG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLUxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtTG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtTG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLUxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyB0YWJsbywgY291bnRlckJsb2NrLCB0aW1lckJsb2NrLCBzdGFydEJ1dHRvbiB9IGZyb20gJy4vanMvdGFibG8uanMnO1xyXG5pbXBvcnQgeyBsZXZlbEJsb2NrLCBzdWJtaXRCdXR0b24gfSBmcm9tICcuL2pzL2xldmVsQmxvY2suanMnO1xyXG5pbXBvcnQgeyBtZW51IH0gZnJvbSAnLi9qcy9tZW51LmpzJztcclxuaW1wb3J0IHsgYm9hcmQsIGNyZWF0ZUJvYXJkIH0gZnJvbSAnLi9qcy9jcmVhdGVCb2FyZC5qcyc7XHJcbmltcG9ydCB7IGdldENlbGxzQXJvdW5kLCBtaW5lLCBjYWxjTWluZXNBcm91bmQsIG1pbmVMaXN0IH0gZnJvbSAnLi9qcy9zdGFydEdhbWUuanMnO1xyXG5cclxubGV0IGJvYXJkV2lkdGggPSAxMDsgXHJcbmxldCBib2FyZEhlaWdodCA9IDEwO1xyXG5sZXQgdG90YWxNaW5lQW1vdW50ID0gMTA7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lbnUpO1xyXG5cclxuY29uc3QgaW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG5pbnN0cnVjdGlvbi5jbGFzc0xpc3QuYWRkKCdoMScpO1xyXG5pbnN0cnVjdGlvbi5pbm5lckhUTUwgPSAnPHA+VG8gcmVzdGFydCB0aGUgZ2FtZSBwdXNoIHRoZSBidXR0b24gJiMxMjg1Nzg7PC9wPic7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb24pO1xyXG5cclxuY29uc3QgbWFpbkJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbm1haW5CbG9jay5jbGFzc0xpc3QuYWRkKCdtYWluQmxvY2snKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluQmxvY2spO1xyXG5tYWluQmxvY2suYXBwZW5kQ2hpbGQobGV2ZWxCbG9jayk7XHJcblxyXG5sZXQgY291bnRlciA9IDA7XHJcbmxldCB0aW1lciA9IDA7XHJcbmxldCB0aW1lclVwO1xyXG5tYWluQmxvY2suYXBwZW5kQ2hpbGQoYm9hcmQpOyBcclxuYm9hcmQuYXBwZW5kQ2hpbGQodGFibG8pO1xyXG5jb3VudGVyQmxvY2suaW5uZXJUZXh0ID0gY291bnRlcjtcclxudGltZXJCbG9jay5pbm5lclRleHQgPSB0aW1lcjtcclxuXHJcbmNvbnN0IGxhc3RHYW1lcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5sYXN0R2FtZXMuY2xhc3NMaXN0LmFkZCgnbGFzdEdhbWVzJyk7XHJcbmxhc3RHYW1lcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xhc3RHYW1lcycpOyBcclxubGFzdEdhbWVzLmlubmVySFRNTCA9ICc8cD5MYXN0IGdhbWVzOjwvcD4nO1xyXG5tYWluQmxvY2suYXBwZW5kQ2hpbGQobGFzdEdhbWVzKTtcclxuXHJcbmZ1bmN0aW9uIHByZXBhcmVUb0dhbWUoKSB7XHJcbiAgc3RhcnRCdXR0b24uaW5uZXJIVE1MID0gJzxzcGFuPiAmIzEyODU3ODsgPC9zcGFuPic7XHJcbiAgY291bnRlciA9IDA7XHJcbiAgY291bnRlckJsb2NrLmlubmVyVGV4dCA9IGNvdW50ZXI7XHJcbiAgdGltZXIgPSAwO1xyXG4gIHRpbWVyQmxvY2suaW5uZXJUZXh0ID0gdGltZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUJvYXJkKCkgeyAgXHJcbiAgbGV0IHJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucm93Jyk7XHJcbiAgaWYgKHJvd3MpIHtcclxuICAgIGxldCBjZWxscyA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKSB7IGNlbGxzW2ldLnJlbW92ZSgpIH0gXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHsgcm93c1tpXS5yZW1vdmUoKSB9XHJcbiAgfSAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBzdG9wR2FtZSgpIHtcclxuICBjbGVhckludGVydmFsKHRpbWVyVXApOyAgIFxyXG4gIGxldCBtaW5lZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1pbmVkJyk7ICBcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1pbmVkQ2VsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgIG1pbmVkQ2VsbHNbaV0uY2xhc3NMaXN0LmFkZCgnb3RoZXInKTsgICAgICAgIFxyXG4gIH1cclxuICBib2FyZC5vbm1vdXNlZG93biA9ICgpID0+IHt9OyAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5FbXB0eShjZWxsKSB7XHJcbiAgbGV0IGlkQ2VsbCA9IGNlbGwuaWQuc3BsaXQoJy0nKTtcclxuICBsZXQgaSA9ICtpZENlbGxbMF07XHJcbiAgbGV0IGogPSAraWRDZWxsWzFdOyAgXHJcbiAgbGV0IGlkQ2VsbHNBcm91bmQgPSBnZXRDZWxsc0Fyb3VuZChpLCBqKTsgICBcclxuICBmb3IgKGxldCBlbCBvZiBpZENlbGxzQXJvdW5kKSB7XHJcbiAgICBsZXQgcm93ID0gZWwuc3BsaXQoJy0nKVswXTtcclxuICAgIGxldCBjb2wgPSBlbC5zcGxpdCgnLScpWzFdOyBcclxuICAgIGlmIChlbC5pbmNsdWRlcygnLS0nKSB8fCBlbC5zdGFydHNXaXRoKCctJykgfHwgK3JvdyA+PSBib2FyZEhlaWdodCB8fCArY29sID49IGJvYXJkV2lkdGggKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG4gICAgbGV0IGNlbGxBcm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtlbH1gKTtcclxuICAgIGlmICghY2VsbEFyb3VuZC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW5lZCcpKSB7ICBcclxuICAgICAgY2VsbEFyb3VuZC5jbGFzc0xpc3QuYWRkKCdvcGVuZWQnKTtcclxuICAgICAgaWYgKGNlbGxBcm91bmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbXB0eScpKSB7ICAgICAgICBcclxuICAgICAgb3BlbkVtcHR5KGNlbGxBcm91bmQpO1xyXG4gICAgICB9XHJcbiAgICB9ICAgXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB3aW4oKSB7XHJcbiAgbGV0IG9wZW5lZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wZW5lZCcpO1xyXG4gIGlmIChvcGVuZWRDZWxscy5sZW5ndGggPT09IGJvYXJkV2lkdGggKiBib2FyZEhlaWdodCAtIHRvdGFsTWluZUFtb3VudCkge1xyXG4gICAgc3RvcEdhbWUoKTtcclxuICAgIHN0YXJ0QnV0dG9uLmlubmVySFRNTCA9ICc8c3Bhbj4gJiMxMjkzMjE7IDwvc3Bhbj4nO1xyXG4gICAgYWxlcnQoYEhvb3JheSEgWW91IGZvdW5kIGFsbCBtaW5lcyBpbiAke3RpbWVyfSBzZWNvbmRzIGFuZCAke2NvdW50ZXJ9IG1vdmVzIWApOyAgICAgICAgICBcclxuICB9IFxyXG59XHJcblxyXG5mdW5jdGlvbiBsb3NlKHRhcmdldCkge1xyXG4gIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaW5lZCcpKSB7ICAgICAgXHJcbiAgICBzdG9wR2FtZSgpO1xyXG4gICAgc3RhcnRCdXR0b24uaW5uZXJIVE1MID0gJzxzcGFuPiAmIzEyODU2NTsgPC9zcGFuPic7XHJcbiAgICBhbGVydCgnR2FtZSBvdmVyLiBUcnkgYWdhaW4nKTsgICAgICAgICAgICAgICAgICAgIFxyXG4gIH0gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0R2FtZShldmVudCwgbWluZXNBbW91bnQsIHdpZHRoLCBoZWlnaHQpIHtcclxuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XHJcbiAgY291bnRlcisrOyBcclxuICBjb3VudGVyQmxvY2suaW5uZXJUZXh0ID0gY291bnRlcjtcclxuICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnb3BlbmVkJyk7XHJcbiAgbWluZShtaW5lc0Ftb3VudCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgY2FsY01pbmVzQXJvdW5kKG1pbmVMaXN0LCB3aWR0aCwgaGVpZ2h0KTtcclxuICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZW1wdHknKSkge1xyXG4gICAgb3BlbkVtcHR5KHRhcmdldCk7XHJcbiAgfVxyXG4gIHdpbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb3VzZURvd24oZXZlbnQpIHtcclxuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XHJcbiAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSkgeyAgXHJcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwICYmICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuZWQnKSkge1xyXG4gICAgICBjb3VudGVyKys7IFxyXG4gICAgICBjb3VudGVyQmxvY2suaW5uZXJUZXh0ID0gY291bnRlcjtcclxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ29wZW5lZCcpO1xyXG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZW1wdHknKSkge1xyXG4gICAgICAgIG9wZW5FbXB0eSh0YXJnZXQpO1xyXG4gICAgICB9XHJcbiAgICAgIHdpbigpOyAgICAgIFxyXG4gICAgICBsb3NlKHRhcmdldCk7ICAgICAgICAgICBcclxuICAgIH0gLypcclxuICAgIGlmIChldmVudC5idXR0b24gPT09IDIpIHtcclxuICAgICAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmbGFnZ2VkJykpIHtcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnZmxhZ2dlZCcpO1xyXG4gICAgICAgIHRhcmdldC5pbm5lckhUTUwgPSAnPHNwYW4+ICYjOTg3MzsgPC9zcGFuPic7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsYWdnZWQnKTtcclxuICAgICAgfSAgICAgIFxyXG4gICAgfSovXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnYW1lKHdpZHRoLCBoZWlnaHQsIG1pbmVzQW1vdW50KSB7ICAgXHJcbiAgZGVsZXRlQm9hcmQoKTsgIFxyXG4gIGNyZWF0ZUJvYXJkKHdpZHRoLCBoZWlnaHQpO1xyXG4gIGxldCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZCcpO1xyXG4gIGJvYXJkLm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7IFxyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSkge1xyXG4gICAgICBzdGFydEdhbWUoZXZlbnQsIG1pbmVzQW1vdW50LCB3aWR0aCwgaGVpZ2h0KTsgIFxyXG4gICAgICB0aW1lclVwID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGltZXJCbG9jay5pbm5lclRleHQgPSB0aW1lcisrLCAxMDAwKTtcclxuICAgICAgYm9hcmQub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHsgbW91c2VEb3duKGV2ZW50KTsgfTsgXHJcbiAgICB9XHJcbiAgfSAgIFxyXG59XHJcblxyXG5nYW1lKGJvYXJkV2lkdGgsIGJvYXJkSGVpZ2h0LCB0b3RhbE1pbmVBbW91bnQpO1xyXG5cclxuc3RhcnRCdXR0b24ub25tb3VzZWRvd24gPSAoKSA9PiB7XHJcbiAgcHJlcGFyZVRvR2FtZSgpOyAgXHJcbiAgZ2FtZShib2FyZFdpZHRoLCBib2FyZEhlaWdodCwgdG90YWxNaW5lQW1vdW50KTtcclxufVxyXG5cclxuLy8gSW5wdXQgY3VzdG9tJ3MgY2hvaWNlXHJcblxyXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gIHRvdGFsTWluZUFtb3VudCA9IGlucHV0TWluZS52YWx1ZTtcclxuICBjb25zdCBjaG9zZW5MZXZlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYWRpbzpjaGVja2VkJyk7IFxyXG4gIGlmIChjaG9zZW5MZXZlbC5pZCA9PT0gJ21lZGl1bScpIHsgYm9hcmRXaWR0aCA9IGJvYXJkSGVpZ2h0ID0gMTU7XHJcbiAgfSBlbHNlIGlmIChjaG9zZW5MZXZlbC5pZCA9PT0gJ2hhcmQnKSB7IGJvYXJkV2lkdGggPSBib2FyZEhlaWdodCA9IDI1O1xyXG4gIH0gZWxzZSB7IGJvYXJkV2lkdGggPSBib2FyZEhlaWdodCA9IDEwIH0gICBcclxuICBwcmVwYXJlVG9HYW1lKCk7ICBcclxuICBnYW1lKGJvYXJkV2lkdGgsIGJvYXJkSGVpZ2h0LCB0b3RhbE1pbmVBbW91bnQpOyAgIFxyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9