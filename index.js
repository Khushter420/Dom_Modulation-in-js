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



/*
var input = document.querySelector('input');
input.value = 'Enter Name';



var titles = document.querySelectorAll('.item');
console.log(titles);
titles[1].style.color = 'green';

*/

/* var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(let i = 0 ; i < even.length ; ++i)
{
   even[i].style.backgroundColor = 'green';

}
*/

var list = document.querySelector('.login-form');
 
/*console.log(list.lastElementChild);
list.firstElementChild.placeholder = 'username';

 // console.log(list.firstChild);
 // console.log(list.childNodes);
console.log(list.parentElement);
list.parentElement.style.backgroundColor = 'black';

console.log(list.lastElementChild);
list.lastElementChild.textContent = 'hello';

console.log(list.nextElementSibling);
 


console.log(list.previousElementSibling);

*/
var newdiv = document.createElement('div');

/*newdiv.className = 'hello';

newdiv.id = 'helo 1';
newdiv.setAttribute('title'  , 'hello bBy');
*/
// now we create text node

var newdivText = document.createTextNode('KHUSHTER');