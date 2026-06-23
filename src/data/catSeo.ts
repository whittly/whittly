export interface CatSeoContent {
  seoTitle: string;
  seoDesc: string;
  h1: string;
  subhead: string;
  about: string;
  useCases: string[];
  faq: { q: string; a: string }[];
}

export const CAT_SEO_EN: Record<string, CatSeoContent> = {
  convert: {
    seoTitle: 'Online Conversion Tools for Developers — whittly',
    seoDesc:
      'Free online converters: YAML↔JSON, CSV↔JSON, XML↔JSON, Markdown→HTML, color formats, unit conversion, number bases. All browser-based, no signup.',
    h1: 'Online converters for developers',
    subhead:
      'Transform data between formats — YAML, JSON, CSV, XML, Markdown, color spaces, number bases, units. All run in your browser, nothing uploaded.',
    about:
      'Conversion tools are the workhorses of a developer toolkit. Whether you are reformatting an API response, adapting config files between ecosystems, or translating measurement units in documentation, these tools handle the transformation without a round-trip to a server. Every tool parses input on every keystroke and shows the converted output instantly.',
    useCases: [
      'Convert YAML API responses to JSON for programmatic processing',
      'Transform CSV exports into JSON arrays for JavaScript applications',
      'Convert Markdown documentation to HTML for embedding in a CMS',
      'Convert hex color values to HSL for CSS custom properties',
    ],
    faq: [
      {
        q: 'Are there any file size limits?',
        a: "No hard limit. All conversions happen in your browser's memory. The practical limit is the RAM your browser tab can allocate — typically several hundred MB.",
      },
      {
        q: 'Does converted data leave my browser?',
        a: "No. Every tool processes data using your browser's JavaScript engine. No network requests are made during conversion.",
      },
      {
        q: 'What happens with invalid input?',
        a: 'Each tool validates input and shows an inline error. The output is only updated when the input can be successfully parsed.',
      },
    ],
  },

  format: {
    seoTitle: 'Code Formatters & Beautifiers Online — whittly',
    seoDesc:
      'Free online code formatters. JSON, SQL, HTML, CSS, JavaScript. Prettify minified code, validate syntax, and minify for production. All browser-based.',
    h1: 'Code formatters & beautifiers online',
    subhead:
      'Prettify minified JSON, SQL, HTML, CSS, and JavaScript. Validate syntax and minify for production — all in your browser.',
    about:
      'Code formatters take minified, machine-generated, or inconsistently indented code and apply a consistent style. This makes code readable, easier to diff in version control, and simpler to debug. All formatters work client-side, so you can safely paste production configs, internal queries, or proprietary code without sending them to a server.',
    useCases: [
      'Prettify a minified API response before pasting it into a ticket or Slack message',
      'Validate JSON config files before committing to a repo',
      'Minify CSS or JavaScript for production deployments',
      'Format SQL queries copied from a legacy codebase for readability',
    ],
    faq: [
      {
        q: 'Can I format minified production code safely?',
        a: 'Yes. All formatting runs in your browser — nothing is sent to a server.',
      },
      {
        q: 'Does the formatter validate syntax?',
        a: 'The JSON formatter strictly validates against the JSON spec and reports the exact error position. SQL and HTML formatters parse on a best-effort basis and produce output even for slightly malformed input.',
      },
      {
        q: 'Can I minify as well as prettify?',
        a: 'Yes. JSON, HTML, and CSS formatters include a minify mode that strips whitespace and comments to produce the smallest possible output for production.',
      },
    ],
  },

  encode: {
    seoTitle: 'Encoding, Hashing & Crypto Tools Online — whittly',
    seoDesc:
      'Free online encoding tools. Base64, URL encoding, SHA hashes, JWT decode/sign, bcrypt, hex, HTML entities, SSL certificates. All run in your browser.',
    h1: 'Encoding, hashing & crypto tools online',
    subhead:
      'Base64, URL encoding, SHA hashes, JWT tokens, bcrypt, hex, HTML entities, SSL certificates. Browser-only, nothing uploaded.',
    about:
      "Encoding and hashing are fundamental operations in web development. Whether you are debugging a JWT, verifying a bcrypt hash, encoding a URL parameter, or inspecting an SSL certificate, these tools provide the cryptographic primitives you need without installing any software or sending sensitive data to a server. All crypto operations use the browser's native WebCrypto API.",
    useCases: [
      'Decode a JWT token to inspect its claims and check expiration',
      'Hash a password candidate with bcrypt to verify it against a stored hash',
      'Encode binary data as Base64 for embedding in a data URI',
      'Calculate SHA-256 checksums to verify file integrity',
    ],
    faq: [
      {
        q: 'Do any of these tools send data to a server?',
        a: 'No. All tools use browser-native APIs — WebCrypto for hashing and JWT signing, custom ASN.1/DER parsing for SSL certificates, and TextEncoder/atob/btoa for encoding. Nothing leaves your browser tab.',
      },
      {
        q: 'Can I use these for production key signing?',
        a: 'For inspection and development, these tools are ideal. For production systems, use a server-side solution with proper key management and audit trails.',
      },
      {
        q: 'Is bcrypt run locally or on a server?',
        a: 'Locally, via the bcryptjs library compiled to WebAssembly. Your plaintext password never leaves the browser tab.',
      },
    ],
  },

  generate: {
    seoTitle: 'Online Generator Tools for Developers — whittly',
    seoDesc:
      'Free online generator tools. UUID v4/v7, NanoID, Lorem Ipsum, secure passwords, QR codes. Cryptographically secure. No signup, runs in your browser.',
    h1: 'Generator tools for developers',
    subhead:
      'Cryptographically secure UUIDs, Lorem Ipsum placeholder text, strong passwords, and QR codes — straight from your browser.',
    about:
      "Generator tools create structured output from nothing — or from a few parameters. Every generator here uses your browser's cryptographic random number generator (crypto.getRandomValues) for results that are both unpredictable and instant. From UUIDs that serve as unique identifiers in distributed systems to QR codes generated entirely in JavaScript without any external library.",
    useCases: [
      'Generate a batch of UUID v4s for a new database migration or seeding script',
      'Create Lorem Ipsum paragraphs for a UI mockup or design prototype',
      'Generate a strong password with specific length and character set requirements',
      'Create a QR code linking to your website, vCard, or Wi-Fi credentials',
    ],
    faq: [
      {
        q: 'Are generated UUIDs truly unique?',
        a: 'UUID v4 generates 122 bits of cryptographic randomness via the WebCrypto API. The probability of a collision in 1 billion generated UUIDs is approximately 1 in 10^18 — effectively zero for any practical use.',
      },
      {
        q: 'How secure are the generated passwords?',
        a: 'Passwords are generated using crypto.getRandomValues() — the same CSPRNG browsers use for TLS. The entropy score shows theoretical bits of randomness; 64+ bits is suitable for most accounts, 80+ for critical ones.',
      },
      {
        q: 'Can the QR code generator handle long URLs?',
        a: 'The generator supports versions 1–10, which handle up to 174 bytes at the lowest error correction level. For longer input, use a URL shortener first to keep the QR code scannable.',
      },
    ],
  },

  text: {
    seoTitle: 'Text & String Processing Tools Online — whittly',
    seoDesc:
      'Free online text tools. Regex tester, text diff, case converter, slug generator, word counter, string inspector. Browser-only, no data uploaded.',
    h1: 'Text & string tools online',
    subhead:
      'Diff, regex testing, case conversion, slugs, word count, Unicode analysis. Browser-only string processing, no data uploaded.',
    about:
      'Text processing is a daily task for every developer — comparing two config files, testing a complex regex, converting variable names between naming conventions, or counting characters for SEO. These tools bring common string operations into the browser with real-time feedback. Every operation processes input on the client side and updates the output within milliseconds.',
    useCases: [
      'Compare two versions of a configuration file to spot unintended differences',
      'Test a complex regex before adding it to production code',
      'Convert a blog post title to a URL-safe slug with Cyrillic support',
      'Count words and estimate reading time for technical documentation',
    ],
    faq: [
      {
        q: 'What regex flavors are supported?',
        a: "The regex tester uses the browser's native JavaScript RegExp engine (ECMAScript 2015+). It supports lookahead, lookbehind, named capture groups, and Unicode properties, but not PCRE-only features like possessive quantifiers or atomic groups.",
      },
      {
        q: 'Can I compare large files?',
        a: 'The text diff tool handles text up to several hundred KB comfortably. For very large files (>1 MB), git diff in a terminal will be faster.',
      },
      {
        q: 'What does the string inspector show?',
        a: 'Length in characters, byte length in UTF-8, word count, unique characters, Shannon entropy (useful for detecting encrypted or compressed strings), and a character frequency table.',
      },
    ],
  },

  network: {
    seoTitle: 'Network Tools & Calculators Online — whittly',
    seoDesc:
      'Free online network tools. CIDR subnet calculator, HTTP status code reference, DNS lookup. IP addressing, subnet math, HTTP protocol reference.',
    h1: 'Network tools & calculators online',
    subhead:
      'CIDR subnet calculator, HTTP status code reference, and more. Essential tools for networking, API development, and infrastructure work.',
    about:
      'Network tools help developers reason about IP addressing, HTTP protocol semantics, and DNS infrastructure. The CIDR calculator takes any CIDR notation and derives all subnet properties — mask, range, host count, binary representation. The HTTP status reference covers every code from RFC 7231 and later RFCs with practical explanations of when each code should be used.',
    useCases: [
      'Calculate the host range of a /27 or /30 subnet for cloud VPC planning',
      'Look up what a 409, 422, or 503 status code means while debugging an API',
      'Verify whether two IP addresses fall in the same subnet before configuring routing',
      'Check the difference between 301 and 302, or 401 and 403',
    ],
    faq: [
      {
        q: 'Why does /24 only give 254 usable hosts?',
        a: 'In any subnet, the first address (all host bits zero) is the network address and the last (all host bits one) is the broadcast address. Neither can be assigned to a host, so a /24 gives 256 − 2 = 254 usable addresses.',
      },
      {
        q: 'What is the difference between 4xx and 5xx errors?',
        a: '4xx errors indicate a problem with the client request — the client sent something the server cannot or will not process. 5xx errors indicate a server-side failure — the server understood the request but failed to fulfill it.',
      },
      {
        q: 'What is CIDR notation?',
        a: 'CIDR (Classless Inter-Domain Routing) notation expresses an IP address and its routing prefix as a single string: the address, a slash, and a prefix length. For example, 192.168.1.0/24 means the first 24 bits are the network part and the remaining 8 bits are the host part.',
      },
    ],
  },

  image: {
    seoTitle: 'Online Image Tools — WebP Converter & SVG Optimizer',
    seoDesc:
      'Free online image tools. Convert PNG, JPEG to WebP in your browser. Optimize SVG — remove comments, round decimals, clean attributes. No upload needed.',
    h1: 'Image tools online',
    subhead:
      'Convert images to WebP and optimize SVG files. No upload — everything processes locally in your browser.',
    about:
      "Image optimization is one of the most impactful performance improvements for web projects. Converting PNG and JPEG to WebP typically reduces file size by 25–35% at equivalent visual quality, using the browser's native Canvas API with no server involved. Cleaning up SVGs exported from Figma, Illustrator, or Inkscape removes editor metadata, redundant default attributes, and unnecessary whitespace — often cutting file size by 20–60%.",
    useCases: [
      'Convert product images to WebP before uploading to an e-commerce platform',
      'Optimize SVG icons exported from Figma before committing to a repo',
      'Compare WebP quality levels to find the optimal size-to-quality ratio',
      'Remove Inkscape or Illustrator metadata from SVG files used in production CSS',
    ],
    faq: [
      {
        q: 'Does the image data ever leave my browser?',
        a: 'No. Image conversion uses the browser Canvas API entirely locally. SVG optimization is plain text processing in JavaScript. Nothing is uploaded to any server.',
      },
      {
        q: 'When should I use WebP over other formats?',
        a: 'WebP is the best default for photos, screenshots, and UI graphics that need broad browser support (95%+ globally). For next-gen use, AVIF achieves even better compression but has ~90% support. Use SVG for logos, icons, and diagrams that need to scale.',
      },
      {
        q: 'Will SVG still look the same after optimization?',
        a: 'Yes for all default passes — removing comments, DOCTYPE, metadata, empty attributes, and collapsing whitespace are visually lossless. The decimal rounding pass (toPrecision 4) may cause sub-pixel differences on very precise paths.',
      },
    ],
  },

  data: {
    seoTitle: 'Data & API Utility Tools Online — whittly',
    seoDesc:
      'Free online data tools. Cron parser, curl converter, query string builder, MIME type lookup. Parse schedules, convert curl commands, build URLs.',
    h1: 'Data & API utility tools online',
    subhead:
      'Parse cron schedules, convert curl commands, build query strings, look up MIME types. Utility tools for API development that run in your browser.',
    about:
      'These tools cover the utility tasks that come up constantly in API development and infrastructure work. Cron expression parsing turns cryptic schedules into plain English with next-run previews. The curl converter turns a DevTools-copied curl command into idiomatic fetch, Axios, or Python requests code in one click. The query string parser rounds out URL manipulation, and MIME lookup covers the Content-Type question that hits every file upload feature.',
    useCases: [
      'Parse a cron expression from a scheduler config to confirm the run time is correct',
      'Convert a curl command copied from browser DevTools into a JavaScript fetch snippet',
      'Debug a URL by splitting its query string into individual key-value pairs',
      'Find the correct MIME type for a file extension before setting a Content-Type header',
    ],
    faq: [
      {
        q: 'What cron syntaxes are supported?',
        a: 'The standard cron parser supports 5-field POSIX cron (minute, hour, day, month, weekday) with @yearly/@monthly/@weekly/@daily/@hourly shortcuts. For 6-field Quartz cron with seconds and L/W/# syntax, use the Quartz Cron tool in the Java category.',
      },
      {
        q: 'How many MIME types are in the lookup?',
        a: 'The lookup covers 500+ file types: all common image, video, audio, document, font, and application formats, plus many developer-specific extensions like .wasm, .jsonl, and .avif.',
      },
      {
        q: 'Does the curl converter handle authentication?',
        a: 'Yes. It parses -H "Authorization: ..." headers, -u user:pass basic auth, and bearer tokens, and includes them in the generated output for all supported languages.',
      },
    ],
  },

  java: {
    seoTitle: 'Java Developer Tools Online — whittly',
    seoDesc:
      'Free online Java tools. JSON→POJO, Maven↔Gradle, decompiler, stack trace analyzer, thread dump, bytecode viewer, cron parser. No IDE needed.',
    h1: 'Java developer tools online',
    subhead:
      'JSON to POJO, Maven↔Gradle, decompiler, stack trace colorizer, thread dump analyzer, bytecode viewer and more. No IDE required.',
    about:
      "Java's ecosystem is sprawling — build systems, config formats, bytecode, stack traces, dependency notation, and logging formats all have their own quirks. This collection handles the common Java-specific tasks without opening an IDE: generate POJOs from JSON, convert dependency declarations between Maven and Gradle DSL, decode JVM bytecode, analyze stack traces and thread dumps, test format strings, and more.",
    useCases: [
      'Generate Java records or Lombok classes from a JSON API response schema',
      'Convert Maven XML dependencies to Gradle Kotlin DSL when migrating a build',
      'Analyze a thread dump from a hung production JVM to identify the blocking thread',
      'Decompile a .class file from a third-party library to understand its behavior',
    ],
    faq: [
      {
        q: 'Which tools require the Pro plan?',
        a: 'The Java decompiler (Vineflower), Java formatter (google-java-format), and bytecode viewer (javap) run on our servers and require a Pro plan. All other Java tools — POJO generator, Maven↔Gradle converter, stack trace analyzer, thread dump, format string tester, and Quartz cron — run entirely in your browser.',
      },
      {
        q: 'What Java version do the browser tools target?',
        a: 'The POJO/record generator supports Java 16+ records and Lombok. The Maven↔Gradle converter handles all current dependency scopes and common BOM imports. The format string tester covers all java.util.Formatter patterns through Java 21.',
      },
      {
        q: 'How accurate is the decompiler output?',
        a: 'The decompiler is powered by Vineflower — the same engine used in IntelliJ IDEA. It produces high-quality output that closely resembles the original source, including try-with-resources, lambdas, and switch expressions.',
      },
    ],
  },
};

export const CAT_SEO_RU: Record<string, CatSeoContent> = {
  convert: {
    seoTitle: 'Онлайн-конвертеры для разработчиков — whittly',
    seoDesc:
      'Бесплатные онлайн-конвертеры: YAML↔JSON, CSV↔JSON, XML↔JSON, Markdown→HTML, цвета, единицы измерения, системы счисления. Работают в браузере.',
    h1: 'Онлайн-конвертеры для разработчиков',
    subhead:
      'Преобразование данных между форматами — YAML, JSON, CSV, XML, Markdown, цветовые пространства, системы счисления, единицы измерения. Всё в браузере.',
    about:
      'Конвертеры — это рабочие лошадки инструментального набора разработчика. Переформатировать ответ API, адаптировать конфиги между экосистемами, перевести единицы измерения в документации — все эти задачи решаются локально, без отправки данных на сервер. Каждый инструмент парсит ввод на каждом нажатии клавиши и обновляет вывод мгновенно.',
    useCases: [
      'Конвертировать YAML-ответы API в JSON для программной обработки',
      'Преобразовать CSV-экспорт в JSON-массивы для JavaScript-приложений',
      'Конвертировать Markdown-документацию в HTML для встраивания в CMS',
      'Перевести hex-значения цветов в HSL для CSS-переменных',
    ],
    faq: [
      {
        q: 'Есть ли ограничения по размеру файла?',
        a: 'Жёсткого лимита нет. Все конвертации происходят в памяти браузера. Практический предел — объём RAM, который может выделить вкладка браузера, обычно несколько сотен МБ.',
      },
      {
        q: 'Покидают ли данные браузер?',
        a: 'Нет. Каждый инструмент обрабатывает данные с помощью JavaScript-движка браузера. Сетевые запросы во время конвертации не выполняются.',
      },
      {
        q: 'Что происходит при некорректном вводе?',
        a: 'Каждый инструмент валидирует ввод и показывает ошибку inline. Вывод обновляется только когда ввод успешно парсится.',
      },
    ],
  },

  format: {
    seoTitle: 'Форматтеры и бьютификаторы кода онлайн — whittly',
    seoDesc:
      'Бесплатные онлайн-форматтеры: JSON, SQL, HTML, CSS, JavaScript. Форматирование минифицированного кода, валидация синтаксиса, минификация для продакшена.',
    h1: 'Форматтеры и бьютификаторы кода онлайн',
    subhead:
      'Форматирование JSON, SQL, HTML, CSS и JavaScript. Валидация синтаксиса и минификация для продакшена — всё в браузере.',
    about:
      'Форматтеры принимают минифицированный, автосгенерированный или непоследовательно оформленный код и применяют единый стиль. Это делает код читаемым, удобным для diff в системе контроля версий и простым для отладки. Все форматтеры работают на стороне клиента, поэтому можно безопасно вставлять продакшен-конфиги, внутренние запросы или проприетарный код.',
    useCases: [
      'Форматировать минифицированный ответ API перед вставкой в тикет или Slack',
      'Проверить JSON-конфиги перед коммитом в репозиторий',
      'Минифицировать CSS или JavaScript для продакшен-деплоя',
      'Отформатировать SQL-запросы из легаси-кодовой базы для удобочитаемости',
    ],
    faq: [
      {
        q: 'Можно ли безопасно форматировать продакшен-код?',
        a: 'Да. Всё форматирование выполняется в браузере — ничего не отправляется на сервер.',
      },
      {
        q: 'Валидирует ли форматтер синтаксис?',
        a: 'JSON-форматтер строго валидирует по спецификации JSON и указывает точную позицию ошибки. SQL и HTML-форматтеры парсят по принципу best-effort и выдают вывод даже при незначительных ошибках.',
      },
      {
        q: 'Можно ли и форматировать, и минифицировать?',
        a: 'Да. Форматтеры JSON, HTML и CSS включают режим минификации, который убирает пробелы и комментарии для получения минимального вывода для продакшена.',
      },
    ],
  },

  encode: {
    seoTitle: 'Кодирование, хеширование и крипто-инструменты онлайн — whittly',
    seoDesc:
      'Бесплатные инструменты кодирования: Base64, URL, SHA-хеши, JWT, bcrypt, hex, HTML-entities, SSL-сертификаты. Всё работает в браузере.',
    h1: 'Кодирование, хеширование и крипто-инструменты онлайн',
    subhead:
      'Base64, URL-кодирование, SHA-хеши, JWT-токены, bcrypt, hex, HTML-entities, SSL-сертификаты. Браузерные инструменты, данные не покидают устройство.',
    about:
      'Кодирование и хеширование — фундаментальные операции в веб-разработке. Отладить JWT, проверить bcrypt-хеш, закодировать параметр URL или инспектировать SSL-сертификат — все эти задачи решаются без установки ПО и без отправки чувствительных данных на сервер. Все крипто-операции используют нативный WebCrypto API браузера.',
    useCases: [
      'Декодировать JWT-токен, чтобы проверить claims и срок действия',
      'Хешировать пароль через bcrypt и сравнить с сохранённым хешем',
      'Закодировать бинарные данные в Base64 для встраивания в data URI',
      'Вычислить SHA-256 контрольную сумму для проверки целостности файла',
    ],
    faq: [
      {
        q: 'Отправляются ли данные на сервер?',
        a: 'Нет. Все инструменты используют нативные API браузера — WebCrypto для хеширования и подписи JWT, кастомный ASN.1/DER-парсер для SSL-сертификатов, TextEncoder/atob/btoa для кодирования. Ничего не покидает вкладку.',
      },
      {
        q: 'Можно ли использовать эти инструменты для продакшен-подписи ключей?',
        a: 'Для инспекции и разработки — идеально. Для продакшен-систем используйте серверное решение с правильным управлением ключами и аудитом.',
      },
      {
        q: 'bcrypt выполняется локально или на сервере?',
        a: 'Локально, через библиотеку bcryptjs, скомпилированную в WebAssembly. Пароль в открытом виде никогда не покидает браузер.',
      },
    ],
  },

  generate: {
    seoTitle: 'Онлайн-генераторы для разработчиков — whittly',
    seoDesc:
      'Бесплатные онлайн-генераторы: UUID v4/v7, NanoID, Lorem Ipsum, надёжные пароли, QR-коды. Криптографически безопасно. Без регистрации, в браузере.',
    h1: 'Генераторы для разработчиков онлайн',
    subhead:
      'Криптографически безопасные UUID, Lorem Ipsum, надёжные пароли и QR-коды — прямо в браузере.',
    about:
      'Генераторы создают структурированный вывод из ничего или из нескольких параметров. Каждый инструмент использует криптографический генератор случайных чисел браузера (crypto.getRandomValues) для мгновенных и непредсказуемых результатов. От UUID как уникальных идентификаторов в распределённых системах до QR-кодов, генерируемых полностью на JavaScript без внешних библиотек.',
    useCases: [
      'Сгенерировать пакет UUID v4 для новой миграции базы данных или сидинга',
      'Создать Lorem Ipsum абзацы для UI-макета или дизайн-прототипа',
      'Сгенерировать надёжный пароль с заданной длиной и набором символов',
      'Создать QR-код для сайта, vCard или Wi-Fi-учётных данных',
    ],
    faq: [
      {
        q: 'Действительно ли UUID уникальны?',
        a: 'UUID v4 генерирует 122 бита криптографической случайности через WebCrypto API. Вероятность коллизии при 1 миллиарде UUID — примерно 1 к 10^18, что практически невозможно.',
      },
      {
        q: 'Насколько безопасны сгенерированные пароли?',
        a: 'Пароли генерируются через crypto.getRandomValues() — тот же CSPRNG, который браузеры используют для TLS. Оценка энтропии показывает теоретические биты случайности: 64+ бит достаточно для большинства аккаунтов, 80+ для критических.',
      },
      {
        q: 'Справится ли генератор QR с длинными URL?',
        a: 'Генератор поддерживает версии 1–10, обрабатывающие до 174 байт при минимальном уровне коррекции ошибок. Для более длинного ввода сначала используйте сокращатель URL.',
      },
    ],
  },

  text: {
    seoTitle: 'Инструменты обработки текста и строк онлайн — whittly',
    seoDesc:
      'Бесплатные текстовые инструменты: regex-тестер, сравнение текстов, конвертер регистра, генератор slug, счётчик слов, инспектор строки. Браузерные.',
    h1: 'Инструменты для работы с текстом онлайн',
    subhead:
      'Сравнение текстов, regex, конвертация регистра, slug, счётчик слов, анализ Unicode. Браузерная обработка строк, данные не загружаются.',
    about:
      'Обработка текста — ежедневная задача каждого разработчика: сравнить два конфига, протестировать сложный regex, привести имена переменных к нужному стилю или посчитать символы для SEO-заголовка. Эти инструменты реализуют распространённые строковые операции в браузере с обновлением в реальном времени.',
    useCases: [
      'Сравнить две версии конфиг-файла и найти нежелательные отличия',
      'Протестировать сложный regex перед добавлением в продакшен-код',
      'Создать URL-безопасный slug из заголовка статьи с поддержкой кириллицы',
      'Посчитать слова и оценить время чтения для технической документации',
    ],
    faq: [
      {
        q: 'Какие синтаксисы regex поддерживаются?',
        a: 'Regex-тестер использует нативный JavaScript RegExp движок браузера (ECMAScript 2015+). Поддерживаются lookahead/lookbehind, именованные группы захвата и Unicode-свойства, но не PCRE-специфичные функции.',
      },
      {
        q: 'Можно ли сравнивать большие файлы?',
        a: 'Инструмент сравнения текстов комфортно обрабатывает тексты до нескольких сотен КБ. Для очень больших файлов (>1 МБ) быстрее использовать git diff в терминале.',
      },
      {
        q: 'Что показывает инспектор строки?',
        a: 'Длину в символах, байтовую длину в UTF-8, количество слов, уникальные символы, энтропию Шеннона (полезна для обнаружения зашифрованных строк) и таблицу частоты символов.',
      },
    ],
  },

  network: {
    seoTitle: 'Сетевые инструменты и калькуляторы онлайн — whittly',
    seoDesc:
      'Бесплатные сетевые инструменты: калькулятор CIDR/подсетей, справочник HTTP-кодов, DNS-lookup. IP-адресация, расчёт подсетей, протокол HTTP.',
    h1: 'Сетевые инструменты и калькуляторы онлайн',
    subhead:
      'Калькулятор CIDR и подсетей, справочник HTTP-кодов состояния и другие инструменты для работы с сетями и API.',
    about:
      'Сетевые инструменты помогают разработчикам рассуждать об IP-адресации, семантике HTTP-протокола и DNS-инфраструктуре. Калькулятор CIDR принимает любую CIDR-нотацию и выводит все свойства подсети: маску, диапазон, количество хостов, бинарное представление. Справочник HTTP-кодов охватывает все коды из RFC 7231 и более поздних RFC с практическими пояснениями.',
    useCases: [
      'Рассчитать диапазон хостов подсети /27 или /30 для планирования VPC',
      'Узнать значение кода 409, 422 или 503 при отладке API',
      'Проверить, находятся ли два IP-адреса в одной подсети',
      'Разобраться в разнице между 301 и 302, или 401 и 403',
    ],
    faq: [
      {
        q: 'Почему /24 даёт только 254 используемых хоста?',
        a: 'В любой подсети первый адрес (все хостовые биты равны нулю) — адрес сети, последний (все биты равны единице) — широковещательный. Ни тот ни другой не назначается хостам, поэтому /24 даёт 256 − 2 = 254 адреса.',
      },
      {
        q: 'Чем 4xx-ошибки отличаются от 5xx?',
        a: '4xx-ошибки указывают на проблему с запросом клиента — клиент отправил что-то, что сервер не может обработать. 5xx-ошибки — проблема на стороне сервера: он понял запрос, но не смог его выполнить.',
      },
      {
        q: 'Что такое CIDR-нотация?',
        a: 'CIDR (Classless Inter-Domain Routing) — запись IP-адреса вместе с длиной префикса маршрутизации: адрес, слэш и число битов сетевой части. Например, 192.168.1.0/24 означает, что первые 24 бита — сетевая часть, остальные 8 — хостовая.',
      },
    ],
  },

  image: {
    seoTitle: 'Онлайн-инструменты для изображений — WebP и SVG',
    seoDesc:
      'Бесплатные инструменты для изображений. Конвертация PNG, JPEG в WebP в браузере. Оптимизация SVG — комментарии, числа, атрибуты. Без загрузки на сервер.',
    h1: 'Инструменты для работы с изображениями онлайн',
    subhead:
      'Конвертация изображений в WebP и оптимизация SVG-файлов. Без загрузки — всё обрабатывается локально в браузере.',
    about:
      'Оптимизация изображений — одно из наиболее ощутимых улучшений производительности веб-проектов. Конвертация PNG и JPEG в WebP обычно сокращает размер файла на 25–35% при сопоставимом визуальном качестве, используя нативный Canvas API без сервера. Очистка SVG, экспортированных из Figma, Illustrator или Inkscape, удаляет метаданные редактора, избыточные атрибуты по умолчанию и лишние пробелы — нередко уменьшая файл на 20–60%.',
    useCases: [
      'Конвертировать изображения товаров в WebP перед загрузкой на сайт',
      'Оптимизировать SVG-иконки из Figma перед коммитом в репозиторий',
      'Сравнить уровни качества WebP, чтобы найти оптимальный баланс',
      'Убрать метаданные Inkscape или Illustrator из SVG для продакшен-CSS',
    ],
    faq: [
      {
        q: 'Покидают ли данные изображений браузер?',
        a: 'Нет. Конвертация изображений полностью выполняется через Canvas API браузера. Оптимизация SVG — это текстовая обработка на JavaScript. Ничего не загружается на серверы.',
      },
      {
        q: 'Когда стоит выбирать WebP, а не другие форматы?',
        a: 'WebP — лучший выбор по умолчанию для фотографий, скриншотов и UI-графики с широкой поддержкой браузеров (95%+ глобально). AVIF достигает лучшего сжатия, но поддерживается ~90% браузеров. Для логотипов, иконок и диаграмм используйте SVG.',
      },
      {
        q: 'Будет ли SVG выглядеть так же после оптимизации?',
        a: 'Да для всех стандартных проходов — удаление комментариев, DOCTYPE, метаданных, пустых атрибутов и сжатие пробелов визуально безопасны. Округление чисел (toPrecision 4) может дать субпиксельные отличия на очень точных путях.',
      },
    ],
  },

  data: {
    seoTitle: 'Утилиты для данных и API онлайн — whittly',
    seoDesc:
      'Бесплатные инструменты: парсер cron, конвертер curl, парсер query string, справочник MIME. Расписания, curl-команды, URL — всё в браузере.',
    h1: 'Утилиты для данных и API онлайн',
    subhead:
      'Расшифровка cron-расписаний, конвертация curl, парсер query string, справочник MIME. Браузерные утилиты для разработки API.',
    about:
      'Эти инструменты решают вспомогательные задачи, которые постоянно возникают при разработке API и работе с инфраструктурой. Парсер cron превращает криптичные расписания в понятный текст с предпросмотром следующих запусков. Конвертер curl одним кликом превращает скопированную curl-команду в fetch, Axios или Python requests. Парсер query string упрощает отладку URL, а справочник MIME решает вопрос Content-Type для функций загрузки файлов.',
    useCases: [
      'Расшифровать cron-выражение из конфига планировщика и проверить время запуска',
      'Конвертировать curl-команду из DevTools браузера в JavaScript fetch',
      'Отладить URL, разбив его query string на отдельные пары ключ-значение',
      'Найти правильный MIME-тип для расширения файла перед установкой Content-Type',
    ],
    faq: [
      {
        q: 'Какие синтаксисы cron поддерживаются?',
        a: 'Стандартный парсер поддерживает 5-польный POSIX cron (минута, час, день, месяц, день недели) и сокращения @yearly/@monthly/@weekly/@daily/@hourly. Для 6-польного Quartz cron с секундами и синтаксисом L/W/# используйте инструмент Quartz Cron в категории Java.',
      },
      {
        q: 'Сколько MIME-типов в справочнике?',
        a: 'Справочник охватывает 500+ типов файлов: все распространённые форматы изображений, видео, аудио, документов, шрифтов и приложений, плюс многие специфические для разработчиков расширения: .wasm, .jsonl, .avif.',
      },
      {
        q: 'Обрабатывает ли конвертер curl авторизацию?',
        a: 'Да. Парсит заголовки -H "Authorization: ...", базовую авторизацию -u user:pass и bearer-токены, включая их в сгенерированный код для всех поддерживаемых языков.',
      },
    ],
  },

  java: {
    seoTitle: 'Инструменты Java-разработчика онлайн — whittly',
    seoDesc:
      'Бесплатные Java-инструменты: JSON→POJO, Maven↔Gradle, декомпилятор, анализатор stack trace, thread dump, просмотрщик байткода. Без IDE.',
    h1: 'Инструменты Java-разработчика онлайн',
    subhead:
      'JSON в POJO, Maven↔Gradle, декомпилятор, раскраска stack trace, анализатор thread dump, просмотрщик байткода и другие. IDE не требуется.',
    about:
      'Экосистема Java обширна — системы сборки, форматы конфигурации, байткод, stack trace, нотация зависимостей, форматы логов — у всего свои особенности. Этот набор инструментов решает распространённые Java-задачи без открытия IDE: генерирует POJO из JSON, конвертирует зависимости между Maven и Gradle DSL, декодирует байткод JVM, анализирует stack trace и thread dump, тестирует format-строки.',
    useCases: [
      'Сгенерировать Java records или Lombok-классы из схемы JSON API',
      'Конвертировать Maven XML-зависимости в Gradle Kotlin DSL при миграции сборки',
      'Проанализировать thread dump зависшей JVM в продакшене и найти блокирующий тред',
      'Декомпилировать .class файл из сторонней библиотеки для понимания поведения',
    ],
    faq: [
      {
        q: 'Какие инструменты требуют Pro-план?',
        a: 'Декомпилятор (Vineflower), форматтер (google-java-format) и просмотрщик байткода (javap) работают на наших серверах и требуют Pro-план. Все остальные инструменты — генератор POJO, конвертер Maven↔Gradle, анализатор stack trace, thread dump, тестер format-строк и Quartz cron — работают полностью в браузере.',
      },
      {
        q: 'На какую версию Java ориентированы браузерные инструменты?',
        a: 'Генератор POJO/records поддерживает Java 16+ records и Lombok. Конвертер Maven↔Gradle обрабатывает все актуальные scopes и BOM-импорты. Тестер format-строк охватывает все паттерны java.util.Formatter вплоть до Java 21.',
      },
      {
        q: 'Насколько точен вывод декомпилятора?',
        a: 'Декомпилятор работает на базе Vineflower — того же движка, что используется в IntelliJ IDEA. Он выдаёт высококачественный вывод, близкий к исходному коду, включая try-with-resources, лямбды и switch-выражения.',
      },
    ],
  },
};
