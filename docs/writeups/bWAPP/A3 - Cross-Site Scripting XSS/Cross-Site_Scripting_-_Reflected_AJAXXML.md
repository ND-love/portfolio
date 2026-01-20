---
title: Cross-Site Scripting - Reflected (AJAX/XML)
---

# Cross-Site Scripting - Reflected (AJAX/XML)

Надо закодировать некоторые части данного payload
```bash
<img src='#' onerror='alert(bee)' />
```
Кодируем и получаем
```bash
&lt;img src='#' onerror='alert (bee)'&gt;
```
![](images/img_8.png)