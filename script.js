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
    

};