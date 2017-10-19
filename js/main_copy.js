const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
    const paragraphs = this.querySelectorAll('.elementText');
    debugger
    for( let i = 0; i < paragraphs.length; i++ ){
      if (!paragraphs[i].classList.contains('open-P')) {
         paragraphs[i].classList.add('open-P');
      } else {
         paragraphs[0].classList.remove('open-P');
      }
    }
  }
}

panels.forEach(panel => panel.addEventListener('mouseenter', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
