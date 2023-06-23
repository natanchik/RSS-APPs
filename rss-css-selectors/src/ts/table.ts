export const title = document.createElement('h1');
title.classList.add('title');
title.innerText = 'Select active elements';

export const table = document.createElement('div');
table.classList.add('table');

const napkin = document.createElement('div');
napkin.classList.add('table-items');
napkin.classList.add('napkin');

const book = document.createElement('div');
book.classList.add('table-items');
book.classList.add('book');

const cat = document.createElement('div');
cat.classList.add('table-items');
cat.classList.add('cat');

const book1 = book.cloneNode(true);
if (book1 && book1 instanceof HTMLElement) { 
  book1.classList.add('animated'); 
};
table.appendChild(book1)

const book2 = book.cloneNode(true);
if (book2 && book2 instanceof HTMLElement) { 
  book2.classList.add('animated'); 
};
table.appendChild(book2)

const book3 = book.cloneNode(true);
if (book3 && book3 instanceof HTMLElement) { 
  book3.classList.add('animated'); 
};
table.appendChild(book3)

// table.appendChild(cat)
// cat.classList.add('animated');
// table.appendChild(napkin)
// napkin.classList.add('animated');