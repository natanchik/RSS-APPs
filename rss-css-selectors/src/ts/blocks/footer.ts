export const footer = document.createElement('div');
footer.classList.add('footer');

export const logo = document.createElement('span');
logo.innerHTML = '<a href="https://rs.school/js/"><div class="logo"></div></a>';
footer.appendChild(logo);

const footerText = document.createElement('div');
footerText.classList.add('footer-text');
footerText.innerHTML = `<p>My <a href='https://github.com/rolling-scopes-school/natanchik-JSFE2023Q1/tree/rss-css-selectors'>github</a> repository</p>
<p>2023</p>`;
footer.appendChild(footerText);
