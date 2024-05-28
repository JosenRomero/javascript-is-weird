---
title: '[1, 2, 3] + [4, 5, 6]'
pubDate: 2024-05-28
description: 'sumar y concatenar arrays'
author: 'Josenromero'
tags: ["tipos de datos", "sumar", "arrays"]
---

Si evaluamos `[1, 2, 3] + [4, 5, 6]` ¿qué esperamos? y ¿qué ocurre realmente?

A primera vista, uno podría esperar que el resultado sea la concatenación de los dos arrays, pero la realidad es bastante diferente.

```js
console.log([1, 2, 3] + [4, 5, 6]); // "1,2,34,5,6"
```

## ¿Qué ocurre realmente?

Javascript primero hace la coerción de tipos, pasando los dos arrays a strings (cadenas de textos) y luego concatena los dos strings.

```js

// paso 1: coerción de tipos
[1, 2, 3] + [4, 5, 6] // "1,2,3" + "4,5,6 


// paso 2: concatenación
"1,2,3" + "4,5,6" // "1,2,34,5,6"

```


## Concatenar Arrays

Si realmente deseas concatenar dos arrays en JavaScript, debes utilizar métodos diseñados para ese propósito, como `Array.prototype.concat` o el operador de propagación (spread operator).

<br>

1. Usando el método concat:

```js
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = array1.concat(array2);
console.log(concatenatedArray); // [1, 2, 3, 4, 5, 6]
```

2. Usando el Operador de Propagación:

```js
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = [...array1, ...array2];
console.log(concatenatedArray); // [1, 2, 3, 4, 5, 6]
```
