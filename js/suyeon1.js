window.onscroll = onScroll;

function onScroll() {
  var scroll_h = 100 * (document.documentElement.scrollTop/  (document.documentElement.scrollHeight - document.documentElement.clientHeight));
  document.querySelector("#test").style.setProperty('--percentage', scroll_h + "%");
}onScroll()