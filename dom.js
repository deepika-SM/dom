//parentnode
/*var itemList = document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);*/
//parentelement
//var itemList = document.querySelector('#items');
/*console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);*/
//childNodes
//console.log(itemList.childNodes);
/*console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';*/
//firstchild
/*console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'hello 1';*/
//lastchild
//console.log(itemList.lastChild);
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'hello 4';
//nextsibling
//console.log(itemList.nextSibling);
//nextElementsibling
//console.log(itemList.nextElementSibling);
//previousSibling
//console.log(itemList.previousSibling);
//previouselementsibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'green';
//creatElement
//creat a Div
var newDiv = document.createElement('div');
//add class
newDiv.className = 'hello';
//add id
newDiv.id='hello1';
//add attr
newDiv.setAttribute('title','hello Div');
//add text node
var newDivText = document.createTextNode('Hello world');
//add text to div
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);
//adding hello word befor item1
var item = document.querySelector("#items");
var listItem = document.createElement("list-group-item");
listItem.textContent = "HelloWorld";
item.insertBefore(listItem, item.firstChild);
//2nd method 
//var item = document.querySelector("#items");
//item.childNodes[1].textContent = "Hello World";