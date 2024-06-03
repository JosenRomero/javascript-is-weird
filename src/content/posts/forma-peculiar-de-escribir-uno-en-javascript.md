---
title: 'Forma peculiar de escribir 1 en javascript'
pubDate: 2024-06-03
description: 'Con ayuda de la coerción de tipos, podemos obtener el número 1 de forma peculiar.'
author: 'Josenromero'
tags: ["arrays", "tipos de datos"]
---

Al evaluar la expresión `+!![]` se obtiene `1`

¿Por qué ocurre esto? Vamos a desglosar la expresión paso a paso para entender el proceso.

```js
console.log(+!![]); // 1
```

### ¿Qué está pasando?

Veamos el proceso paso a paso: 

<br>

**Paso 1**

Empezamos con un array vacío `[]`. 

En JavaScript, un array vacío es un objeto que es considerado "truthy" en contextos booleanos.

<br>

**Paso 2**

Luego el operador de negación lógica `!` se aplica al array vacío `[]`. 

En JavaScript, el operador de negación lógica `!` convierte un valor "truthy" en false. 

Entonces `![]` resulta en `false`.

<br>

**Paso 3**

Aplicar el operador de negación lógica dos veces `!![]` convierte el valor de nuevo a "truthy". 

Primero `![]` da `false`, y luego `!![]` da `true`.

<br>

**Paso 4**

Finalmente, el operador `+` se aplica a `!![]`. 

El operador `+` convierte el valor booleano `true` en el número `1`.

### Por último

También puedes sumar

```js
console.log(+!![] + 4); // 5
```
