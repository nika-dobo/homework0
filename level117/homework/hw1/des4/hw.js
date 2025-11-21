let body = document.body;

let element = {
  img: '<img src="ill.svg" class="first">',
  h4: "<h4>Learning</h4>",
  h5: "<h5>Published 21 Dec 2023</h5>",
  h1: "<h1>HTML & CSS foundations</h1>",
  p: "<p>These languages are the backbone of every website, defining structure, content, and presentation.</p>",
  div: '<div class="human"><img src="img.webp" class="second">Greg Hooper</div>',
};

body.innerHTML = `<div class="main">${element.img}${element.h4}${element.h5}${element.h1}${element.p}${element.div}</div>`;
