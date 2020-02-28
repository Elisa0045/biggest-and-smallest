# biggest & smallest: development strategy

Building this site one step at a time

## 0. Setup

(already complete)

## 1. Data & Log

(already complete)

## 2. Init

> * init.js
> * Contents the render initial state: variables, methods for selecting the id's in HTML tags, and render the initial state of the data object (numbers in this case). 

## 3. User Story: Save button. 

> * Writing the initial code: create the HTML code, then create the save functions, store the values, and perform the logic.
> * save-number.js handler and listener. 
> * I aad the listeners, and handlers: add the methods for add a new current, find the biggest and the smallest, and save the current.   

## 4. User Story: Reset button. 

> * The users will want to start again to write and compare the numbers, from save the numbers and refresh the web page, so they need a reset button for start again.
> * reset.js handler and listener. 
> * I add the listeners, and handlers: add the method for reset the values to: the biggest = -infinity, smallest = infinity, current = 0 and all array to empty.