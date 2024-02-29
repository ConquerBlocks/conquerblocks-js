// Devuelve un HTMLElement o null
let pConId = document.getElementById('p1');

// Devuelve siempre un HTMLCollection
let pConClass = document.getElementsByClassName('importante');

// Devuelve siempre un HTMLCollection
let parrafos = document.getElementsByTagName('p');

// Devuelve siempre un NodeList
let withName = document.getElementsByName('nombreimportante');

// Devuelve el primer elemento que cumpla la condición
let parrafo = document.querySelector('p');

// Devuelve NodeList
let parrafos2 = document.querySelectorAll('p');
