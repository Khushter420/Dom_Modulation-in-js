/*console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.all);
console.log(document.links);
console.log(document.forms);
console.log(document.images);
*/

// Getelementbyid

var message = document.querySelector('.baggi');

console.log(message);

message.innerText = 'SUBMIT';
message.style.borderBottom = 'solid 3px #000'; 
message.style.borderLeft = 'solid 3px #000';
message.style.fontWeight = 'bold';


var iter = document.getElementsByClassName('item');

for(let i = 0 ; i < iter.length ; ++i)
{
   iter[i].style.fontWeight = 'bold';
   
}
 console.log(iter[0]);
 iter[0].style.color = 'blue';


//new li element and get it by class name and tag name

 /*var ans=document.getElementsByTagName('li');
 ans[3].textContent='hello';
 ans[3].style.backgroundColor='yellow';*/

 var clans=document.getElementsByClassName('itemx');
 clans[0].innerText='Khushter';
 clans[0].style.fontWeight='bold';

// parents and child

var itemList = document.querySelector('#menu');
// parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
 console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
 itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';


// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
 itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
 //console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
//console.log(itemList.previousElementSibling);itemList.previousElementSibling.style.color = 'green';

// createElement

// Create a div
var newDiv =  document.createElement('div');

// Add class
newDiv.className= 'hello';

// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('.form');
var h1 = document.querySelector('.head');

console.log(newDiv);

newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);
