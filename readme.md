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

### Comandos Git

#### Estado del repo / commits

```
# ver estado del repo
git status

# ver historial de commits
git log --oneline
```

#### Commits / Stage

```
# agregar al staging area
git add .

# quitar del stagin area
git restore --staged namefile.txt

# commits
git commit -m "tipoCommit: mi mensaje"

```

#### Remoto

```
# ver los repos remotos a los que esta conectado el repo local
git remote -v

# bajar cambios
git pull origin rama

# subir cambios
git push origin rama

# obtener los cambios de una rama remota y cambiarse a esa rama
git fetch && git checkout develop

#  bajar cambios de una rama remota a una local (cuando ya existe)
git pull origin develop

# subir cambios
git push origin develop

```

#### Administración de ramas

```
# ver rama en la que se encuentra el head
git branch 

# crea una rama nueva
git branch nombreNuevaRama 

# cambiarse a una rama con el nombre nombreRama
git checkout nombreRama

# crear y cambiarse a una nueva rama
git checkout -b nombreNuevaRama

# crear y cambiarse a una nueva rama
git switch -c nombreNuevaRama 

# eliminar una rama
git branch -D nombreRama

```

#### Otro comandos

```
# actualiza la cache de git para que tome ciertos cambios (.gitignore)
git rm --cached . r

# actualiza el mensaje del ultimo commit realizado (no debe estar pusheado)
git commit --amend -m "an updated commit message"

# stash
git stash

# unstash
git stash pop
```

### Conventional Commits

Es una especificación sobre como escribir mensajes de confirmación (commits).

**Estructura**

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Tipos principales**

* feat: Nuevas caracteristicas.
* chore: Cosas que no aportan un req funcional pero posiblemente si un req no funcional.
* fix: Correccion de errores.
* docs: Commits con documentacion o comentarios.
* style: Estructura de carpetas y nombrado

[más info](https://www.conventionalcommits.org/en/v1.0.0/)

### VSCode como editor de git

```
git config --global core.editor"visual studio --wait"
git commit 
// ir a vscode a escribir el mensaje, una vez escrito guardar y cerrar.
// regresar a la consola a comprobar el commit
```


### Áreas de estudio

#### Ingeniería de software

Es una área que estudia la creación y calidad del software.

El ciclo de vida del software, diseño de diagramas, documentación del software son algunos de los topicos de está rama.

**Metodologías de desarrollo de software**

* Waterfall.
* Metodologías ágiles (Extreme programming, Scrum, Kanan, etc.).

#### Testing

Es una área que se encarga de la automatización de pruebas del código.

Las pruebas es un proceso de evaluar un producto, mediante exploración y experimentación.

Entre menos entendemos un producto, tendrá mayores errores.

**Motivos para probar**

* Reducir costos.
* Cuidar el prestigio
* Mejoran la calidad de funcionalidad.
* Minimizan la posibilidad de malas experiencias de usuario.

**Por qué no se hacen siempre**

* No son parte de la solución.
* No se entrega evidencia al cliente.
* Pueden ser difíciles de mantener.
* No hay tiempo o conocimiento.

**Metodologías testing**

* TDD.
* BDD.

#### **Introducción a la lógica de programación**

Lenguaje natural, diagramas de flujo, pseudocodigo, pruebas de escritorio, etc.

### Herramientas

#### Diseñar diagramas

* [Lucidchart](https://lucid.app/)
* [Draw.io](https://app.diagrams.net/)
* [Pseint](http://pseint.sourceforge.net/)

#### Prácticar lógica

* [Hacker rank.](https://www.hackerrank.com/)
* [Codewars.](https://www.codewars.com/)
* [CodePen.](https://codepen.io/)
* [Codesignal.](https://codesignal.com/)

#### Otras herramientas online

[Gitignore generator](https://www.toptal.com/developers/gitignore)

#### **Redes sociales para estudiar**

##### Plataformas de aprendizaje

* [SoloLearn.](https://www.sololearn.com/)
* [TutorialesYa.](https://www.tutorialesprogramacionya.com/)
* [W3Schools.](https://www.w3schools.com/)
* [Mozilla Developer Network.](https://developer.mozilla.org/es/)

##### Youtube

* [Carlos Azaustre.](https://www.youtube.com/c/CarlosAzaustre)
* [Fazt.](https://www.youtube.com/c/FaztTech)
* [Absolute.](https://www.youtube.com/c/AbsoluteSite)
* [MidudeDev](https://www.youtube.com/c/midudev).
* [CodelyTV.](https://www.youtube.com/c/CodelyTv)

##### Redes sociales

* [Carlos Azaustre.](https://www.instagram.com/carlosazaustre/?hl=es)
* [EdTeam.](https://www.instagram.com/edteamlat/?hl=es)
* [Richwebdeveloper.](https://www.instagram.com/richwebdeveloper/?hl=es)
* [Vertechie](https://www.instagram.com/veritechie/?hl=es).
* [AnnCode](https://www.instagram.com/anncode/?hl=es).
* [Manz.](https://twitter.com/Manz)
