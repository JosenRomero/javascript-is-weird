---
title: '0.1 + 0.2 == 0.3'
pubDate: 2024-05-23
description: 'La precisión de punto flotante en JavaScript.'
author: 'Josenromero'
tags: ["number", "igualdad"]
---

Si comparamos `0.1 + 0.2 == 0.3` en matemáticas, esa igualdad es verdadera, pero no es así en Javascript.

```js
console.log(0.1 + 0.2 == 0.3); // false
```

Otro ejemplo

```js
console.log(0.3 - 0.1 == 0.2); // false
```

### ¿Qué está pasando?

Para entender por qué `0.1 + 0.2` no es exactamente igual a `0.3` y por qué `0.3 - 0.1` no es exactamente igual a `0.2`, es necesario comprender cómo se representan los números de punto flotante en la memoria. 

Los números de punto flotante no pueden representar ciertos valores con total precisión debido a la manera en que están codificados.

```js
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.3 - 0.1); // 0.19999999999999998
```

Si quieres profundizar más sobre el sistema numérico de punto flotante que provoca algunos errores de redondeo en JavaScript te dejó un artículo.

<a href='https://gauravkk22.medium.com/why-0-1-0-2-0-3-is-false-in-js-mystery-unsolved-with-solution-4f7db2755f18' target='_blank' rel='noreferrer'>Why 0.1 + 0.2 == 0.3 is false in JS? Mystery Unsolved With Solution</a>

<br>

### ¿Cómo manejar esta peculiaridad?

1. Redondeo a un Número Fijo de Decimales
2. Uso de librerías de precisión arbitraria (como Big.js o Decimal.js)

```js
const result = (0.1 + 0.2).toFixed(10);
console.log(result == 0.3); // true
```

Estas peculiaridades en JavaScript son un excelente recordatorio de que, aunque los lenguajes de programación modernos son muy buenos, también están limitados por las representaciones internas de los datos. Entender estas limitaciones es crucial para escribir código robusto y evitar errores sutiles.