window.onload = () => {
  let ham = document.getElementById('ham');
  let menu = document.getElementById('menu');
  let scrollbar = document.getElementById('scrollShowBar');

  ham.addEventListener('click', (event) => {
    let hasOpen = ham.classList.contains('open')
    if (hasOpen) {
      ham.classList.remove('open');
      menu.classList.add('hide');

    } else {
      ham.classList.add('open');
      menu.classList.remove('hide');

    }
  });

  menu.addEventListener('click', (event) => {
    menu.classList.add('hide');
    ham.classList.remove('open');
  });

  window.addEventListener('scroll', () => {
    last_known_scroll_position = window.scrollY;
    if (last_known_scroll_position > 100) {
      scrollbar.classList.add('show');
    } else {
      scrollbar.classList.remove('show');
    }
  });


  let userLang = navigator.language || navigator.userLanguage;


  let collect = document.getElementsByClassName('zh-TW' === userLang ? "en" : "zw");
  if (collect) Array.from(collect).map((el) => {
    el.setAttribute('style', 'display:none');
  });


};