'use strict';

const time = document.querySelector('.time-out');

const getTimeNow = dateNow => {
    dateNow = new Date();
    const timeNow = dateNow.toLocaleTimeString('hu');
    time.textContent = timeNow;
};

setInterval(getTimeNow, 1000);