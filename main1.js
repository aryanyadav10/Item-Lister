var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//del event
itemList.addEventListener('click',removeItem);

//Form submit Event
form.addEventListener('submit',addItem);

//Filter Event
filter.addEventListener('keyup',filterItems);

function addItem(e) {
    e.preventDefault();
    //get Input Value
    var newItem = document.getElementById('item').value;

    //create li element
    var li = document.createElement('li');

    //Add class
    li.className = 'list-group-item';
    
    //text node with input
    li.appendChild(document.createTextNode(newItem));

    //create del button ele

    var del = document.createElement('button');

    //add classes to del

    del.className = 'btn btn-danger btn-sm float-right delete';

    //Append text node

    del.appendChild(document.createTextNode('X'));
    
    //append button to li
    li.appendChild(del);

    //append li to list
    itemList.appendChild(li);
}

function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are You Sure')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e) {
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    //get list
    var items = itemList.getElementsByTagName('li');
    //convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
}