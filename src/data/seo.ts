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
  'json-java': 'JSON to Java POJO / Record Generator',
  'maven-gradle': 'Maven ↔ Gradle Dependency Converter',
  'quartz-cron': 'Quartz Cron Expression Parser & Explainer',
  'sql-formatter': 'SQL Formatter & Beautifier',
  'html-formatter': 'HTML Formatter & Minifier',
  'css-formatter': 'CSS Formatter & Minifier',
  'js-beautifier': 'JavaScript Beautifier — Unminify & Format JS',
  'json-typescript': 'JSON to TypeScript Interface Generator',
  'lorem-ipsum': 'Lorem Ipsum Generator — Paragraphs, Sentences, Words',
  'java-decompiler': 'Java Decompiler — .class & .jar to Source Code',
  'java-stack-trace': 'Java Stack Trace Beautifier & Analyzer',
  'properties-yaml': 'Spring Boot Properties ↔ YAML Converter',
  'java-format-string': 'Java String.format & MessageFormat Preview',
  'bytecode-viewer': 'Java Bytecode Viewer — JVM Instruction Inspector',
  'jwt-sign': 'JWT Signer — HS256, RS256, ES256',
  'ssl-cert-inspector': 'SSL Certificate Inspector — Parse PEM Online',
  'word-counter': 'Word Counter — Characters, Words, Lines & Reading Time',
  'hex-encoder': 'Hex Encoder & Decoder — Text to Hex Online',
  'http-status': 'HTTP Status Codes — Complete Reference',
  'unit-converter': 'Unit Converter — Length, Weight, Temperature, Data & More',
  'color-converter': 'Color Converter — HEX, RGB, HSL, OKLCH, LAB',
  'image-webp': 'Image to WebP Converter — Convert PNG & JPEG Online',
  'cidr-calculator': 'CIDR Calculator — Subnet Mask & IP Range Tool',
  'markdown-html': 'Markdown to HTML Converter — GitHub Flavored Markdown',
  'yaml-json': 'YAML ↔ JSON Converter — Two-Way Online',
  'qr-code': 'QR Code Generator — Free Online, SVG & PNG',
  'svg-optimizer': 'SVG Optimizer — Clean and Minify SVG Online',
  'json-diff': 'JSON Diff — Compare Two JSON Objects Online',
  'chmod-calculator': 'Chmod Calculator — Octal & Symbolic Permissions',
  'url-parser': 'URL Parser — Break Down Any URL Into Components',
  'env-json': '.env to JSON Converter — Parse .env Files Online',
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
  'json-java':
    'Free online JSON to Java POJO generator. Generate Java classes or records from JSON with optional Lombok @Data and Jackson annotations. Runs in your browser.',
  'maven-gradle':
    'Free online Maven to Gradle dependency converter. Convert Maven XML <dependency> blocks to Gradle Kotlin or Groovy DSL and back. Handles all common scopes.',
  'quartz-cron':
    'Free online Quartz cron expression parser. Decode 6-field Quartz schedules with seconds, explain L/W/# syntax, and preview the next 8 run times.',
  'sql-formatter':
    'Free online SQL formatter and beautifier. Reformat SQL queries for any dialect — MySQL, PostgreSQL, SQLite, T-SQL. Prettify or minify, instant results.',
  'html-formatter':
    'Free online HTML formatter and minifier. Indent messy HTML, collapse whitespace, and minify markup for production. Runs entirely in your browser.',
  'css-formatter':
    'Free online CSS formatter and minifier. Expand compressed CSS for readability or minify for production. Handles nested rules and comments.',
  'js-beautifier':
    'Free online JavaScript beautifier. Unminify, indent, and format compressed or obfuscated JS instantly. No data leaves your browser.',
  'json-typescript':
    'Free online JSON to TypeScript generator. Convert JSON objects to TypeScript interfaces instantly. Handles nested objects, arrays, and optional fields.',
  'lorem-ipsum':
    'Free lorem ipsum generator. Generate placeholder text as paragraphs, sentences, or word lists. Configurable count, classic or random mode.',
  'java-decompiler':
    'Online Java decompiler. Upload .class or .jar files and instantly get readable Java source code. Powered by Vineflower — the same engine as IntelliJ IDEA. Pro plan required — runs on our servers.',
  'java-stack-trace':
    'Free online Java stack trace beautifier. Colorize exceptions, highlight your own code vs library frames, identify root cause and Caused by chains. Runs in your browser.',
  'properties-yaml':
    'Free online Spring Boot converter. Convert application.properties to application.yml and back. Handles nested keys, indexed arrays, and YAML quoting rules. No upload needed.',
  'java-format-string':
    'Free online Java format string tester. Preview String.format and MessageFormat output live. Supports %s, %d, %f, flags, width, precision, and MessageFormat {0,number,currency} syntax.',
  'java-formatter':
    'Online Java code formatter powered by google-java-format. Format Java source code to Google style (2-space) or AOSP style (4-space indent). Pro plan required — runs on our servers.',
  'bytecode-viewer':
    'Online Java bytecode viewer. Upload a .class file and inspect JVM bytecode instructions with javap -verbose. See constant pool, method signatures, and opcodes. Pro plan required — runs on our servers.',
  'jwt-sign':
    'Free online JWT signer. Sign JWT tokens with HS256, RS256, or ES256. Set any claims, choose algorithm, enter your secret or key. Runs entirely in your browser via WebCrypto.',
  'ssl-cert-inspector':
    'Free online SSL certificate inspector. Paste a PEM certificate to view subject, issuer, validity dates, SANs, and SHA-256 fingerprint. No upload — runs in your browser.',
  'word-counter':
    'Free online word counter. Count characters, words, lines, sentences, paragraphs, and estimate reading time. Works instantly in your browser — no data uploaded.',
  'hex-encoder':
    'Free online hex encoder and decoder. Convert text to hexadecimal bytes and back. Choose separator, uppercase output, and UTF-8 or ASCII encoding. No signup needed.',
  'http-status':
    'Complete HTTP status code reference. 1xx informational, 2xx success, 3xx redirects, 4xx client errors, 5xx server errors — with descriptions, causes, and common use cases.',
  'unit-converter':
    'Free online unit converter. Convert length, weight, temperature, data, area, volume, speed, and time units instantly. Over 60 units supported, runs in your browser.',
  'color-converter':
    'Free online color converter. Convert between HEX, RGB, HSL, OKLCH, and CIELab color formats instantly. Auto-detects input format. No upload — runs in your browser.',
  'image-webp':
    'Free online image to WebP converter. Convert PNG, JPEG, GIF, and BMP to WebP in your browser. Adjust quality, preview before and after, download the result instantly.',
  'cidr-calculator':
    'Free online CIDR and subnet calculator. Enter any CIDR notation to get network address, broadcast, first/last host, subnet mask, wildcard, and binary breakdown.',
  'markdown-html':
    'Free online Markdown to HTML converter. Renders GitHub Flavored Markdown including tables, task lists, fenced code blocks, and strikethrough. Live split-panel preview.',
  'yaml-json':
    'Free online YAML ↔ JSON converter. Convert YAML to JSON and JSON to YAML. Auto-detects input format, preserves structure. Custom parser, no libraries needed.',
  'qr-code':
    'Free online QR code generator. Create QR codes as SVG or PNG directly in your browser. Choose size and error correction level (L/M/Q/H). Pure JS, no server required.',
  'svg-optimizer':
    'Free online SVG optimizer. Remove comments, empty attributes, metadata, and default values. Round decimal numbers, collapse whitespace. Shows exact bytes saved.',
  'json-diff':
    'Free online JSON diff tool. Deep-compare two JSON objects and see exactly what was added, removed, or changed. Works in your browser — no server, no upload.',
  'chmod-calculator':
    'Free online chmod calculator. Convert between octal (755) and symbolic (rwxr-xr-x) Unix file permissions. Instant preview of chmod command. Browser-only.',
  'url-parser':
    'Free online URL parser. Break any URL into scheme, host, port, pathname, query params, and hash. View all search parameters in a table. Pure browser tool.',
  'env-json':
    'Free online .env to JSON converter. Parse .env key=value files into JSON objects and convert back. Handles comments, quoted values, and empty lines.',
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
  'json-java':
    'Бесплатный генератор Java POJO из JSON онлайн. Создавай Java-классы и records из JSON с поддержкой Lombok @Data и Jackson аннотаций.',
  'maven-gradle':
    'Бесплатный конвертер зависимостей Maven ↔ Gradle онлайн. Конвертация Maven XML <dependency> в Gradle Kotlin/Groovy DSL и обратно.',
  'quartz-cron':
    'Бесплатный парсер Quartz cron-выражений онлайн. Расшифровка 6-польного формата с секундами, объяснение синтаксиса L/W/#, следующие 8 запусков.',
  'sql-formatter':
    'Бесплатный форматтер SQL онлайн. Форматирование SQL-запросов для MySQL, PostgreSQL, SQLite, T-SQL. Красивый или минифицированный вывод, мгновенный результат.',
  'html-formatter':
    'Бесплатный форматтер HTML онлайн. Расставь отступы в хаотичном HTML или минифицируй разметку для продакшена. Работает прямо в браузере.',
  'css-formatter':
    'Бесплатный форматтер CSS онлайн. Разворачивай сжатый CSS для читаемости или минифицируй для продакшена. Поддержка вложенных правил и комментариев.',
  'js-beautifier':
    'Бесплатный JavaScript-бьютификатор онлайн. Анминификация, форматирование и расстановка отступов в сжатом JS. Данные не покидают браузер.',
  'json-typescript':
    'Бесплатный генератор TypeScript-интерфейсов из JSON онлайн. Конвертируй JSON-объекты в TypeScript интерфейсы. Поддержка вложенных объектов и массивов.',
  'lorem-ipsum':
    'Бесплатный генератор Lorem Ipsum онлайн. Создавай текст-заглушку в виде абзацев, предложений или слов. Настраиваемое количество, классический и случайный режим.',
  'java-decompiler':
    'Онлайн Java декомпилятор. Загружай .class и .jar файлы и мгновенно получай читаемый исходный код Java. Работает на базе Vineflower — того же движка, что в IntelliJ IDEA. Требуется Pro-план.',
  'java-stack-trace':
    'Бесплатная раскраска Java stack trace онлайн. Выделяй исключения, отличай свой код от библиотечных фреймов, находи root cause и цепочки Caused by. Работает в браузере.',
  'properties-yaml':
    'Бесплатный конвертер Spring Boot онлайн. Конвертируй application.properties в application.yml и обратно. Вложенные ключи, массивы, корректные правила кавычек YAML.',
  'java-format-string':
    'Бесплатный тестер Java format string онлайн. Живой предпросмотр String.format и MessageFormat. Поддержка %s, %d, %f, флагов, ширины, точности и синтаксиса {0,number,currency}.',
  'java-formatter':
    'Онлайн форматтер Java-кода на базе google-java-format. Форматируй исходный код по Google-стилю (2 пробела) или AOSP-стилю (4 пробела). Требуется Pro-план.',
  'bytecode-viewer':
    'Онлайн просмотрщик байткода Java. Загружай .class файл и изучай инструкции JVM через javap -verbose. Константный пул, сигнатуры методов, опкоды. Требуется Pro-план.',
  'jwt-sign':
    'Бесплатная подпись JWT токенов онлайн. Подписывай JWT с алгоритмами HS256, RS256 или ES256. Задавай любые claims, вводи секрет или ключ. Работает в браузере через WebCrypto.',
  'ssl-cert-inspector':
    'Бесплатный инспектор SSL-сертификатов онлайн. Вставь PEM-сертификат и смотри subject, issuer, срок действия, SAN и SHA-256 fingerprint. Без загрузки — работает в браузере.',
  'word-counter':
    'Бесплатный счётчик слов онлайн. Подсчёт символов, слов, строк, предложений, абзацев и оценка времени чтения. Работает в браузере, данные не отправляются.',
  'hex-encoder':
    'Бесплатный HEX-кодировщик и декодировщик онлайн. Конвертация текста в шестнадцатеричные байты и обратно. Выбор разделителя, верхний регистр, кодировка UTF-8.',
  'http-status':
    'Полный справочник HTTP-кодов состояния. 1xx информационные, 2xx успех, 3xx редиректы, 4xx ошибки клиента, 5xx ошибки сервера — с описаниями и практическими примерами.',
  'unit-converter':
    'Бесплатный конвертер единиц измерения онлайн. Длина, масса, температура, данные, площадь, объём, скорость, время — более 60 единиц, мгновенный результат в браузере.',
  'color-converter':
    'Бесплатный конвертер цветов онлайн. Конвертируй между HEX, RGB, HSL, OKLCH и CIELab форматами. Автоопределение формата, без загрузки — работает прямо в браузере.',
  'image-webp':
    'Бесплатный конвертер изображений в WebP онлайн. PNG, JPEG, GIF, BMP → WebP прямо в браузере. Настройка качества, предпросмотр до и после, мгновенное скачивание.',
  'cidr-calculator':
    'Бесплатный калькулятор CIDR и подсетей онлайн. Введи нотацию CIDR и получи адрес сети, broadcast, первый/последний хост, маску, wildcard и бинарное представление.',
  'markdown-html':
    'Бесплатный конвертер Markdown в HTML онлайн. GitHub Flavored Markdown: таблицы, task lists, fenced code blocks, зачёркивание. Живой предпросмотр, разделённые панели.',
  'yaml-json':
    'Бесплатный конвертер YAML ↔ JSON онлайн. Конвертация YAML в JSON и JSON в YAML с автоопределением формата. Собственный парсер, поддержка комментариев.',
  'qr-code':
    'Бесплатный генератор QR-кодов онлайн. Создавай QR-коды в SVG и PNG прямо в браузере. Выбор размера и уровня коррекции ошибок (L/M/Q/H). Без сервера, чистый JS.',
  'svg-optimizer':
    'Бесплатный оптимизатор SVG онлайн. Удаление комментариев, пустых атрибутов, метаданных, значений по умолчанию. Округление чисел, сжатие пробелов. Показывает экономию в байтах.',
  'json-diff':
    'Бесплатный онлайн-инструмент для сравнения JSON. Глубокое сравнение двух объектов — что добавлено, удалено, изменено. Работает в браузере, без загрузки данных.',
  'chmod-calculator':
    'Бесплатный калькулятор chmod онлайн. Конвертация между восьмеричным (755) и символьным (rwxr-xr-x) форматом прав Unix. Мгновенный превью команды chmod.',
  'url-parser':
    'Бесплатный парсер URL онлайн. Разбивай любой URL на схему, хост, порт, путь, параметры и хэш. Таблица query-параметров. Полностью в браузере.',
  'env-json':
    'Бесплатный конвертер .env в JSON онлайн. Парсинг файлов key=value в объект JSON и обратно. Поддержка комментариев, кавычек и пустых строк.',
};
