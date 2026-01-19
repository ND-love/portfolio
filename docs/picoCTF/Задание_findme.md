**Задание findme**

Первым шагом запускаем burp и вводим test test! (рис 1)

![img](media/Задание_findme/media/image1.png)

Пересылаем это в Repeater, нажиамем send и нам выдает ответ и в нем видно шифр (рис 2)

![img](media/Задание_findme/media/image2.png)

![Декодируем base64 и видим первую часть флага picoCTF{proxies_al (рис 3)](media/Задание_findme/media/image3.png)

Рисунок 3

Следующим шагом вставляем этот id страницы и получаем торую часть зашифрованного флага (рис 4) (***[но надо снчала будет очистить куки)]{.underline}*** (рис 4)

![img](media/Задание_findme/media/image4.png)

**ОТВЕТ: picoCTF{proxies_all_the_way_25bbae9a}**

