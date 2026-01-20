---
title: Cross-Site Scripting - Reflected (AJAX/XML)
---

# Cross-Site Scripting - Reflected (AJAX/XML)

Надо закодировать некоторые части данного payload

<img src='#' onerror='alert(bee)'>

Кодируем и получаем

&lt;img src='#' onerror='alert (bee)'&gt;

![](images/img_8.png)