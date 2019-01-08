//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

//steps for creating and adding elements to the DOM
// 1. create the element 
// 2. set whatever properties you want
// 3. append the element to a node


//to create an element 
var element = document.createElement('div');

// to set properties 
element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';

document.body.appendChild(element);

// We can continue to update element, since we have a reference to it:
element.style.textAlign = 'center';

//Can append elements to the newly created element 
var ul = document.createElement('ul');
 
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}
 
element.appendChild(ul);

//move the newly appended element back to being on the left side 
ul.style.textAlign = 'left'

// to remove the secone li 
ul.removeChild(ul.querySelector('li:nth-child(2)'));

// You could also just call ul.remove to get rid of the whole thing. 
