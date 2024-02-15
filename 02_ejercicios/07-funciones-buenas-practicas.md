
# Funciones (buenas prácticas)

## Cuándo o para qué hacer una función

- **Para evitar código duplicado**. Si tenemos dos o más porciones de código que se repiten (porciones puede ser hasta una línea de código, si es una lógica que se utiliza mucho), ya sean idénticas o similares. Esto sigue la filosofía de **DRY**,  _Don't Repeat Yourself_ (no te repitas)
- **Para generar código reutilizable**.
- **Para simplificar el código**

## Cómo hacer funciones

1. Identificar el código que queremos extraer en una función.
2. Crear una función vacía y copiar el código dentro de ella.
3. Identificar las variables que el código necesita y utiliza y que está accediendo desde afuera.
4. Declarar parámetros para cada una de esas variables.
5. Si existen valores fijos, convertirlos en variables y declararlos como parámetros.
6. Si estamos generalizando código similar pero no totalmente exacto, declarar parámetros bandera (booleanos) que permitan definir de qué forma se va a usar la función para que tome uno u otro camino.
7. Declarar los valores por defaults de aquellos parámetros que se pueda hacerlo.
8. Identificar el valor que se quiere devolver y retornarlo.
9. Hacer las modificaciones necesarias al código para que funcione.
10. Reemplazar el código donde fue extraído por la función siendo invocada.

## Cosas a tener en cuenta para hacer buenas funciones

- **Buenos nombres**. El nombre de una función debe indicar una acción (verbo) y tener un buen balance entre expresividad y longitud
- **Principio de responsabilidad única**. Una función debe encargarse de una única cosa. Si vemos que una función está tratando de hacer demasiadas cosas, lo mejor es partirla en funciones más pequeñas.
- **Longitud**. Preferir funciones cortas a funciones largas. Una función pequeña es más fácil de leer y comprender. Además, es muy probable que una función larga este rompiendo con el _principio de responsabilidad única_.
- **Pocos parámetros**. Preferir funciones con pocos parámetros a funciones con muchos. Si tiene demasiados, es probable que se esté incumpliendo el _principio de responsabilidad única_ y haya que partirla en varias funciones.
- **Valores por defecto en parámtros**. En lo posible, agregar valores por defecto en los parámetros para evitar errores con _undefined_.
- **Parámetros opcionales**. Agregar valores _por defecto_ a aquellos parámetros que tienen casos de uso muy comunes, para evitar tener que estar completándolos cada vez que los utilicemos.
- **Funciones genéricas/reutilizables**. Preferir funciones que no tengan valores específicos, sino que tomen valores por parámetros, lo que permite que sean reutilizados en múltiples casos.
- **Pureza**. Preferir funciones puras a impuras. Una _función pura_ es aquella que no tiene ningún efecto secundario, y que dado un mismo input (mismos valores de argumentos) devuelve el mismo valor. Para evitar _efectos secundarios_, lo mejor es:
   * No acceder ni modificar ninguna variable _por fuera_ de la función 
   * Si la función necesita datos, obtenerlos de los parámetros
   * No modificar valores que se la pasan por parámetro
   * No invocar funciones dentro de estas si no vamos a hacer nada con el valor que devuelva (o si no devuelve ningún valor)
- **Devolver valores**. Una función es más útil cuando devuelve un valor para que se pueda hacer algo con este.

Recuerden que estos son tips a seguir y no reglas estrictas, no siempre podemos cumplirlas (y a veces es aconsejable no hacerlo).

## Actividad

Reescribir el código de los siguientes problemas (o desde cero, según corresponda) utilizando funciones. 

- **Editor de texto** Hacer un programa que sea un mini editor de texto. El programa debe inicialmente pedir para ingresar un texto, luego debe preguntar qué es lo que queremos hacer. Opciones:
    * "duplicar": duplicar el texto
    * "reemplazar": reemplaza un string por otro en el texto
    * "agregar": agregar texto
    * "cortar": pide dos números de índice entre los cuáles recortar el texto
    * "eliminar palabra": elimina una palbra del texto
    * "buscar subtexto": busca un string dentro del texto y devuelve un mensaje diciendo si lo encontró o no
    * "buscar palabra": busca una palabra dentro del texto y devuelve un mensaje diciendo si lo encontró o no
    * "mayusculas": poner todo el texto a mayusculas
    * "minusculas": poner todo el texto en minusculas
    * "contar letras": mostrar cuántas letras tiene el texto sin espacios
    * "contar palabras": mostrar cuántas palabras tiene el texto
    * "h4ck3r 5p34k": convierte el texto en "Hacker Speak"

Al elegir la opción debe mostrar el texto modificado y permitir seguir realizando acciones. Investigar métodos `toUpperCase`, `toLowerCase`, `replace`, `includes`, `slice`, `substring`.

- **Ahorcado** Crear el juego del ahorcado. El programa debe contar ya con una lista de posibles palabras. Debe mostrar inicialmente la palabra elegida aleatoriamente oculta con asteriscos, e ir preguntando por letras. A medida que se aciertan letras que contenga la palabra, se debe mostrar la palabra con las letras descubiertas. También se puede ingresar una palabra, pero si no se la adivina se pierde el juego. Si se adivinan todas las letras de la palabra, o se acierta la palabra, se gana. Si se intenta adivinar la palabra pero se equivoca, o se ingresan 6 letras erróneas, se pierde. Ejemplo:

```
// La palabra es ************. Te quedan 6 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "a"
// La palabra es **********a*. Te quedan 6 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "e"
// La palabra es e*e*******a*. Te quedan 6 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "i"
// La palabra es e*e***i*i*a*. Te quedan 6 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "m"
// La palabra es e*e***i*i*a*. Te quedan 5 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "s"
// La palabra es e*e***i*i*a*. Te quedan 4 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "c"
// La palabra es e*ec**ici*a*. Te quedan 4 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "d"
// La palabra es e*e***i*idad. Te quedan 4 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "electricidad"
// Felicitaciones, has adivinado la palabra.
```


- **Viborita** (de [estructuras de datos: arrays](https://github.com/Ada-Online-2da-Gen/ejercicios-javascript/blob/master/05-estructuras-de-datos-arrays.md))

- **Monstruo** (de [estructuras de control: bucles](https://github.com/Ada-Online-2da-Gen/ejercicios-javascript/blob/master/04-estructuras-de-control-bucles.md))

- **Simón dice II** (de [estructuras de control: bucles](https://github.com/Ada-Online-2da-Gen/ejercicios-javascript/blob/master/04-estructuras-de-control-bucles.md)) agregándole las siguientes funcionalidades:
    - La posibilidad de elegir entre un modo de juego u otro:
        - MODO CLASICO: rondas limitadas (preguntar cúantas). Si se llega a esa cantidad de rondas sin perder, se gana la partida.
        - MODO SUPERVIVENCIA: rondas ilimitadas hasta que se pierda.
    - La posibilidad de seguir jugando una nueva partida una vez terminada la anterior.
    - La posibilidad de elegir los colores del juego (en vez de rojo, azul, verde, amarillo) y la cantidad (mínimo 4)
    - La posibilidad de ver un historial con los resultados. Por ejemplo:
      ```
      [1] MODO SUPERVIVENCIA: 5 colores. 15 rondas ganadas.
      [2] MODO CLASICO: 10 rondas. 4 colores. Derrota en ronda 8.
      [3] MODO CLASICO: 12 rondas. 6 colores. Partida ganada.
      [4] MODO SUPERVIVENCIA: 4 colores. 18 rondas ganadas.
      ```
    - Un menú para acceder a las distintas opciones del programa. Por ejemplo:
      ```
      Modo actual: SUPERVIVENCIA.
      Colores actuales: verde, lila, azul, negro, amarillo.
      Partidas jugadas: 4.

      - INICIAR JUEGO
      - CAMBIAR MODO
      - CAMBIAR COLORES
      - VER HISTORIAL DE PARTIDAS
      - SALIR
      ```

- **[Integrador 1](https://github.com/Ada-IT/bootcamp-frontend/blob/master/integradores/Integrador%201.%20Variables%20y%20tipos%20de%20datos.md)**

