
const addButton = document.querySelector('#add');
const ItemName = document.querySelector('#item-name');
const ItemPrice = document.querySelector('#item-price');
const totalSpan = document.querySelector('.total-price');
const list = document.querySelector('#item-list')
let total = 0;




addButton.addEventListener('click', (event)=> {
    let iName = ItemName.value;
    let iPrice = parseInt (ItemPrice.value);
    total = total + iPrice; 
    totalSpan.innerHTML = total; 


    let listItem = document.createElement('li');
    listItem.classList.add('collection-item');
    let text = `Item: ${iName}. Price: ${iPrice}`;
    listItem.appendChild(document.createTextNode(text));
    console.log(listItem);
    list.appendChild(listItem);


    ItemName.value = '';
    ItemPrice.value = '';

    console.log('Item: ', typeof(iName));
    console.log('Price: ', typeof (iPrice));
    console.log('total: ', total);


    event.preventDefault();
});