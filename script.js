'use strict';

//dom structured representation of html documents

//whatever is in the html document is in the dom

//dom part of web api

//query selector method to select a method pass in selector into method same ass css
//multiple dom operators executed from left to right
//get text of element
//console.log(document.querySelector('.message').textContent);
//
////change text content to something else set it to a string
//document.querySelector('.message').textContent = 'Correct Number!';
//
//document.querySelector('.number').textContent = 13;
//document.querySelector('.score').textContent = 20;
//
////get data from input element and set it
//
//
//document.querySelector('.guess').value = 15
//console.log(document.querySelector('.guess').value);
//

//event handlers function is just a value so pass it onto function as an argument//will be called when even happens
//document.querySelector('.check').addEventListener('click', function(){
//   const guess = (document.querySelector('.guess').value);
//    
//    document.querySelector('.message').textContent = 'Correct number!';
//    //add another query selector inside query sselector and function call
//});




//define secret number globally
//between one and 19 then truncated add one
const num = Math.trunc(Math.random() * 20) +1 ;
document.querySelector('.number').textContent = num;
//set number square to number
 let score = 20;




//regular function expression  inside the query selector add event listener method

document.querySelector('.check').addEventListener('click', function(){
   const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
//    value form input generates string convert to number
    
    //check if there is a value if theres no value print to console
    
    if(!guess) {
        //convert falsy to truthy so if block runs
        document.querySelector('.message').textContent = 'No number ya silly goose!';
    } else if (guess === num) {
        document.querySelector('.message').textContent = 'Correct Number!';
        score ++;
        document.querySelector('.score').textContent = score;
        
    } else if (guess > num) {
        document.querySelector('.message').textContent = 'Too high!';
        score --; 
        document.querySelector('.score').textContent = score;
    } else if (guess < num) {
        document.querySelector('.message').textContent = 'Too low!';
        score --;
        document.querySelector('.score').textContent = score;
    }
    
    
    
    
    
    
});
