---
title: YouTube 4K Video Cutter
sidebar_position: 1
---

# YouTube 4K Video Cutter

Скрипт для скачивания фрагментов видео с YouTube в максимальном качестве (4K/8K) без перекодировки всего файла.


## Требования

1. **Python** (должен быть установлен).
2. **FFmpeg** (должен быть в PATH).
   * Проверка: введите `ffmpeg -version` в терминале.
   * Если ошибка: установите (`winget install Gyan.FFmpeg` в Windows).
3. **Библиотека yt-dlp**:
   ```bash
   pip install yt-dlp
   ```
## Исходный код 
   Создайте файл main.py и вставьте туда этот код:

```bash
   import yt_dlp
from yt_dlp.utils import download_range_func

def time_to_seconds(time_str):
    """Преобразует строку ЧЧ:ММ:СС в секунды."""
    parts = list(map(int, time_str.split(':')))
    if len(parts) == 3:
        return parts[0] * 3600 + parts[1] * 60 + parts[2]
    elif len(parts) == 2:
        return parts[0] * 60 + parts[1]
    else:
        return parts[0]

def download_video_segment(url, start_time, end_time):
    start_sec = time_to_seconds(start_time)
    end_sec = time_to_seconds(end_time)

    ydl_opts = {
        # Пытаемся скачать 4K (2160p) или выше. Если нет — лучшее доступное.
        'format': 'bestvideo[height>=2160]+bestaudio/bestvideo+bestaudio',
        
        # Собираем в MP4 (самый совместимый формат)
        'merge_output_format': 'mp4',
        
        # Имя файла: Название_cut.mp4
        'outtmpl': '%(title)s_cut.%(ext)s',
        
        # Обрезаем конкретный кусок
        'download_ranges': download_range_func(None, [(start_sec, end_sec)]),
        
        # ВАЖНО: False ускоряет процесс в 100 раз (без перекодировки стыков)
        'force_keyframes_at_cuts': False,  
        
        'quiet': False,
        'no_warnings': True,
    }

    try:
        print(f"--- Начинаю загрузку фрагмента ({start_time} - {end_time}) ---")
        print("Режим: БЫСТРЫЙ (без перекодировки).")
        
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
            
        print("\n✅ Готово! Видео сохранено в папке со скриптом.")
        
    except Exception as e:
        print(f"\n❌ Ошибка: {e}")

if __name__ == "__main__":
    link = input("Вставьте ссылку: ")
    print("Укажите время (например, 00:00:00 - 02:00:00)")
    t_start = input("Время НАЧАЛА: ")
    t_end = input("Время КОНЦА: ")
    
    download_video_segment(link, t_start, t_end)
```
 ## Как пользоваться
 1. Откройте терминал в папке со скриптом.
 2. Запустите:
 ```bash
 python main.py
 ```
 3. Вставьте ссылку на видео.
 4. Введите время (например, начало 00:10:00 и конец 00:15:30).

 ## WARNING Важные нюансы

 1. VPN: Для скачивания 4K в РФ часто нужен VPN.
 2. Точность: Скрипт режет по ключевым кадрам (force_keyframes=False). Это очень быстро, но может захватить пару лишних секунд.