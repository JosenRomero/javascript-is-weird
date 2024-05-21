---
layout: ../../layouts/PostLayout.astro
title: 'La igualdad == en Javascript'
pubDate: 2024-05-19
description: 'Este es la primera publicación en Javascript is weird.'
author: 'Josenromero'
tags: ["tipos de datos", "igualdad"]
---

La rareza típica de Javascript es la igualdad

```
new Array() == false // true
```

Aquí tienes más ejemplos:

```
2 == "2" // true
true == 1 // true
"" == 0 // true
undefined == null // true
"true" == true // true
"false" == false // false
```

Si aún no sabes por que pasa esto te dejó un artículo que lo explica
- [¿Cómo funciona realmente la igualdad ==?](https://midu.dev/como-funciona-el-operador-igualdad-simple-javascript/)
