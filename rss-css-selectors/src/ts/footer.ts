export const footer = document.createElement('div');
footer.classList.add('footer');

export const logo = document.createElement('span');
logo.classList.add('logo');
logo.innerHTML = '<a href="https://rs.school/js/"></a>';
footer.appendChild(logo);

const footerText = document.createElement('div');
footerText.classList.add('footer-text');
footerText.innerHTML = `<p><a href='https://github.com/rolling-scopes-school/natanchik-JSFE2023Q1/tree/rss-css-selectors'>My github repository</a></p>
<p>2023</p>`;
footer.appendChild(footerText);