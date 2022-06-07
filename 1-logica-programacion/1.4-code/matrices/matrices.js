var matrizA = [
    [2, 4, 1],
    [3, 9, 3],
    [5, 8, 1],
];

var matrizB = [
    [1, 0, 1],
    [1, 2, 1],
    [1, 1, 0],
];

var matrizC = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

var matrizD = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

var matrizE = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

for (var i = 0; i < matrizA.length; i++) {
  for (var j = 0; j < matrizA.length; j++) {
    console.log("matrizA: ", matrizA[i][j]);
    // i=0, j=0, j (0) < matrizA.length (3) true
    //      j=1, j (1) < matrizA.length (3) true 
    //      j=2, j (2) < matrizA.length (3) true
    //      j=3, j (3)< matrizA.length (3) false
    
    // i=1, j=0, j (0) < matrizA.length (3) true
    //      j=1, j (1) < matrizA.length (3) true 
    //      j=2, j (2) < matrizA.length (3) true
    //      j=3, j (3)< matrizA.length (3) false
    
    // i=2, j=0, j (0) < matrizA.length (3) true
    //      j=1, j (1) < matrizA.length (3) true 
    //      j=2, j (2) < matrizA.length (3) true
    //      j=3, j (3)< matrizA.length (3) false
  }
  // i++
}

// SUMA
console.log("matrizA: ", matrizA);
console.log("matrizB: ", matrizB);
for (var i = 0; i < matrizA.length; i++) {
    for (var j = 0; j < matrizA.length; j++) {
      matrizC[i][j] = matrizA[i][j] + matrizB[i][j];
    }
}
console.log("matrizC (suma): ", matrizC);

// RESTA
console.log("matrizA: ", matrizA);
console.log("matrizB: ", matrizB);
for (var i = 0; i < matrizA.length; i++) {
    for (var j = 0; j < matrizA.length; j++) {
      matrizD[i][j] = matrizA[i][j] + matrizB[i][j];
    }
}
console.log("matrizD (resta): ", matrizD);