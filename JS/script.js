'use strict'

/* ------------------------------favicon------------------------------- */

let ico = document.querySelector('.ico')

window.addEventListener('blur', function(){
    document.title = 'On standby';
    ico.removeAttribute('href', 'img/favicon1.ico');
    ico.setAttribute('href', 'img/favicon2.ico');
});

window.addEventListener('focus', function(){
    document.title ='Flowers';
    ico.removeAttribute('href', 'img/favicon2.ico');
    ico.setAttribute('href', 'img/favicon1.ico');
});

/* --------------------------------Slider_1----------------------------------------- */

let slide = document.querySelectorAll('.slide');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let counter = 0;


function nextFunc() {
    slide[counter].style.opacity = '';
    ++counter
    if (counter >= slide.length) {
        counter = 0;
    }
    slide[counter].style.opacity = 1;
}

function prevFunc() {
    slide[counter].style.opacity = '';
    --counter
    if (counter <= -1) {
        counter = slide.length - 1;
    }
    slide[counter].style.opacity = 1;
}

next.addEventListener('click', nextFunc)

prev.addEventListener('click', prevFunc)

let autoScrolling = setInterval(nextFunc, 3000)

next.addEventListener('mouseover', function (){
    clearInterval(autoScrolling)
})

next.addEventListener('mouseout', function () {
    autoScrolling = setInterval(nextFunc, 3000);
})

prev.addEventListener('mouseover', function (){
    clearInterval(autoScrolling)
})

prev.addEventListener('mouseout', function () {
    autoScrolling = setInterval(nextFunc, 3000);
})

window.addEventListener('blur', function (){
    clearInterval(autoScrolling)
})

window.addEventListener('focus', function () {
    autoScrolling = setInterval(nextFunc, 3000);
})


/* -------------------------------Video------------------------------------------ */

function findVideos() {
    let videos = document.querySelectorAll('.video');

    for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
}

function setupVideo(video) {
    let link = video.querySelector('.video__link');
    let media = video.querySelector('.video__media');
    let button = video.querySelector('.video__button');
    let id = parseMediaURL(media);

    video.addEventListener('click', () => {
        let iframe = createIframe(id);

        link.remove();
        button.remove();
        video.appendChild(iframe);
    });

    link.removeAttribute('href');
    video.classList.add('video--enabled');
}

function parseMediaURL(media) {
    let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);

    return match[1];
}

function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video__media');

    return iframe;
}

function generateURL(id) {
    let qLink = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + qLink;
}

findVideos();

/* -------------------------------Slider2------------------------------------------ */


let slides = document.querySelectorAll('.slider2_textbox');
let indicatorBlock = document.querySelector('.indicator_block')
let indicator = document.querySelectorAll('.indicator');
let countr = 0;


for (let i = 0; i < indicator.length; i++) {
  indicator[i].addEventListener('click', function() {
     indFunc(i);
  })
}

function nextInd() {
    slides[countr].style.display = 'none';
    indicator[countr].style = 'width: 10px; height: 10px;';
    ++countr
    if (countr >= slides.length) {
        countr = 0;
    }
    slides[countr].style.display = 'block';
    indicator[countr].style = 'width: 15px; height: 15px;';
  }

function indFunc(j) {
    slides[countr].style.display = 'none';
    indicator[countr].style = 'width: 10px; height: 10px;';
    countr = j;
    slides[countr].style.display = 'block';
    indicator[countr].style = 'width: 15px; height: 15px;';
}

let autoScroll = setInterval(nextInd, 3000)

indicatorBlock.addEventListener('mouseover', function (){
    clearInterval(autoScroll)
})

indicatorBlock.addEventListener('mouseout', function () {
    autoScroll = setInterval(nextInd, 3000);
})

window.addEventListener('blur', function (){
    clearInterval(autoScroll)
})

window.addEventListener('focus', function () {
    autoScroll = setInterval(nextInd, 3000);
})



/* ----------------------------------------------------------------------------- */

