# Programación orientada a objetos

Crear las siguientes clases con sus respectivos métodos y propiedades.
Usar propiedades privadas.
Cuando se devuelvan valores, si son objetos y arrays de las propiedades, devolver copias de los mismo, para evitar que puedan ser modificados.

## Calculadora
  - **Propiedades**
    - `resultado` (número), inicializa en 0
  - **Métodos**
    - **`sumar(numero)`**: suma *numero* a `resultado`, y actualiza `resultado` con el valor de dicha operación
    - **`restar(numero)`**: suma *numero* a `resultado`, y actualiza `resultado` con el valor de dicha operación
    - **`multiplicar(numero)`**: suma *numero* a `resultado`, y actualiza `resultado` con el valor de dicha operación
    - **`dividir(numero)`**: divide *resultado* por `numero`, y actualiza `resultado` con el valor de dicha operación
    - **`obtenerResultado()`**: devuelve `resultado`
    - **`reiniciar()`**: pone resultado en 0
  - **Observaciones**
    - arrojar un error cuando el argumento ingresado no sea un número, con `Number.isFinite()`
    - arrojar un error cuando se intenta dividir por 0
<br>

## Auto
  - **Propiedades**
    - `encendido` (booleano), inicializa en `false`
    - `velocidad` (número), inicializa en 0
    - `marca` (string)
    - `modelo` (número)
    - `patente` (string)
  - **Constructor**
    - pide como argumentos `marca`, `modelo`, `patente` y los asigna a sus respectivas propiedades
  - **Métodos**
    - **`arrancar()`** pone `encendido` en `true`
    - **`apagar()`** pone `encendido` en `false`
    - **`acelerar()`** suma 10 a `velocidad` y actualiza dicha propiedad
    - **`desacelerar()`** resta 10 a `velocidad` y actualiza dicha propiedad
    - **`toString()`** devuelve un *string* con la siguiente plantilla `${marca} ${modelo}, patente ${patente}`
  - **Observaciones**
    - sólo se puede acelerar o desacelerar si el auto se encuentra prendido
    - sólo se puede apagar el auto si la velocidad es 0
    - la velocidad mínima es 0
<br>

## Televisor
  - **Propiedades**
    - `encendido` (booleano), inicializa en `false`
    - `canal` (número), inicializa en 0
    - `canales` (número)
    - `volumen` (número), inicializa en 0
    - `marca` (string)
  - **Constructor**
    - pide como argumentos `marca` y `canales` y los asigna a sus respectivas propiedades
  - **Métodos**
    - **`prender()`** pone `encendido` en `true`
    - **`apagar()`** pone `encendido` en `false`
    - **`verCanalSiguiente()`** suma 1 a `canal` y actualiza dicha propiedad
    - **`verCanalAnterior()`** resta 1 a `canal` y actualiza dicha propiedad
    - **`cambiarCanal(canal)`** actualiza la propiedad `canal` con el valor del parámetro `canal`
    - **`subirVolumen()`** suma 1 a `volumen` y actualiza dicha propiedad
    - **`bajarVolumen()`** resta 1 a `volumen` y actualiza dicha propiedad
    - **`toString()`** devuelve un *string* como el siguiente ejemplo: 
    <br>

    ```
    Televisor Samsung
    - Canales: 100
    - Canal actual: 23
    - Volumen actual: 34
    ```
  - **Observaciones**
    - solo se puede modificar el canal y el volumen si el televisor se encuentra prendido
    - `canales` representa el máximo de canales posibles. Si se está en el canal máximo o mínimo (0), y se avanza o retrocede, debe dar toda la vuelta. P. ej.: si el canal máximo es 100, se está en el canal 100, y se avanza de canal, debe volver al 0
    - solo se puede cambiar a un canal que exista
    - el volumen mínimo es 0 y el máximo 100
<br>
        
## Anotador
  - **Propiedades**
    - `titulo` (string)
    - `notas` (array de strings), inicializa vacío
  - **Constructor**
    - pide como argumento `titulo` y lo asigna a sus respectiva propiedad
  - **Método**
    - **`agregarNota(nota)`** agrega `nota` al array de `notas`
    - **`actualizarNota(id, nota)`** actualiza el ítem con índice `id`, reemplazándolo por `nota`
    - **`obtenerNota(id)`** devuelve el ítem del array `notas` con índice `id`
    - **`eliminarNota(id)`** elimina de `notas` el ítem con índice `id`
    - **`eliminarNotas()`** borra todos los ítems de `notas`
    - **`listarNotas()`** devuelve un string con todas las notas y sus respectivos ids, por ejemplo
    <br>
    
    ```
    Cosas para hacer
    ------------------------
    1. Ir al súper
    2. Ver serie
    3. Programar
    4. Leer libro
    ```
<br>

    
## Celular
 
  - **Propiedades**
    - contactos (array de objetos), inicializa vacío
    - llamadas (array de strings), inicializa vacío
  - **Métodos**
    - **`agregarContacto(contacto)`** agrega `contacto` a `contactos`
    - **`buscarPorNombre(nombre)`** devuelve el contacto con dicho nombre en el array `contactos` o `undefined` si no lo encuentra
    - **`buscarPorNumero(numero)`** devuelve el contacto con dicho número en el array `contactos` o `undefined` si no lo encuentra
    - **`eliminarContacto(nombre)`**` elimina el contacto con nombre `nombre` de `contactos`
    - **`llamar(nombre)`** si existe un contacto con nombre `nombre` en la lista `contactos`, agrega a `llamadas` un string que representa un registro de la misma, usando la plantilla `Llamada a ${nombre} con número ${numero} realizada
    - **`verContactos()`** devuelve un string listando todos los contactos, con sus nombres y números
    - **`verHistorial()`** devuelve un string con la lista de llamadas realizadas
  - **Observaciones**
    - `contacto` es un objeto con las propiedades `nombre` y `numero`
    - no se puede agregar un contacto si ya existe en el celular alguno con el mismo nombre o número
    <br> 

## BilleteraVirtual

  - **Propiedades**
    - monto
    - operaciones (array de objetos), inicializa vacío
  - **Constructor**
    - toma como argumento `montoInicial` y lo asigna a `monto`
  - **Métodos**
    - **`agregarGasto(gasto)`** agrega `gasto` a operaciones
    - **`agregarGanancia(ganancia)`** agrega `ganancia` a operaciones
    - **`obtenerGastosPorMes(mes)`** devuelve un array con todos los gastos hechos en `mes`
    - **`obtenerGanaciasPorMes(mes)`** devuelve un array con todas los ganancias obtenidas en `mes`
    - **`obtenerGastosPorCategoria(categoria)`** devuelve un array con todos los gastos de cierta `categoria`
    - **`obtenerGanaciasPorCategoria(categoria)`** devuelve un array con todas las ganancias de cierta `categoria`
    - **`calcularTotalPorMes(mes)`** devuelve el total resultante de restar todos los gastos hechos y sumar todas las ganancias obtenidas en un cierto `mes`
    - **`calcularTotalPorCategoria(categoria)`** devuelve el total resultante de restar todos los gastos hechos y sumar todas las ganancias obtenidas en cierta `categoria
    - **`obtenerMonto()**` devuelve `monto`
  - **Observaciones**  
    - los objetos `gasto` y `ganancia` contiene las propiedades: 
      - `descripcion` (string)
      - `cantidad` (número)
      - `fecha` (Date) 
      - `categoria` (string)
    - cuando se agrega `gasto` o `ganancia` al array operaciones, hay que agregarle a dicha objeto la propiedad `tipo` con el valor `"GASTO"` o `"GANANCIA"` según corresponda, para poder identificarlos en las siguientes operaciones
    - cuando se devuelve un array con gastos o ganancias, hay que borrar de los objetos que se devuelven la propiedad `tipo`   
<br>

## Carrito con Producto

  ### Producto
  - **Propiedades**
    - id (string)
    - nombre (string)
    - precio (número)
    - cantidad (número)
    - tieneImpuesto (booleano)
  - **Constructor**
    - toma como argumentos `nombre`, `precio`, `cantidad` y `tieneImpuesto` y los asigna a sus respectivas propiedades
    - genera un `id` automático y lo asigna a su propiedad
  - **Métodos**
    - getters para obteners los valores de todas las propiedades
    - setter para modificar el valor de `cantidad`
  - **Observaciones**
    - la cantidad nunca puede ser 0
    - el precio no puede ser menor a 0

  ### Carrito
  - **Propiedades**
    - productos (array de `Producto`), inicializa vacío
  - **Métodos**
    - **`agregarProducto(producto)`** agrega `producto` a `productos
    - **`actualizarCantidadProducto(id, cantidad)`** actualiza la `cantidad` del producto en `productos` con `id`
    - **`eliminarProducto(id)`** elimina de `productos` el producto con `id` 
    - **`calcularTotal()`** devuelve el total del carrito (con impuestos incluidos)
    - **`calcularImpuestoTotal()`** devuelve el total de la suma de los impuestos de cada producto que `tieneImpuesto`
    - **`obtenerCantidadTotal()`** devuelve la cantidad total de ítems en el producto
    - **`toString()`** devuelve un string con 
      - la lista de productos, detallando nombre, precio por unidad y cantidad
      - subtotal de todos los productos sin sumar impuesto
      - subtotal de todos los impuestos sumados
      - total final (suma de los subtotales)
  - **Observaciones**
    - el impuesto es del 10% sobre el precio del producto
    <br> 

## Agenda con Tareas

  ### Tarea
  - **Propiedades**
    - id (string)
    - descripcion (string)
    - categoria (string)
    - vencimiento (Date)
    - finalizada (booleano), inicializa en `false`
  - **Constructor**
    - toma como argumentos `descripcion`, `categoria`, `vencimiento` y los asigna a sus propiedades
    - genera un `id` automático y lo asigna a su propiedad
  - **Métodos**
    - **`finalizar()`** cambia `finalizada` a `true`
    - getters para obtener los valores de todas las propiedades
  
  ### Agenda
  - **Propiedades**
    - tareas (array de `Tarea`), inicializa vacío
  - **Métodos**
      - **`agregar(tarea)`** agrega `tarea` a `tareas`
      - **`eliminar(id)`** elimina de `tareas` la tarea con `id`
      - **`finalizar(id)`** finaliza la `Tarea` con `id`
      - **`obtener(id)`** devuelve la tarea con `id`
      - **`obtenerTodas()`** devuelve un array con todas las tareas
      - **`filtrarActivas()`** devuelve un array de tareas que no estén finalizadas
      - **`filtrarFinalizadas()`** devuelve un array de tareas que estén finalizadas
      - **`filtrarPorCategoria(categoria)`** devuelve un array de tareas que tenga `categoria`
      - **`filtrarPorVencimiento(fecha)`** devuelve un array de tareas que tenga vencimiento en `fecha`
     <br> 


## Librería con Libros con Autor

  ### Autor
  - **Propiedades**
    - nombre (string)
    - nacionalidad (string)
  - **Constructor**
    - pide como argumentos `nombre` y `nacionalidad` y los asigna a sus respectivas propiedades
  - **Métodos**
      - getters para obtener los valores de todas las propiedades

  ### Libro
  - **Propiedades**
    - id (string)
    - titulo (string)
    - autor (`Autor`)
    - precio (número)
    - genero (string)
    - stock (número)
  - **Constructor**
    - genera un `id` automático y lo asigna a su propiedad
    - el resto de propiedades las pide como argumentos y las asigna según corresponda  
  - **Métodos**
    - **`tieneStock()`** devuelve `true` si `stock` es mayor a 0, `false` sino
    - getters para obtener los valores de todas las propiedades, menos `stock`
    - setter para modificar los valores de `precio` y `stock`
  - **Observaciones** 
    - `stock` y `precio` tienen como valor mínimo 0  

  ### Libreria
  - **Propiedades**
    - libros (array de `Libro), inicializa vacío
    - ganancias (número), inicializa en 0
  - **Métodos**
    - **`agregar(libro)`** agrega `libro` a `libros`
    - **`eliminar(id)`** elimina de `libros` el libro con `id`
    - **`buscarPorId(id)`** devuelve la información de un libro con `id`
    - **`buscarPorTitulo(titulo)`** devuelve la información de un libro con `titulo`
    - **`filtrarPorAutor(autor)`** devuelve un array de libros escritos por `autor`
    - **`filtrarPorGenero(genero)`** devuelve un array de libros con `genero`
    - **`comprarLibros(idLibros)`** toma un array de ids de libros, si tienen stock, reduce el stock de dichos libros en 1 y suma a ganancias el precio de cada libro comprado
    - **`obtenerGanancias`** devuelve `ganancias`
    <br> 

## Chat con Usuarios y Mensajes

  ### Usuario
  - **Propiedades**
    - id (string)
    - nombre (string)
  - **Constructor**
    - genera un `id` automático y lo asigna a su propiedad
    - el resto de propiedades las pide como argumentos y las asigna según corresponda  
  - **Métodos**
    - getters para obtener los valores de todas las propiedades

  ### Mensaje
  - **Propiedades**
    - remitente (Usuario)
    - destinatario (Usuario)
    - texto (string)
    - fecha (Date), inicializa con la fecha actual (`new Date()`)
  - **Constructor**
    - pide las propiedades no inicializadas como argumentos y las asigna según corresponda  
  - **Métodos**
    - getters para obtener los valores de todas las propiedades
  
  ### Chat
  - **Propiedades**
    - usuario (`Usuario`)
    - contactos (array de `Usuario`), inicializa vacío
    - mensajes (array de `Mensaje`), inicializa vacío
  - **Constructor**
    - pide `usuario` como argumento y lo agrega a su respectiva propiedad
  - **Métodos**
    - **`agregarContacto(usuario)`** agregar `usuario` a `contactos`
    - **`obtenerContactos()`** devuelve un array con la lista de `contactos`
    - **`obtenerMensaje()`** devuelve un array con la lista de `mensajes`
    - **`filtrarPorContacto(id)`** devuelve un array con la lista de `mensajes` que tienen como `destinatario` un usuario con `id`
    - **`filtrarPorFecha(fecha)`** devuelve un array con la lista de `mensajes` que tienen `fecha` (mismo día, mes y año)
    - **`mandarMensaje(mensaje)`** agrega `mensaje` a `mensajes`, si `destinatario` es un usuario de la lista de contactos con y si `mensaje` no se encuentra ya en el array de `mensajes`
  - **Observaciones**
    - solo se pueden mandar mensajes a usuarios de la lista de `contactos`. En caso contrario, arrojar un error.
    <br> 

## Twitter con Tweets y Usuarios

  ### Usuario
  - **Propiedades**
    - handle (string)
    - siguiendo (array de `Usuario`), inicializa vacío
  - **Constructor**
    - pide `handle` como argumento y lo agrega a su respectiva propiedad
  - **Métodos**
    - **`seguir(usuario)`** agrega `usuario` a `siguiendo`, *si no se encuentra ya en dicho array* y *si no es el propio  usuario* (no se puede seguir a sí mismo)
    - getters para obtener los valores de todas las propiedades 

  ### Tweet
  - **Propiedades**
    - id (string)
    - handle (`string`)
    - texto (string)
    - likes (array de `Usuario`), inicializa en 0
    - retweets (array de `Usuario), inicializa en 0
  - **Constructor**
    - genera un `id` automático y lo asigna a su propiedad
    - pide `handle` y `texto` como argumentos y los agrega a sus respectivas propiedades
  - **Métodos**
    - getters para obtener los valores de todas las propiedades
    - **`darLike(usuario)`** agrega `usuario` a `likes`, *si ya se encuentra en dicho array, debe removerlo de mismo*
    - **`retweetear(usuario)`** agrega `usuario` a `retweets`, *si ya se encuentra en dicho array, debe removerlo de mismo*
    
  ### Twitter
  - **Propiedades**
    - tweets (array de `Tweet`), inicializa vacío
  - **Métodos**
    - **`twittear(tweet)`** agrega `tweet` a `tweets`, *si dicho `tweet` no se encuentra actualmente en el array*
    - **`obtenerTimeline(usuario)`** devuelve un array de tweets del `usuario`. Este array se compone de
      - todos los tweets publicados por los usuarios que sigue
      - todos los tweets likeados por los usuarios que sigue
      - todos los tweets retweeteados por los usuarios que sigue
      - no debe haber tweets repetidos
      - deben estar ordenados de más nuevos a más viejos
  - **Observaciones**
    - Es recomendable crear métodos privados para simplificar `obtenerTimeline`

## Netflix con Series, Episodios y Usuarios
