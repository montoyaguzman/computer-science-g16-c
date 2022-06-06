# Computer science

## Introducción a la lógica

### Lógica

Es un razonamiento en que las ideas se desarrollan en forma coherente, sin contradicciones (entre ellas) y explicitamente.

### **Fases del análisis de un problema**

1. Análisis (entradas, proceso, salidas).
2. Diseño de un algoritmo.
3. Transformación del algoritmo en código.
4. Ejecución y validación.
5. Pruebas de aceptación.

**Requerimientos funcionales**
Son aquellos requerimientos que tienen que ver con la solucion del usuario.

**Requerimientos no funcionales**
Son caracteristicas que un sistema necesita para funcionar adecuadamente pero que no aportan valor operativo al usuario.

### Algoritmo

Secuencia de instruccions o pasos que van en ordener para resolver un problema.

#### Partes de un algoritmo

* Entrada.
* Proceso.
* Salida.

### Representaciones de un algoritmo

* Lenguaje natural.
* Diagrama de flujo.
* Pseudocódigo.
* Código.
* Pruebas de escritorio.

#### Lenguaje del natural

Expresar un problema con nuestras propias palabras y sin usar tecnicismos de desarrollo. Es el lenguaje con el que nos expresamos comúnmente.

#### Diagrama de flujo

Forma gráfica de representar un algoritmo. Tambien es util para documentar procesos de un sistema.

##### Símbologia

* Inicio (óvalo).
* Entrada / Lectura (paralelogramo).
* Proceso (rectángulo).
* Descisión (rombo).
* Documento / Impresión.
* Fin (óvalo).
* Conectores (circulos o líneas).
* Flechas.

Todos los diagramas de Ingeniería de software se basan en [UML](https://drive.google.com/file/d/0B_mAPkMcdtUsMHgtUWZJMWZvYms/view?resourcekey=0-ITkYE1KVVbh_tCutVSL_ew) (Unified Model Language).

#### Pseudocódigo

Lenguaje hibrido entre el natural y el codigo de programacion, utiliza ciertas convenciones de programacion pero sigue siendo entendible para las personas.

* "INICIO".
* “Leer”.
* “Si… entonces…”
* “Si no … entonces…”
* “Mientras…”
* “Si y sólo si --- entonces”
* “Imprimir”.
* “FIN”.

#### Código

Resolver el problema mediante algín lenguaje de programación.

#### Prueba de escritorio

Es probar mediante valores reales si nuestro algoritmo soluciona correctamente el problema.





### ECMAScript

Es el estándar que la empresa del mismo nombre definió para JavaScript en el año 2015 (ES6) y encarga de regir como debe ser interpretado y cómo debe funcionar el lenguaje JavaScript.

#### Lista de funcionalidades

* Let y const.
* Arrow functionts (short and long form).
* For in/ for of.
* Map.
* Classes
* Promises
* Default parameters.
* Spread / Rest operator.
* Object entries, keys y values.
* JS Modules.
* Literal templates.
* Map y Set (Estructura de datos).
* Exponentiation.
* Async
* Finally (Promises).
* RegExp.
* Métodos de arreglos (push, slice, splice, indexOf, includes, find, findIndex, map, filter, reduce, reverse, forEach).


## Notas adicionales

### Git comando indispensables

#### Estado del repo / commits

#### Local

```
git status
git add .
git branch
git restore --staged namefile.txt
git commit -m "tipoCommit: mi mensaje"git push origin develop
```

#### Remoto

```
git remote -v
git push origin rama
git pull origin rama
git fetch && git checkout origin newRama
```

### Administración de ramas

```
# ver estado del repo
git status

# ver estado de commits
git log --oneline

# ver rama en la rama en la que estan
git branch 

# crea una rama nueva
git branch nuevaRama 

# cambia a una rama con el nombre nuevaRama
git checkout nuevaRama

# crear y cambiarme a una nueva rama
git checkout -b nuevaRama

# crear y cambiarme a una nueva rama
git switch -c nuevaRama 

# eliminar una rama
git branch -D nombreRama 

# obtener los cambios de una rama remota y cambiarse a esa rama
git fetch && git checkout develop

#  bajar cambios de una rama remota a una local (cuando ya existe)
git pull origin develop

# actualiza la cache de git
git rm --cached . -r 

# subir cambios
git push origin develop
```


### Herramientas

#### Plataformas para diseñar diagramas

* [Lucidchart](https://lucid.app/)
* [Draw.io](https://app.diagrams.net/)
* [Pseint](http://pseint.sourceforge.net/)

#### Plataformas para prácticas lógica

* [Hacker rank.](https://www.hackerrank.com/)
* [Codewars.](https://www.codewars.com/)
* [CodePen.](https://codepen.io/)
* [Codesignal.](https://codesignal.com/)


[Gitignore generator](https://www.toptal.com/developers/gitignore)
