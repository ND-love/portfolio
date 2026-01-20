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
    # Она делит текст на куски: [Текст до, Заголовок1, Текст1, Заголовок2, Текст2...]
    chunks = re.split(r'\n(#{1,3} .+)', full_text)

    # chunks[0] — это вступление (до первого заголовка)
    if chunks[0].strip():
        with open(f"{OUTPUT_DIR}/00_Intro.md", "w", encoding="utf-8") as f:
            f.write(chunks[0].strip())
            print(f"📄 Создан: 00_Intro.md")

    count = 1
    # Проходим по списку. Заголовки — это нечетные индексы (1, 3, 5...), контент — четные (2, 4, 6...)
    for i in range(1, len(chunks), 2):
        header = chunks[i].strip() # Например: "## Level 1"
        content = chunks[i+1] if i+1 < len(chunks) else ""
        
        # Делаем красивое имя файла из заголовка
        # Убираем решетки (#) и лишние пробелы
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