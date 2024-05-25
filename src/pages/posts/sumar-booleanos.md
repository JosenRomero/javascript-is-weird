---
layout: ../../layouts/PostLayout.astro
title: 'La suma de boleanos'
pubDate: 2024-05-25
description: 'En JavaScript es posible sumar valores booleanos.'
author: 'Josenromero'
tags: ["booleanos", "sumar"]
---

En Javascript es posible sumar valores booleanos

```js
console.log(true + false); // 1
```

Otros ejemplos

```js
console.log(true + true + true); // 3
console.log(true + true); // 2
```

### ¿Qué está pasando?

Javascript tiene la capacidad para convertir tipos de datos automáticamente (coerción de tipos), asi los valores booleanos `true` y `false` se convierten a números de la siguiente manera:
- `true` se convierte a `1`
- `false` se convierte a `0`

### Aplicaciones Prácticas

Una aplicación práctica de esta peculiaridad es contar la cantidad de valores true en un array booleano:

```js
const boolArray = [true, false, true, true, false];
const trueCount = boolArray.reduce((sum, value) => sum + value, 0);
console.log(trueCount); // 3
```
