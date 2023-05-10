const images = document.querySelectorAll('img');

// images.forEach((image) => console.log(image));

images.forEach((image) => {
  const src = image.getAttribute('src');
  // console.log(src);
});

images.forEach((image) => {
  const alt = image.getAttribute('alt');
  // console.log(alt);
});

const urls = [];
images.forEach((image) => {
  urls.push(image.getAttribute('src'));
});
// console.log(urls);

const firstThree = urls.slice(0, 3);

// console.log(firstThree);

const alts = [];
images.forEach((image) => {
  alts.push(image.getAttribute('alt'));
});

// console.log(alts);

// console.log(images.length);

const first = [];
for (i = 0; i < urls.length; i++) {
  first.push(urls[i]);

  if (first.length === 3) {
    break;
  }
}
// console.log(first);

const lastThree = first.slice(-3);

// console.log(lastThree);

const last = [];
for (i = 0; i < urls.length; i++) {
  if (i < urls.length - 3) {
    continue;
  }

  last.push(urls[i]);
}

// console.log(last);

const cat = alts.filter((alt) => {
  return alt.match(/cat/i);
});

// console.log(cat);

images.forEach((image) => {
  // console.log(image.alt);
  document.querySelector(
    '.list-of-photos__list'
  ).innerHTML += `<li>${image.getAttribute('alt')}</li>`;
});
