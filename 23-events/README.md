# Key Questions
* What is an event in JavaScript?
  * What kinds of events are there in the DOM? 
     * https://codepen.io/telegram/pen/PJpPGm
* How do I make some code run when one occurs in my DOM?
* What is a callback? 
  * What does it mean that JavaScript has first-class functions?
  * What is the difference between function definition and function invocation?
* How can I listen for events on a DOM node / HTML element?
* What calls the callback that I pass to addEventListener? What gets passed into that callback?
    * What is event.preventDefault() and why is it useful?

# Bonus (ok if we don't get to these)    
* What is the DOMContentLoaded event and why is it cool?
* What is event bubbling and why is it important to know about? 
  * https://codepen.io/telegram/pen/maJxVV
  * What does event.stopPropagation() do and why should I avoid using it?
* What is a dataset, and how can they help me  

https://www.w3schools.com/jsref/dom_obj_event.asp

# Silly Deliverables
As a user I want... 

* to alert "HELLO!" when I click the button
* to hear a sound when I scroll
* anything I click on should have an emoji added to its innerText
* to hover over any li and have it's background color change to pink

# Actual Deliverables
* to be able to click the button and add a taco emoji to the list
* to be able to click an emoji and change it to a coconut
* to be able to right-click an emoji and delete it
* to be able to click an emoji and cycle through ["🍩", "🌮", "🥥", "🍣"]

# Gotchas
* What will happen if I += the innerHTML of an element with children that have event handlers?