// Update List
const updateList = () => {
  if (localStorage.getItem('items')) {
    let itemsArray = JSON.parse(localStorage.getItem('items'));
    let tableBody = document.getElementById('tableBody');
    let str = '';
    itemsArray.forEach((el, ind) => {
      str += `
            <tr>
                <th scope="row">${ind + 1}</th>
                <td>${el[0]}</td>
                <td>${el[1]}</td>
                <td><button class="btn btn-danger" onclick="deleteItem(${ind})">Delete</button></td>
                </tr>
                `;
    });
    tableBody.innerHTML = str;
  } else {
    tableBody.innerHTML = '';
  }
};

updateList();

// Add Item to List
const addItem = () => {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  if (title !== '' && description !== '') {
    if (!localStorage.getItem('items')) {
      let itemsArray = [];
      itemsArray.push([title, description]);
      localStorage.setItem('items', JSON.stringify(itemsArray));
    } else {
      let itemsArray = JSON.parse(localStorage.getItem('items'));
      itemsArray.push([title, description]);
      localStorage.setItem('items', JSON.stringify(itemsArray));
    }
  } else {
    alert('Please add your Title and Description.');
  }
  updateList();
};

// Delete Item from List
const deleteItem = (index) => {
  if (confirm('This Todo list will be deleted permanently. Are you sure ?')) {
    let itemsArray = JSON.parse(localStorage.getItem('items'));
    itemsArray.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    updateList();
  }
};

// Clear the Todo List
const clearList = () => {
  if (localStorage.getItem('items')) {
    if (confirm('All Todo lists will be deleted permanently. Are you sure ?')) {
      if (localStorage.getItem('items')) {
        localStorage.removeItem('items');
      }
    }
  } else {
    alert("There is no such Todo's in your list.");
  }
  updateList();
};

// Add items event Listener
let addBtn = document.getElementById('add');
addBtn.addEventListener('click', addItem);

// Clear List event Listener
let clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clearList);
