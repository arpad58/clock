'use strict';

const time = document.querySelector('.time-out');

const dateNow = new Date();

const timeNow = dateNow.toLocaleTimeString('hu');

time.textContent = timeNow;
