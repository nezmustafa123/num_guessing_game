'use strict';

//dom structured representation of html documents

//whatever is in the html document is in the dom

//dom part of web api

//query selector method to select a method pass in selector into method same ass css
//multiple dom operators executed from left to right
//get text of element
console.log(document.querySelector('.message').textContent);

//change text content to something else set it to a string
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

//get data from input element and set it


document.querySelector('.guess').value = 15
console.log(document.querySelector('.guess').value);

