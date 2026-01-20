---
title: SQL_Injection_Login_FormHero
sidebar_position: 1
---

# SQL Injection (Login Form/Hero)

**(low)**


Приложение состоит из формы для входа в систему и запрашивает учётные данные для продолжения работы. Согласно перехваченному запросу, оно использует POST-запрос к файлу sqli\_3.php

Используем этот payload, чтобы авторизироваться

' or '1'='1'-- -

![](images/SQL_Injection_Login_FormHero_img_1.png)