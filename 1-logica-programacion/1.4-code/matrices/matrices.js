var matrizA = [
    [1, 6, 0],
    [-1, 3, 1],
    [4, 6, 2],
];

var matrizB = [
    [0, 4, 0],
    [2, 3, 1],
    [1, -2, 1],
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

// debugger
for (var i = 0; i < matrizA.length; i++) {
    for (var j = 0; j < matrizA.length; j++) {
      // console.log("matrizA: ", matrizA[i][j]);
      matrizC[i][j] = matrizA[i][j] + matrizB[i][j];
    }
}
console.log("matrizC (suma): ", matrizC);

// // RESTA
console.log("matrizA: ", matrizA);
console.log("matrizB: ", matrizB);
for (var i = 0; i < matrizA.length; i++) {
    for (var j = 0; j < matrizA.length; j++) {
      matrizD[i][j] = matrizA[i][j] + matrizB[i][j];
    }
}
console.log("matrizD (resta): ", matrizD);

// /**
//  * REGLAS DE LA MULTIPLICACION DE MATRICES
//  * matrizE[filasMatrizA][columnasMatrizB]
//  * Solo se puede multiplicar matrizA y matrizB si columnasMatrizA === filasMatrizB
//  * matrizE[i][j] = ( matrizA[0][0] * matrizB[0][0] ) + ( matrizA[0][1] * matrizB[1][0] ) + ( matrizA[0][2] * matrizB[2][0] )  
//  */
 console.log("matrizA: ", matrizA);
 console.log("matrizB: ", matrizB);
 for (var i = 0; i < matrizA.length; i++) {
     for (var j = 0; j < matrizA.length; j++) {
       // matrizE[i][j] = matrizE[i][j]+ (matrizA[i][j] * matrizB[i][j]);
       // matrizE[i][j] = matrizE[i][j]+ (matrizA[i][j] * matrizB[i][j]);
       // matrizE[0][0] = matrizE[0][0] + matrizA[0][0] + matrizB[0][0]
       // matrizE[0][1] = matrizE[0][1] + matrizA[0][1] + matrizB[0][1]
       for (var aux = 0; aux < matrizA.length; aux++) {
         matrizE[i][j] = matrizE[i][j] + ( matrizA[i][aux] * matrizB[aux][j]);
       }
     }
 }
 console.log("matrizE (multiplicacion): ", matrizE);