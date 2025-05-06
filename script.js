//Créez une fonction qui prend un tableau de nombres et renvoie les nombres minimum et maximum, dans cet ordre.
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return [min, max];
}

//Créez une fonction qui prend un tableau de nombres et renvoie la somme de ses cubes.
function sumOfCubes(arr) {
  let sum = arr.reduce((accumulator, currentVALUE) => {
    return accumulator + Math.pow(currentVALUE, 3);
  }, 0);
  return sum;
}

//Créez une fonction qui prend un tableau d’entiers et de chaînes non négatifs et renvoie un nouveau tableau sans les chaînes.

function filterArray(arr) {
  let result = arr.filter((arr) => Number.isInteger(arr[i]));
  return result;
}

// Créez une fonction prenant un nombre comme argument et renvoyant true« ou » falseselon que ce nombre est symétrique ou non. Un nombre est symétrique lorsqu'il est identique à son inverse.

function isSymmetrical(num) {
  let arrStr = num.toString();
  let reversed = arrStr.split("").reverse().join("");
  if (arrStr === reversed) {
    return true;
  } else {
    return false;
  }
}

// Un tableau est spécial si chaque index pair contient un nombre pair et chaque index impair contient un nombre impair . Créez une fonction qui renvoie une valeur truesi un tableau est spécial , et false dans le cas contraire.

function isSpecialArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && arr[i] % 2 !== 0) {
      return false;
    }
    if (i % 2 !== 0 && arr[i] % 2 === 0) {
      return false;
    }
  }
  return true;
}

//Créez une fonction qui renvoie le nombre de truevaleurs présentes dans un tableau.

function countTrue(arr) {
  {
    return arr.filter((val) => val === true).length;
  }
}

//Écrivez une fonction qui convertit un objet en un tableau de clés et de valeurs.

function  objectToArray(obj){
  return Object.entries(obj);
}

//Créez une fonction qui prend deux nombres comme arguments ( num, length) et renvoie un tableau de multiples de numjusqu'à ce que la longueur du tableau atteigne length.

function arrayOfMultiples(num, length) {
  let arr = [];
  for (let i = 1; i <= length; i++) {
    arr.push(num * i);
  }
  return arr;
}

  /* 
    Marie veut courir un marathon de 25 miles. Lorsqu'elle essaie de s'inscrire au marathon, 
    elle remarque que la fiche d'inscription n'indique pas directement la longueur du marathon.
    Au lieu de cela, la longueur du marathon est indiquée en petites portions différentes.
    Aidez Marie à découvrir quelle est la longueur réelle du marathon.Retournez "true" si le marathon fait 25 miles, sinon, retournez "false".
*/
function marathonDistance(d) {
  let absDistances = d.map(element => Math.abs(element));
  
  let sum = absDistances.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  return sum === 25;
}

//Créez une fonction qui met au carré chaque chiffre d’un nombre.

function squareDigits ( n ){
  
 arrDIgits=Array.from(String(n),Number);
 square = arrDIgits.map((x) => x**2);
 const result = Number(square.join(''));
 return result;

}

squareDigits(5555)