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

## ECMAScript

Es el estándar que la empresa del mismo nombre definió para JavaScript en el año 2015 (ES6) y encarga de regir como debe ser interpretado y cómo debe funcionar el lenguaje JavaScript.

### Lista de funcionalidades

* Let y const.
* Arrow functionts (short and long form).
* For in/ for of.
* Map vs forEach.
* Classes.
* Promises.
* Default parameters.
* Spread operator.
* Rest operator.
* Object entries, keys y values.
* JS Modules.
* Literal templates / Template strings.
* Map y Set (Estructura de datos)
* Promises
* Async / await.
* Finally (Promises).
* RegExp.
* Métodos de arreglos (push, slice, splice, indexOf, includes, find, findIndex, map, filter, reduce, reverse, forEach).

#### Bonus JS

* Tablas de verdad y tipos de operadores.
* Valor por defecto de una variable.
* Cortocircuito ?.
* Paso por referencia y valor.
* Diferencia entre map y forEach.
* Tipos de funciones en JS.
* Valor por defecto de una variable.
* Operador de cortocircuito ?.
* Hoisting.
* Tipos de salida de una función.
* Paso por referencia y valor.
* Tablas de verdad y tipos de operadores.
* Tipos de funciones en JS.
* Delete, type of, instanceof.
* Destructuring.

## Protototipos y Programación orientada a objetos

### Intro

**Tipos de datos en programación (agnóstico del lenguaje)**

* Boolean.
* String.
* Array.
* Objetos.
* Numeros.
* Numeros decimales.

**Fuerte y debilmente tipado**

```
// debilmente tipado JS
let numero = 10
let numero2 = 99.7
numero = "este es numero"
```

```
// fuertemente tipado Java
int numero = 10;
double numero2 = 99.7
numero = "este es numero" // error
```

**Jerga de objetos**

clase = prototipo = plantilla = modelos
objeto concreto = instancia = miembro = variable miembro

// json => key: value
{
    "person": {
        name: "jose m"
    }
}

// objeto js => propiedad y valor
const person = {
    name: "jose m"
}

// poo => atributos y valor

### Prototype

Los **prototipos** son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí. Funcionan para **proporcionar mecanismos de herencia.**

Los objetos pueden tener un  **objeto prototipo** , el cual actúa como un objeto plantilla que hereda métodos y propiedades.

**Cadena de Prototipos**

Un objeto prototipo del objeto puede tener a su vez otro objeto prototipo, el cual hereda métodos y propiedades, y así sucesivamente. Esto es conocido con frecuencia como la **cadena de prototipos**.

### POO

Es un paradigma de programación centrado en:

* Plantillas base (clases). => **Auto**
* Objetos, son elementos concretos de una clase.=> **mazda, tsuru**
* Atributos/Propiedades: Son las caracteristicas de los objetos. => **color, dimensiones, modelo**.
* Métodos/Funciones: Son las acciones puede realizar un objeto. => arranca(), frena().

#### Formas de crear objetos en JS

##### Literal objects.

```
const pikachu = {
  name: 'pikachu',
  height: 90
  camina: function() {
    console.log('C-A-M-I-N-A-R');
  }
}
```

##### new Object.

```
const pikachu = new Object();
pikachu.name: 'pikachu',
pikachu.height: 90
```

##### Funcion constructora

```
function createPokemon(name, height) {  
  const auto = {  
    name: name,  
    height: height,  
  }
  return auto;  
}  
const pikachu = createPokemon('pikachu', 90);
```

##### Funcion constructora con new y this.

```
function createPokemon(name, height) {
    this.name: name,
    this.height: height,
}
const pikachu = new createPokemon('pikachu', 90);
```

##### Prototype (herencia).

```
function Pokemon(name, height) {
  const auto = {
    name: name,
    height: height,
  }
  return auto;
}
const pikachu = createPokemon('pikachu', 90);function Pokemon(name, height) {
    this.name = name;
    this.height = height;
}

const pikachu = new Pokemon('pikachu', 90);
console.log(pikachu.height);

Pokemon.prototype.camina = function() {
      console.log('C-A-M-I-N-A-R')
};
pikachu.camina();
```

##### Sugar Syntaxis.

```
class Poke {
    constructor(name, type, power) {
        this.name = name;
        this.type = type;
        this.power = power;
    }
  
    attack(bonus) { 
        console.log(`${this.power}`, bonus);
    }

    alive(points) { 
        if (points > 1) {
            return true;
        }
        return false;
    }
}

class FlightPoke extends Poke {
    constructor(name, type, power, alas) {
        super(name, type, power);
        this.alas = alas;
    }
    flight() {
        console.log('yo vuelo');
    }
}

class WaterPoke extends Poke {
    constructor(name, type, power, aletas) {
        super(name, type, power);
        this.aletas = aletas;
    }
    swim() {
        console.log('yo nado');
    }
}

const squirtle = new WaterPoke('Squirtle', 'Water', 'pulse water', 'tengo 4 aletas');
const pidgey = new FlightPoke('Pidgey', 'Flight', 'aerial ace', 'tengo 2 alas');

console.log(squirtle)
squirtle.attack(99);
squirtle.swim();
pidgey.attack(10);
pidgey.flight();
// squirtle.flight();
// La linea anterior produce un error porque squirtle no tiene ese metodo
```

**Nota:** Recuerde la exitencia de Object.create y { ...props } para generar nuevos objetos a partir de otros sin mantener la referencia.

## Notas adicionales

### **Markdown**

Es un [lenguaje de marcado ligero](https://es.wikipedia.org/wiki/Lenguajes_de_marcas_ligeros "Lenguajes de marcas ligeros") creado por [John Gruber](https://en.wikipedia.org/wiki/John_Gruber "en:John Gruber") y [Aaron Swartz](https://es.wikipedia.org/wiki/Aaron_Swartz "Aaron Swartz") que trata de conseguir la máxima legibilidad y facilidad de publicación tanto en su forma de entrada como de salida, se inspira en convenciones existentes para marcar mensajes de correo electrónico usando texto plano.

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

#### Conventional Commits

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

#### VSCode como editor de git

```
git config --global core.editor"visual studio --wait"
git commit 
// ir a vscode a escribir el mensaje, una vez escrito guardar y cerrar.
// regresar a la consola a comprobar el commit
```

### Áreas de estudio

#### **Introducción a la lógica de programación**

Lenguaje natural, diagramas de flujo, pseudocodigo, pruebas de escritorio, etc.

#### Ingeniería de software

Es una área que estudia la creación y calidad del software.

El ciclo de vida del software, diseño de diagramas, documentación del software son algunos de los topicos de está rama.

**Metodologías de desarrollo de software**

* Waterfall.
* Metodologías ágiles (Extreme programming, Scrum, Kanan, etc.).

#### **Matemáticas discretas y algebra boleana**

Condiciones, teoría de conjuntos, sistemas de númeración y tablas de verdad.

#### Estructuras de datos

Las estructuras de datos son una forma de organizar grandes cantidades de datos en la computadora, de tal manera que nos permita realizar unas operaciones con ellas de forma  **muy eficiente**.

* Arrays.
* Pilas y colas.
* Listas enlazadas y doblemente enlazadas.
* Árboles.
* Mapas y Conjuntos.
* Grafos

#### Redes de computadora

Área donde se estudia la comunicación de redes de telecomunicaciones y funcionamiento del internet.

#### Sistemas operativos

Área donde se estudia la estructura de un sistema operativo y todo lo requerido para que opere en el hardware.

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
* [Música para codear](https://www.youtube.com/c/CodePioneers).

##### Redes sociales

* [Medium.](https://medium.com/)
* [Carlos Azaustre.](https://www.instagram.com/carlosazaustre/?hl=es)
* [Richwebdeveloper](https://www.instagram.com/richwebdeveloper/?hl=es)
* [Vertechie](https://www.instagram.com/veritechie/?hl=es).
* [AnnCode](https://www.instagram.com/anncode/?hl=es).
* [Manz](https://twitter.com/Manz).
* [Javascript.tips](https://www.instagram.com/javascript.tips/).
* [webdev_guru](https://www.instagram.com/webdev_guru/).
* [richwebdeveloper](https://www.instagram.com/richwebdeveloper/).
* [amaizingfarooqq](https://www.instagram.com/amazingfarooqq/).
* [webdesignuniversity](https://www.instagram.com/webdesignuniversity/).
* [faizan.webappdev](https://www.instagram.com/webdesignuniversity/).
* [sobrecodigo](https://www.instagram.com/sobrecodigo/).
* [programmers_community_](https://www.instagram.com/programmers_community_/).
