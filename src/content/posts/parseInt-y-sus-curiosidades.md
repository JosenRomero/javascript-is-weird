---
title: 'El método parseInt y sus curiosidades'
pubDate: 2024-06-05
description: 'La precisión del método parseInt.'
author: 'Josenromero'
tags: ["number", "string"]
---

El método `parseInt` está diseñado para convertir una cadena de texto en un número entero. 

Sin embargo, cuando se le pasa un número demasiado pequeño o demasiado grande, el comportamiento puede ser sorprendente.


```js
console.log(parseInt(0.0000005)); // 5
```

### ¿Qué está pasando?

Para entender por qué `parseInt(0.0000005)` devuelve `5`, primero debemos entender cómo parseInt maneja los números en JavaScript.

<br>

1. Conversión a Cadena de Texto:

Cuando pasamos un número a parseInt, el número se convierte primero a una cadena de texto.

```js
console.log(0.0000005.toString()); // "5e-7"
```

El número `0.0000005` en notación decimal se convierte a la cadena `"5e-7"` en notación científica.

<br>

2. Aplicación de parseInt:

Luego, parseInt toma esta cadena `"5e-7"` y la analiza desde el inicio hasta encontrar un carácter no válido para un número entero.

```js
console.log(parseInt("5e-7")); // 5
```

```js
console.log(parseInt(0.5)); // 0
console.log(parseInt(0.05)); // 0
console.log(parseInt(0.005)); // 0
console.log(parseInt(0.0005)); // 0
console.log(parseInt(0.00005)); // 0
console.log(parseInt(0.000005)); // 0
console.log(parseInt(0.0000005)); // 5
```

### Otro ejemplo

```js
console.log(parseInt(999999999999999999999)); // 1
```

En este otro ejemplo Javascript nos da el mismo problema de precisión.

```js
// Conversión a Cadena de Texto
console.log(999999999999999999999); // "1e+21"

// Aplicación de parseInt
console.log(parseInt("1e+21")); // 1
```

### Uso de parseFloat para Decimales

Cuando se trata de números decimales, parseInt solo analiza la parte entera del número y se detiene en el primer carácter no válido. Esto significa que cualquier parte fraccionaria del número será ignorada.

```js
console.log(parseInt(3.14)); // 3
console.log(parseInt(0.0000005)); // 5 (por la conversión a notación científica)
console.log(parseInt(123.456)); // 123
```

Para decimales se tiene que usar parseFloat, aunque este método también tiene sus limitaciones de precisión.

```js
console.log(parseFloat("3.14")); // 3.14
console.log(parseFloat("0.0000005")); // "5e-7"
console.log(parseFloat("123.456")); // 123.456
```

### Conclusión

En JavaScript, los números se implementan en <a href='https://es.wikipedia.org/wiki/Formato_en_coma_flotante_de_doble_precisi%C3%B3n' target='_blank' rel='noreferrer'>Formato en coma flotante de doble precisión</a>, que tiene ciertas limitaciones en la precisión cuando los números son extremadamente grandes o pequeños.

<br>

El comportamiento de parseInt y parseFloat con números extremadamente pequeños o grandes se debe a la conversión de estos números a cadenas en notación científica y a las limitaciones de precisión en JavaScript.

La recomendación es usar números dentro de los límites de precisión.

Para números enteros, por ejemplo, el limite máximo de precisión es `Number.MAX_SAFE_INTEGER` y el limite mínimo de precisión es `Number.MIN_SAFE_INTEGER`.