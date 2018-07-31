
let lazy_list = document.getElementsByClassName('lazy');
let lazys = Array.from(lazy_list);

lazys.forEach(ele => {
  let url = ele.getAttribute('lazy-src');
  if (ele.nodeName == 'DIV') ele.style.backgroundImage = url;
  else if (ele.nodeName == 'IMG') ele.src = url;
});
