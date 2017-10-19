$(document).ready(function () {


const panels = document.querySelectorAll('.panel');
function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('mouseenter', toggleOpen));
// panels.forEach(panel => panel.addEventListener('mouseleave', toggleInactive));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


  // Parallax effects //////////////////////////////////////////////////////////
const $metalword = $('metalword');
const $gold = $('.gold');
const $metalsidetext = $ ('.metalsidetext');
const $woodlog = $ ('.woodlog');
const $woodword = $ ('.woodword');
const $waterword= $ ('.waterword');
const $fireimage= $ ('.fireimage');


$(window).on('scroll', function () {
    const scrollTop = $(window).scrollTop();
    $metalword.css('background-position-y', -scrollTop / 2);
    $gold.css('background-position-y', scrollTop * 0.5);
    $metalsidetext.css('background-position-x', -scrollTop/ 20);
    $woodlog.css('background-position-x', scrollTop * .5);
    $woodword.css('background-position-y', scrollTop * 0.5);
    $waterword.css('background-position-y', scrollTop * 0.25);
    $fireimage.css('background-position-x', scrollTop * 0.25);
  });

});
