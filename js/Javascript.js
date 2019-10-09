/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/*Invul naam */

/*  var zoekbutton = document.querySelector('img');
var zoekveld = document.querySelector('header');

zoekbutton.addEventListener('click', function(){
    zoekveld.classList.toggle('show-search');
});  */

var zoekButton = document.querySelector('button');
var zoekForm = document.querySelector('.zoeken');
var popUp = document.querySelector('.popup');

function show() {
    zoekForm.classList.toggle('zichtbaar');
}

function bericht() {
    alert("let op, je moet ingelogd zijn om te downloaden");
}

popUp.addEventListener('click', bericht);
zoekButton.addEventListener('click', show);