// SEO titles and meta descriptions (~150 chars) per tool slug

export const SEO_TITLE: Record<string, string> = {
  'json-formatter': 'JSON Formatter & Validator',
  base64: 'Base64 Encoder & Decoder',
  'jwt-decoder': 'JWT Decoder & Inspector',
  'uuid-generator': 'UUID Generator — v4, v7, NanoID',
  'regex-tester': 'Regex Tester with Live Highlighting',
  'cron-parser': 'Cron Expression Parser & Explainer',
  'timestamp-converter': 'Unix Timestamp Converter',
  'url-encoder': 'URL Encoder & Decoder',
  'hash-generator': 'SHA Hash Generator — SHA-256, SHA-512',
  'password-generator': 'Secure Password Generator',
  'slug-generator': 'URL Slug Generator',
  bcrypt: 'Bcrypt Hash Generator & Verifier',
  'text-diff': 'Text Diff — Line-by-Line Comparison',
  'case-normalizer': 'Case Converter — camelCase, snake_case & more',
  'curl-converter': 'Curl to Fetch / Axios / Python Converter',
  'query-string-parser': 'Query String Parser & Builder',
  'xml-json': 'XML ↔ JSON Converter',
  'html-entity-encoder': 'HTML Entity Encoder & Decoder',
  'mime-lookup': 'MIME Type Lookup',
  'number-base-converter': 'Number Base Converter — Binary, Hex, Octal',
  'string-inspector': 'String Inspector — Length, Bytes, Entropy',
  'csv-json': 'CSV ↔ JSON Converter',
};

export const SEO_DESC: Record<string, string> = {
  'json-formatter':
    'Free online JSON formatter and validator. Prettify, minify, and validate JSON instantly in your browser. No upload, no signup required.',
  base64:
    'Free online Base64 encoder and decoder. Encode text or files to Base64, decode Base64 strings instantly. URL-safe mode supported. No data leaves your browser.',
  'jwt-decoder':
    'Free online JWT decoder. Inspect header, payload, and signature of any JWT token. View claims, check expiration — runs entirely in your browser.',
  'uuid-generator':
    'Free online UUID generator. Generate v4, v7, NanoID, and custom format IDs. Bulk generation, cryptographically secure. No signup required.',
  'regex-tester':
    'Free online regex tester with live match highlighting. Test regular expressions with flags (g, i, m, s). Includes a built-in regex reference guide.',
  'cron-parser':
    'Free online cron expression parser. Translate cron schedules to plain English and see next run times. Supports standard 5-field and extended syntax.',
  'timestamp-converter':
    'Free online Unix timestamp converter. Convert Unix timestamps to readable dates and back. Supports ISO 8601, UTC, local time, and relative format.',
  'url-encoder':
    'Free online URL encoder and decoder. Percent-encode URL components or decode encoded strings. Supports encodeURIComponent and encodeURI modes.',
  'hash-generator':
    'Free online SHA hash generator. Calculate SHA-256, SHA-384, and SHA-512 hashes for text and files using the WebCrypto API. No data leaves your browser.',
  'password-generator':
    'Free secure password generator. Configurable length, uppercase, lowercase, digits, symbols. Shows entropy score. Runs locally — never sent to a server.',
  'slug-generator':
    'Free online URL slug generator. Convert any text to URL-safe slugs. Supports Cyrillic transliteration, special characters, and custom separators.',
  bcrypt:
    'Free online bcrypt tool. Hash passwords with configurable cost factor (4–14) and verify bcrypt hashes. Runs entirely in your browser via bcryptjs.',
  'text-diff':
    'Free online text diff tool. Compare two texts line by line and see exactly what changed. Color-coded additions and deletions — no files uploaded.',
  'case-normalizer':
    'Free online case converter. Transform text between camelCase, snake_case, kebab-case, PascalCase, SCREAMING_SNAKE_CASE and more. Instant results.',
  'curl-converter':
    'Free online curl converter. Convert curl commands to JavaScript fetch, Axios, Python requests, and HTTPie. Parses headers, auth, and request body.',
  'query-string-parser':
    'Free online query string parser and builder. Parse URL query strings into key-value pairs, edit them, and rebuild the query string. URL decoding included.',
  'xml-json':
    'Free online XML to JSON converter. Convert XML to JSON and JSON back to XML instantly in your browser. Handles attributes, nested elements, and arrays.',
  'html-entity-encoder':
    'Free online HTML entity encoder and decoder. Escape special HTML characters (&, <, >, ", \') and decode HTML entities. Useful for XSS-safe output.',
  'mime-lookup':
    'Free online MIME type lookup. Find the correct Content-Type for any file extension. Covers 500+ file types including images, video, fonts, and documents.',
  'number-base-converter':
    'Free online number base converter. Convert numbers between decimal, binary, octal, hexadecimal, and any custom base from 2 to 36. Instant conversion.',
  'string-inspector':
    'Free online string inspector. Analyze text length, byte size, word count, Unicode code points, Shannon entropy, and character frequency distribution.',
  'csv-json':
    'Free online CSV to JSON converter. Convert CSV to JSON arrays and JSON back to CSV. Auto-detects comma, semicolon, tab, and pipe delimiters.',
};

export const SEO_DESC_RU: Record<string, string> = {
  'json-formatter':
    'Бесплатный онлайн-форматтер JSON. Форматирование, минификация и валидация JSON прямо в браузере. Без загрузки и регистрации.',
  base64:
    'Бесплатный Base64-кодировщик и декодировщик онлайн. Кодируй текст и файлы в Base64, декодируй строки. Поддержка URL-safe режима.',
  'jwt-decoder':
    'Бесплатный декодер JWT токенов онлайн. Просматривай заголовок, payload и подпись. Проверяй срок действия — всё работает в браузере.',
  'uuid-generator':
    'Бесплатный генератор UUID онлайн. Генерируй v4, v7, NanoID и UUID в своём формате. Пакетная генерация, криптографически безопасный.',
  'regex-tester':
    'Бесплатный тестер регулярных выражений с подсветкой совпадений в реальном времени. Флаги g, i, m, s. Встроенный справочник по regex.',
  'cron-parser':
    'Бесплатный парсер cron-выражений онлайн. Расшифровка расписаний на понятный язык, следующие запуски. Поддержка стандартного 5-польного синтаксиса.',
  'timestamp-converter':
    'Бесплатный конвертер Unix-времени онлайн. Конвертируй Unix timestamp в дату и обратно. Поддержка ISO 8601, UTC, локального времени.',
  'url-encoder':
    'Бесплатный кодировщик и декодировщик URL онлайн. Процентное кодирование компонентов URL и декодирование encoded-строк.',
  'hash-generator':
    'Бесплатный генератор SHA-хешей онлайн. SHA-256, SHA-384, SHA-512 для текста и файлов через WebCrypto API. Данные не покидают браузер.',
  'password-generator':
    'Бесплатный генератор паролей онлайн. Настраиваемая длина, наборы символов, оценка энтропии. Работает локально — пароль не отправляется на сервер.',
  'slug-generator':
    'Бесплатный генератор URL-slug онлайн. Конвертируй любой текст в URL-безопасные slug. Поддержка транслитерации кириллицы.',
  bcrypt:
    'Бесплатный инструмент bcrypt онлайн. Хешируй пароли с настраиваемым cost-фактором и проверяй bcrypt-хеши. Работает в браузере.',
  'text-diff':
    'Бесплатное сравнение текстов онлайн. Построчное сравнение двух текстов с подсветкой добавлений и удалений. Без загрузки файлов.',
  'case-normalizer':
    'Бесплатный конвертер регистра онлайн. Преобразование между camelCase, snake_case, kebab-case, PascalCase, SCREAMING_SNAKE_CASE.',
  'curl-converter':
    'Бесплатный конвертер curl онлайн. Конвертируй curl-команды в fetch, Axios, Python requests и HTTPie. Парсит заголовки, тело и авторизацию.',
  'query-string-parser':
    'Бесплатный парсер query string онлайн. Разбирай URL query строки на пары ключ-значение и собирай обратно. URL-декодирование включено.',
  'xml-json':
    'Бесплатный конвертер XML ↔ JSON онлайн. Конвертация XML в JSON и обратно прямо в браузере. Атрибуты, вложенные элементы, массивы.',
  'html-entity-encoder':
    'Бесплатный кодировщик HTML-символов онлайн. Экранируй &, <, >, ", \' и декодируй HTML-entities. Защита от XSS.',
  'mime-lookup':
    'Бесплатный справочник MIME-типов онлайн. Находи правильный Content-Type для любого расширения файла. Более 500 типов файлов.',
  'number-base-converter':
    'Бесплатный конвертер систем счисления онлайн. Конвертируй числа между десятичной, двоичной, восьмеричной, шестнадцатеричной и любой другой системой.',
  'string-inspector':
    'Бесплатный инспектор строк онлайн. Анализ длины, байтов, слов, Unicode, энтропии Шеннона и частоты символов.',
  'csv-json':
    'Бесплатный конвертер CSV ↔ JSON онлайн. Конвертация CSV в JSON-массивы и обратно. Автоопределение разделителя: запятая, точка с запятой, таб.',
};
