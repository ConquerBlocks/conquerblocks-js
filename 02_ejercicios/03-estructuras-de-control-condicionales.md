# 🔀 Estructuras de control: condicionales
<br>

## `if`, `else`, `else if`

**1 🔢 Número par o impar**
- Crear un programa que pida al usuario ingresar un numero y mostrar en un mensaje si el valor ingresado es par o impar.

**2 📆 Días del mes**
- Crear un programa que pida por un mes y devuelva la cantidad de días que ese mes tiene.

**3 🔐 Cambio de contraseña**
- Hacer un programa que permita cambiar la contraseña de usuario. Para eso tiene que responder las tres preguntas de seguridad. Si las tres preguntas son respondidas correctamente, tiene que pedir por la nueva contraseña y luego mostrar un mensaje que fue cambiada. En caso de que al menos alguna pregunta fue respondida incorrectamente debe mostrar un mensaje advirtiéndolo. Definir de antemano (*hardcodear*) preguntas y respuestas.

**4 🎓 Examen aprobado**
- Crear un programa que pida al usuario ingresar la nota un examen y mostrar en un mensaje si el examen está aprobado, si debe recuperar o es un aplazo. Si la nota es mayor a 7 aprueba, si es mayor a 4 recupera y si es menor a 4 es un aplazo.

**5 Grupo de letras**
- Crear un programa que pida al usuario ingresar una letra y mostrar en un mensaje a qué grupo pertenece.
  - grupo A = {a, e, i, o ,u}
  - grupo B = {b, c, d, f, g}
  - grupo C = {h, j, k , l, m}
  - grupo D = {n, p, q, r}
  - grupo E = {s, t, v, w, x, y, z}

**6 🥪 Sandwich**
- Crear un programa que pregunte al usuario paso por paso qué opciones desea elegir para armar su pedido. En caso de que no se elija una opción válida en cualquier paso debe mostrar un mensaje alertando que el pedido saldrá incompleto. Mostrar al final un mensaje con el pedido resultante. Debe preguntar:
  - Tipo de pan: blanco, negro, integral
  - Ingrediente 1: tomate, lechuga, pimiento
  - Ingrediente 2: cebolla, aceituna, pepino
  - Aderezos: mostaza, mayonesa, picante
  - Gaseosa: Coca Cola, Pepsi, Sprite

**7 ✊🤚✌️ Piedra, papel o tijera**
- Crear un programa que permita ingresar al jugador piedra, papel o tijera, genere de forma aleatoria la jugada de la computadora, y muestre en un mensaje quién ganó, con las jugadas respectivas.


**8 🎨 Simón dice**
- Crear un programa que muestre una secuencia de 5 nombres de colores en orden aleatorio. Los colores posibles son 4: rojo, verde, azul y amarillo. Pedir luego ingresar 5 colores uno por uno, y mostrar al finalizar si acertó la secuencia.

```
// Ejemplo
Simón dice: rojo, rojo, azul, verde, amarillo.

Ingrese el primer color: rojo
Ingrese el primer color: rojo
Ingrese el primer color: azul
Ingrese el primer color: verde
Ingrese el primer color: amarillo

Felicitaciones! Has ganado!
```

## Condicional `switch`

Para los siguientes ejercicios utilizar el condicional **switch** donde sea necesario.

**9 🗓 Meses del año**
- Crear un programa que pida al usuario un numero y mostrar en un mensaje el nombre del mes correspondiente.

**10 ❄️ Estaciones del año II**
- Crear un programa que pida una estación del año y mostrar en un mensaje la fecha en la que comienza y termina

**11 🧮 Calculadora**
- Crear un programa que permita elegir entre las operaciones: SUMA, RESTA, DIVISION y MULTIPLICACION, y luego de elegida, ingresar dos números y hacer dicha operación con ella.

**12 📺 Televisor**
- Hacer un programa que empiece preguntando si se desea prender el televisor. Si elige que no, el programa debe terminar. Si elige que sí, debe mostrar un mensaje con el canal actual y el el nivel de volumen de un televisor, y debe permitir realizar las siguientes operaciones:
  - CAMBIAR CANAL: permite ingresar un canal (0 al 99)
  - CANAL SIGUIENTE: sube un canal
  - CANAL ANTERIOR: baja un canal
  - SUBIR VOLUMEN: sube en volumen en 5
  - BAJAR VOLUMEN: disminuye en volumen en 5
  - MUTEAR: pone el volumen en 0

Una vez elegida la opción e ingresado el valor si corresponde, debe mostrar un mensaje con el canal y el nivel del volumen actual.
