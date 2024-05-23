---
layout: ../../layouts/PostLayout.astro
title: 'La igualdad == en Javascript'
pubDate: 2024-05-19
description: 'Este es la primera publicación en Javascript is weird.'
author: 'Josenromero'
tags: ["tipos de datos", "igualdad"]
---

La rareza típica de Javascript es la igualdad.

```js
new Array() == false // true
```

Aquí tienes más ejemplos:

```js
2 == "2" // true
true == 1 // true
"" == 0 // true
undefined == null // true
"true" == true // true
"false" == false // false
```

Si aún no sabes por que pasa esto te dejó un artículo que lo explica

<a href='https://midu.dev/como-funciona-el-operador-igualdad-simple-javascript/' target='_blank' rel='noreferrer'>¿Cómo funciona realmente la igualdad ==?</a>

<br>

Para evitar sorpresas y posibles errores en tu código, lo recomendado es usar === en Lugar de ==

```js
2 === "2" // false
```

La comparación estricta === te ayuda a evitar muchos de los comportamientos extraños asociados con ==.
