const container = document.querySelector('.container');

const { innerHeight } = window;

init();

function init() {
  container.style.height = `${innerHeight}px`;
}
