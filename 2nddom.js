
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
//edit event
itemList.addEventListener('click',editItem);
// Delete event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems);

//add item
function addItem(e){
    e.preventDefault();
//get input value
var newItem = document.getElementById('item').value;
//creat new li element
var li = document.createElement('li');
//add class
li.className = 'list-group-item';
//add text node with input value
li.appendChild(document.createTextNode(newItem));
//creat delete button
var editBtn = document.createElement('button');
var deleteBtn = document.createElement('button');

//add classes to del button
editBtn.className = 'btn btn-success btn-sm float-right edit'
deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

//append text nodegi
editBtn.appendChild(document.createTextNode('Edit'));
deleteBtn.appendChild(document.createTextNode('Delete'));

//append button to li
li.appendChild(editBtn);
li.appendChild(deleteBtn);
//append li to list
itemList.appendChild(li);

}

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}



// Filter items
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    console.log(text);
}
