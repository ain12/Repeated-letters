let button = document.getElementById("button");
button.addEventListener("click", (event) => {
  hello();
  elements();
  clickButton();
  countLetters();
  nameSurname();
  uniqueWords();
});

function clickButton() {
  document.getElementById("results").innerHTML = "Check console!";
}

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

// LEVEL 2
function uniqueWords() {
  var str =
    "Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email";
  var same = str.match(/[a-zç0-9._$-]+@[a-zçñ0-9-._$]+\.[a-zç0-9._-]+/gi);
  // the "..."operator spreads an iterator
  let unique = [...new Set(same)];
  console.log(unique);
}
