// Answer No 1

// function createAdder(n) {
//     return function(x) {
//       return x + n;
//     }
//   }
//   const addFive = createAdder(5);
//   const result = addFive(10);
//   console.log(result); // output: 15

// Answer No 1

// Answer No 2

// function searchArray(arr, val) {
//     if (arr.length === 0) {
//       return false;
//     }
  
//     if (arr[0] === val) {
//       return true;
//     } else {

//       return searchArray(arr.slice(1), val);
//     }
//   }

//   const arr = [1, 2, 3, 4, 5];
// console.log(searchArray(arr, 3)); // output: true
// console.log(searchArray(arr, 6)); // output: false

// Answer No 2

// Answer No 3

// function addParagraph(text) {
//     const newParagraph = document.createElement('p');
//     newParagraph.textContent = text;
//     document.body.appendChild(newParagraph);
//   }
  
//   addParagraph('This is a new paragraph.');

// Answer No 3

// Answer No 4
// function addListItem(text) {
//     let newListItem = document.createElement('li');
//     newListItem.textContent = text;
//     let list = document.querySelector('ul');
//     list.appendChild(newListItem);
//   }
//   addListItem('This is a new list item.');
  
// Answer No 4

// Answer No 5
    // =============HTML============== //

//     <div id="myDiv" style="height: 100px; width: 100px;"></div>

// function changeBackgroundColor(element, newColor) {
//     element.style.backgroundColor = newColor;
//   }
//   const myDiv = document.getElementById("myDiv");
//   changeBackgroundColor(myDiv, "blue");
    
// Answer No 5

// Answer No 6

// function saveToLocalStorage(key, obj) {
//     const objStr = JSON.stringify(obj);
//     localStorage.setItem(key, objStr);
//   }
//   const myObj = { name: "Noman Raza", age: 24 };
//   saveToLocalStorage("myObj", myObj);

  // Answer No 6

  // Answer No 7

// function getFromLocalStorage(key) {
//   const objStr = localStorage.getItem(key);
//   const obj = JSON.parse(objStr);
//   return obj;
// }
// const myObj = { name: "Noman Raza", age: 24 };
// console.log(myObj); // { name: "Noman Raza", age: 24 }

  // Answer No 7

  // Answer No 8

//   function saveObjectToLocalStorage(obj) {
//     for (const key in obj) {
//       const value = obj[key];
//       localStorage.setItem(key, JSON.stringify(value));
//     }
  
//     const newObj = {};
//     for (let i = 0; i < localStorage.length; i++) {
//       const key = localStorage.key(i);
//       const valueStr = localStorage.getItem(key);
//       const value = JSON.parse(valueStr);
//       newObj[key] = value;
//     }
  
//     return newObj;
//   }
  
//   const myObj = { name: "Noman Raza", age: 24 };
// const retrievedObj = saveObjectToLocalStorage(myObj);
// console.log(retrievedObj); // { name: "Noman Raza", age: 24 }

// Answer No 8