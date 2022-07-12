let isRequesting = false;
let scrollY = 0;

function update(y) {
  isRequesting = false;

  console.log('updated scrollY:', scrollY);
}

function request() {
  if (!isRequesting) {
    setTimeout(update, 250);
  }
  isRequesting = true;
}

function onScroll() {
  console.log('requested scrollY:', window.scrollY);
  scrollY = window.scrollY;

  request();
}

window.addEventListener('scroll', onScroll, false);
