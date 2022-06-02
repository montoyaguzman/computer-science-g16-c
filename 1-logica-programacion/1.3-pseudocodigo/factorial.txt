Algoritmo Inicio
	Escribir "Ingresa el número que quieres en factorial"
	Leer numero
	valor inicial factorial = 1
	Mientras numero != 0 Hacer
		factorial = factorial * numero
		numero = numero - 1
	FinMientras
	Escribir "El resultado del factorial es: ", factorial
FinAlgoritmo


1.-Inicio
		Pide al usuario un número
		guarda número en n
		crea variable factorial=1
		crea variable i=1
		mientras i<=n
			factorial=factorial*i
			i=i+1
		resultado=factorial
2.-Imprime resultado
3.-Finaliza el programa

INICIO
Solicita número para calcular factorial
Guardar número en num
Definir un contador en 1, factorial en 1 
Mientras contador sea menor o igual a num entonces  Resultado = resultado * contador, después incrementar contador +1
Mostrar  Resultado
FIN



Inicio
    ingresa un número entero y positivo
    Guarda input en numeroEntrada
    numeroEntrada es un numero entero?
    no -> Muestra un mensaje 'No es un numero entero'
          Regresa a paso 2
    sí -> numeroEntrada es mayor a cero?
        no? -> Muestra un mensaje 'No es un numero positivo'
             Regresa a paso 2
        sí? -> Guarda índice= numeroEntrada -1
               Guarda resultado = 1
               indice = 1 ?
               sí? -> Muestra un mensaje 'Resultado'
               no? -> Mientras indice > 1
                    resultado = numeroEntrada *índice
                    inidce = indice -1

        Imprime resultado
Fin


INICIO
Algoritmo Factorial
	Escribir "Porfavor ingresa un numero"
	Leer numero
	resultado = 1
	Para i=1 Hasta numero Con Paso 1 Hacer
		resultado = resultado*i
	Fin Para
	Imprimir resultado
FinAlgoritmo