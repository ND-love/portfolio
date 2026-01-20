---
title: HTML_Injection_-_Reflected_POST_low
sidebar_position: 1
---

# Уязвимость HTML Injection — Reflected (POST) уровень (Low).


Переходим в **BurpSuite** на вкладку **Proxy**, далее **Intercept**. В поле **Raw** мы видим исчерпывающие данные, которые перехватил**Burp**. Это и Юзерагент, и Куки, и контент тайп и много еще чего интересного. В данном случае нас интересуют данные, которые расположены в самом низу отчета. Они имеют вид (рис 1):

**firstname=daniil&lastname=ryabcev&form=submit**

![](images/HTML_Injection_-_Reflected_POST_low_img_1.png)

Рисунок 1

Для эксплуатирования данной уязвимости нам нужно изменить эти данные, с применением языка гипертекстовой разметки **HTML**. Иными словами, для демонстрации можно использовать открывающие и закрывающие теги для масштаба текста: h1 и h2, а также тег a, для ссылки. В итоге запись будет видоизменена на вид (рис 2):

**firstname=<h1><a href=»**[**http://www.google.com**](http://www.google.com/)**«>Push me Daniil</a></h1>&lastname=<h2>** **Ryabcev</h2>&form=submit**

![](images/HTML_Injection_-_Reflected_POST_low_img_2.png)

Рисунок 2

В итоге мы успешно проэксплуатировали данную уязвимость и вывели кликабельную ссылку, с использованием тега «**a**», и масштабирования текста, тега «**h1**» и «**h2**» (рис 3).

![](images/HTML_Injection_-_Reflected_POST_low_img_3.png)

Рисунок 3