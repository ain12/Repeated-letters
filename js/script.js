// Ex: 1
function hello() {
  let myName = ["A", "I", "N", "H", "O", "A"];
  for (let i = 0; i < myName.length; i++) {
    console.log(myName[i]);
  }
}

// Ex: 2
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
