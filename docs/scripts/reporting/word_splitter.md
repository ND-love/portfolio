---
title: Word to Markdown Splitter
sidebar_position: 1
---

# Word to Markdown Splitter

Этот скрипт автоматизирует перенос документации из MS Word в Docusaurus. Он конвертирует `.docx` файл в Markdown и автоматически нарезает его на отдельные файлы по заголовкам.


## 📋 Требования

1. **Python** (должен быть установлен).
2. Библиотека **mammoth** (для конвертации Word -> MD).

### Установка зависимостей

Откройте терминал и введите:

```bash
pip install mammoth
```

## Как пользоваться
1. Создайте файл word_splitter.py и вставьте в него код ниже.

2. Положите рядом с ним ваш Word-файл и переименуйте его в report.docx (или измените переменную INPUT_FILE в скрипте).

3. Запустите скрипт:

```bash
python word_splitter.py
```
4. Рядом появится папка splitted_docs с готовыми .md файлами.

## Исходный код

```Python

import mammoth
import os
import re

# ⚙️ НАСТРОЙКИ
INPUT_FILE = "report.docx"  # Имя Word-файла (положить рядом со скриптом)
OUTPUT_DIR = "splitted_docs" # Папка, куда сохранятся md-файлы

def sanitize_filename(name):
    """Убирает плохие символы из имени файла"""
    return re.sub(r'[\\/*?:"<>|]', "", name).strip().replace(" ", "_")

def split_docx_to_md():
    if not os.path.exists(INPUT_FILE):
        print(f"❌ Ошибка: Файл {INPUT_FILE} не найден!")
        return

    print("⏳ Конвертирую Word в Markdown...")
    
    with open(INPUT_FILE, "rb") as docx_file:
        # Конвертируем Word сразу в Markdown
        result = mammoth.convert_to_markdown(docx_file)
        full_text = result.value
        messages = result.messages

    # Создаем папку для готовых файлов
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)

    print("🔪 Нарезаю на файлы по заголовкам...")

    # Регулярка ищет заголовки Markdown (начинаются с #, ## или ###)
    chunks = re.split(r'\n(#{1,3} .+)', full_text)

    # chunks[0] — это вступление (до первого заголовка)
    if chunks[0].strip():
        with open(f"{OUTPUT_DIR}/00_Intro.md", "w", encoding="utf-8") as f:
            f.write(chunks[0].strip())
            print(f"📄 Создан: 00_Intro.md")

    count = 1
    # Проходим по списку. Заголовки — нечетные индексы, контент — четные
    for i in range(1, len(chunks), 2):
        header = chunks[i].strip() # Например: "## Level 1"
        content = chunks[i+1] if i+1 < len(chunks) else ""
        
        # Делаем красивое имя файла из заголовка
        clean_header_name = header.lstrip("#").strip()
        safe_name = sanitize_filename(clean_header_name)
        
        filename = f"{count:02d}_{safe_name}.md"
        filepath = os.path.join(OUTPUT_DIR, filename)

        # Собираем контент: Заголовок + Текст
        final_content = f"{header}\n{content}"

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(final_content)
        
        print(f"✅ Создан: {filename}")
        count += 1

    print(f"\n🎉 Готово! Файлы лежат в папке: {OUTPUT_DIR}")

if __name__ == "__main__":
    split_docx_to_md()
```