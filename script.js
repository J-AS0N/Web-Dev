let add = document.getElementById("addButton");
let del = document.getElementById("deleteButton");

add.onclick = function () {
    // selects the first ordered list
    let ol = document.querySelector('ol');

    // create a new element <li> </li> 
    let li = document.createElement('li');

    // appends the element <li> </li> onto the ordered list
    ol.append(li)

    // adds the text to the list
    li.innerText = 'Lucifer';
};

del.onclick = function () {
    // grabs the ordered list based on id
    let myList = document.getElementById("list");

    // set the lastItem as the last child in the list
    let lastItem = myList.lastChild;

    // remove the last item
    myList.removeChild(lastItem);
}; 