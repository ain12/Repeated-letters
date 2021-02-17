// Ex: 1
function hello() {
  var myName = ["A", "I", "N", "H", "O", "A"];
  for (let i = 0; i < myName.length; i++) {
    console.log(myName[i]);
  }
}

// Ex: 2
function elements() {
  let lletres = ["A", "I", "N", "H", "O", "1"];
  console.log(`Partim del nom ${lletres}`);
  for (let i = 0; i < lletres.length; i++) {
    let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let vowels = ["A", "E", "I", "O", "U"];
    let word = lletres[i];
    // check if word is a number
    if (number.includes(Number(word))) {
      // if number array includes the word (true)
      console.log(`Els noms no tenen numeros.`);
    }
    // check if word is vowels
    else if (vowels.includes(word)) {
      console.log(`${word} és una vocal`);
    } else {
      console.log(`${word} és una consonant.`);
    }
  }
}

// Ex: 3
function countLetters() {
  var myName = ["A", "I", "N", "H", "O", "A"];
  let newObj = {};
  // objects have to be unique. If an object is repeated, the value is going to be counted as a repeated letter!!!
  myName.map(function repeated(letters) {
    return (newObj[letters] = (newObj[letters] || 0) + 1);
  });
  console.log(newObj);
}

// Ex: 4
function nameSurname() {
  let name = ["A", "I", "N", "H", "O", "A"];
  let space = [" "];
  let surname = ["O", "R", "T", "E", "G", "A"];
  let fullName = name.concat(space, surname);
  console.log(fullName);
}
