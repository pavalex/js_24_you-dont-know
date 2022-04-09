"use strict";

const adv = document.querySelector('.adv');
const book = document.querySelectorAll('.book');
const body = document.querySelector('body');
const linkBook3 = book[4].querySelector('h2 > a');
const listBook2 = book[0].querySelector('ul');
const listItemsBook2 = book[0].querySelectorAll('ul > li');
const listBook5 = book[5].querySelector('ul');
const listItemsBook5 = book[5].querySelectorAll('ul > li');
const listItemsBook6 = book[2].querySelectorAll('ul > li');

book[0].before(book[1]);
book[2].before(book[3]);
book[3].before(book[4]);
book[2].before(book[5]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

linkBook3.textContent = 'Книга 3. this и Прототипы Объектов';

adv.remove();

listBook2.append(listItemsBook2[2]);
listItemsBook2[7].before(listItemsBook2[8]);
listItemsBook2[10].before(listItemsBook2[2]);
listItemsBook2[5].before(listItemsBook2[6]);
listItemsBook2[4].before(listItemsBook2[6]);
listItemsBook2[5].before(listItemsBook2[8]);
listItemsBook2[4].before(listItemsBook2[8]);

listBook5.prepend(listItemsBook5[9]);
listBook5.append(listItemsBook5[5]);
listItemsBook5[10].before(listItemsBook5[5]);
listItemsBook5[8].before(listItemsBook5[5]);
listItemsBook5[2].before(listItemsBook5[3]);
listItemsBook5[2].before(listItemsBook5[4]);
listItemsBook5[1].before(listItemsBook5[9]);
listItemsBook5[9].before(listItemsBook5[1]);

const itemBook6 = document.createElement('li');
itemBook6.textContent = 'Глава 8: За пределами ES6';
listItemsBook6[8].append(itemBook6);

