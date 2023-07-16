var typedWords = ``;

function updatePage(key) {
  document.querySelector(' .js-typing-in-page')
    .innerHTML = typedWords;
}

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    typedWords += `<br>`
  } else if (event.key.length === 1) {
    typedWords += event.key;
  } else {

  }
  updatePage(event.key);
})