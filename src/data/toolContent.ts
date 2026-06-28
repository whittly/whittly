export interface ToolContent {
  about: string;
  useCases: string[];
  faq: { q: string; a: string }[];
}

export const TOOL_CONTENT_EN: Record<string, ToolContent> = {
  'json-formatter': {
    about:
      'A JSON formatter instantly prettifies or minifies any JSON string and validates it against the JSON spec. It catches syntax errors — missing commas, unquoted keys, trailing commas — and reports the exact line and character where parsing failed.',
    useCases: [
      'Paste a minified API response to inspect its structure',
      'Validate JSON config files before committing to a repo',
      'Minify JSON payloads to reduce request size',
      'Spot typos in manually written JSON',
    ],
    faq: [
      {
        q: 'Why does my JSON fail validation?',
        a: 'JSON is strict: keys must be double-quoted strings, trailing commas are not allowed, and comments are not supported. The formatter will highlight the exact position of the error.',
      },
      {
        q: 'Is my data sent to a server?',
        a: 'No. All formatting and validation happens in your browser using the native JSON.parse API. Nothing leaves your tab.',
      },
    ],
  },

  base64: {
    about:
      'Base64 encoding converts binary or text data into a string of 64 printable ASCII characters, making it safe to include in URLs, HTML attributes, and JSON payloads. The decoder reverses the process, restoring the original bytes.',
    useCases: [
      'Encode images or fonts as data URIs for inline embedding',
      'Decode Base64-encoded JWT payloads to inspect claims',
      'Encode binary data for safe transmission over text-only protocols',
      'Use URL-safe mode to avoid + and / in query strings',
    ],
    faq: [
      {
        q: 'What is the difference between standard and URL-safe Base64?',
        a: 'Standard Base64 uses + and / which are reserved characters in URLs. URL-safe Base64 replaces them with - and _ and removes = padding, making the output safe for use in URLs without additional encoding.',
      },
      {
        q: 'Does Base64 encrypt data?',
        a: 'No. Base64 is encoding, not encryption. Anyone can decode it without a key. Never use Base64 to protect sensitive data — use proper encryption instead.',
      },
    ],
  },

  'jwt-decoder': {
    about:
      'A JWT (JSON Web Token) consists of three Base64URL-encoded parts: a header that specifies the algorithm, a payload that carries claims (user ID, roles, expiration), and a signature that proves the token was issued by a trusted party. This tool decodes all three parts without verifying the signature.',
    useCases: [
      'Inspect what claims an auth token contains',
      'Check token expiration (exp claim) without writing code',
      'Debug authentication issues in development',
      'Verify the algorithm used to sign a token',
    ],
    faq: [
      {
        q: 'Can this tool verify the JWT signature?',
        a: 'Client-side signature verification requires the secret key or public key, which you should never paste into a web tool. This tool decodes and displays the payload — signature verification should be done server-side with your auth library.',
      },
      {
        q: 'Why is the payload readable without a key?',
        a: 'JWT payloads are Base64URL-encoded, not encrypted. The signature only proves authenticity — it does not hide the contents. Never put sensitive data in a JWT payload if you are not encrypting the token (JWE).',
      },
    ],
  },

  'uuid-generator': {
    about:
      'UUIDs (Universally Unique Identifiers) are 128-bit identifiers designed to be unique across time and space without a central coordinator. v4 UUIDs are random, v7 UUIDs are time-ordered (better for database primary keys), and NanoID generates shorter URL-safe IDs.',
    useCases: [
      'Generate primary keys for database records',
      'Create idempotency keys for API requests',
      'Generate unique filenames for uploaded assets',
      'Create correlation IDs for distributed system tracing',
    ],
    faq: [
      {
        q: 'Should I use v4 or v7 for database IDs?',
        a: 'v7 is generally better for databases because it is time-ordered, which means new records are always inserted at the end of a B-tree index — avoiding page splits and fragmentation that occur with random v4 UUIDs.',
      },
      {
        q: 'How unique are UUIDs really?',
        a: 'A v4 UUID has 122 bits of randomness. The probability of generating two identical UUIDs is astronomically small — around 1 in 2^61 even after generating a billion UUIDs per second for a century.',
      },
    ],
  },

  'regex-tester': {
    about:
      'A regular expression (regex) is a pattern that describes a set of strings. This tester lets you write a pattern, choose flags (global, case-insensitive, multiline, dot-all), and see every match highlighted in the test string in real time — including capture group values.',
    useCases: [
      'Extract fields from log lines or CSV rows',
      'Validate email addresses, phone numbers, or postal codes',
      'Build search-and-replace patterns for a code editor',
      'Test regex patterns before adding them to production code',
    ],
    faq: [
      {
        q: 'What flags are supported?',
        a: 'g (global — find all matches), i (ignore case), m (multiline — ^ and $ match line boundaries), s (dot-all — . matches newlines). You can combine multiple flags.',
      },
      {
        q: 'Why does my regex cause the browser to freeze?',
        a: 'Some patterns cause catastrophic backtracking — exponential time complexity for certain inputs. Patterns like (a+)+ on a long non-matching string are common culprits. Simplify nested quantifiers or add a possessive quantifier if your engine supports it.',
      },
    ],
  },

  'cron-parser': {
    about:
      'A cron expression is a compact notation for recurring schedules used in Unix cron jobs, Kubernetes CronJobs, CI/CD pipelines, and task schedulers. This parser translates any expression into plain English and shows the next scheduled run times.',
    useCases: [
      'Verify a cron schedule before deploying a job',
      'Explain a cron expression to a non-technical teammate',
      'Find the next run time for a scheduled task',
      'Debug why a job runs more or less often than expected',
    ],
    faq: [
      {
        q: 'What format does this support?',
        a: 'Standard 5-field POSIX cron (minute hour day-of-month month day-of-week) and extended 6-field format with an optional seconds field at the start.',
      },
      {
        q: 'What does */5 mean?',
        a: '*/5 means "every 5 units" — in the minute field it means every 5 minutes. The * means "all values" and /5 means "step by 5". So */5 in minutes = 0, 5, 10, 15, ... 55.',
      },
    ],
  },

  'timestamp-converter': {
    about:
      'Unix timestamps count the seconds (or milliseconds) elapsed since January 1, 1970 00:00:00 UTC. They are timezone-independent and used in databases, APIs, and log files. This converter turns them into human-readable dates and converts dates back to timestamps.',
    useCases: [
      'Decode a timestamp from an API response or database field',
      'Find the timestamp for a specific date to use in a query',
      'Convert between UTC and local time',
      'Calculate the difference between two timestamps',
    ],
    faq: [
      {
        q: 'Milliseconds or seconds?',
        a: 'Unix timestamps are traditionally in seconds, but JavaScript (and many modern APIs) use milliseconds. A 13-digit number is milliseconds; a 10-digit number is seconds. The converter auto-detects the unit.',
      },
      {
        q: 'What is the Year 2038 problem?',
        a: '32-bit signed integers can only represent timestamps up to January 19, 2038. Modern systems use 64-bit integers, so this is largely solved — but old embedded systems may still be affected.',
      },
    ],
  },

  'url-encoder': {
    about:
      'URLs may only contain a limited set of ASCII characters. Percent-encoding (URL encoding) replaces unsafe characters with a % followed by two hex digits. This tool encodes and decodes individual URL components or full URLs.',
    useCases: [
      'Encode query parameter values that contain special characters',
      'Decode an encoded URL to read what it contains',
      'Encode a URL before including it as a value in another URL',
      'Fix "invalid URL" errors caused by unencoded spaces or brackets',
    ],
    faq: [
      {
        q: 'What is the difference between encodeURI and encodeURIComponent?',
        a: "encodeURIComponent encodes everything except letters, digits, and - _ . ! ~ * ' ( ). Use it for individual parameter values. encodeURI preserves characters that have meaning in a URL (/, ?, #, &, =) — use it for full URLs.",
      },
      {
        q: 'Why does a space become %20 sometimes and + other times?',
        a: '%20 is the standard percent-encoding for a space in any part of a URL. The + encoding for spaces is specific to the application/x-www-form-urlencoded format used in HTML forms.',
      },
    ],
  },

  'hash-generator': {
    about:
      'A cryptographic hash function maps data of any size to a fixed-length digest. SHA-256 produces a 64-character hex string; SHA-512 produces 128 characters. Hashes are one-way: you cannot recover the original input from the digest.',
    useCases: [
      'Verify a downloaded file has not been tampered with',
      'Generate a checksum before and after data migration',
      'Create deterministic identifiers from content',
      'Verify data integrity without storing the full payload',
    ],
    faq: [
      {
        q: 'Can I reverse a SHA hash?',
        a: 'No. SHA functions are one-way by design. You can only compare two hashes (of the same input they will always match). Brute-force lookup tables (rainbow tables) can crack weak passwords, which is why you should use bcrypt or Argon2 for password hashing, not SHA.',
      },
      {
        q: 'Is SHA-256 safe for passwords?',
        a: 'No. SHA-256 is too fast — modern GPUs can compute billions of SHA-256 hashes per second, making brute-force attacks feasible. Use bcrypt, Argon2, or PBKDF2 for password hashing — they are intentionally slow.',
      },
    ],
  },

  'password-generator': {
    about:
      "A strong password is long, random, and uses a diverse character set. This generator uses the browser's cryptographically secure random number generator (crypto.getRandomValues) to produce passwords that cannot be predicted even if an attacker knows the algorithm.",
    useCases: [
      'Generate a new password for a service that requires one',
      'Create an API key or secret token',
      'Generate a temporary password to share with a new user',
      'Create a passphrase for a key file or database',
    ],
    faq: [
      {
        q: 'How is the entropy score calculated?',
        a: 'Entropy (in bits) = log2(charset_size) × password_length. A 16-character password using all character types (~94 chars) has around 105 bits of entropy — effectively uncrackable with current hardware.',
      },
      {
        q: 'Is the generated password sent anywhere?',
        a: 'No. Passwords are generated using crypto.getRandomValues in your browser. Nothing is sent to any server. The source code is open for inspection on GitHub.',
      },
    ],
  },

  'slug-generator': {
    about:
      'A URL slug is the human-readable part of a URL path — lowercase, hyphen-separated, with no special characters. This tool converts any string, including Cyrillic and other non-ASCII text, into a valid URL slug via transliteration.',
    useCases: [
      'Generate URL slugs for blog post titles or product names',
      'Convert Russian or Ukrainian article titles to Latin slugs',
      'Create consistent IDs from user-provided text',
      'Normalize filenames for static site generators',
    ],
    faq: [
      {
        q: 'How does Cyrillic transliteration work?',
        a: 'Each Cyrillic character is mapped to its standard Latin phonetic equivalent (е → e, ж → zh, ш → sh, etc.). The result is a readable Latin slug that approximates the original pronunciation.',
      },
      {
        q: 'Are slugs case-sensitive in URLs?',
        a: 'HTTP technically allows case-sensitive paths, but best practice is to use all-lowercase slugs and redirect uppercase variants — this avoids duplicate content issues for search engines.',
      },
    ],
  },

  bcrypt: {
    about:
      'Bcrypt is an adaptive password hashing algorithm designed to remain slow as hardware improves. The cost factor (work factor) determines how many rounds of hashing are performed — doubling the cost factor doubles the computation time. This makes brute-force attacks progressively harder as hardware gets faster.',
    useCases: [
      'Hash a password before storing it in a database',
      "Verify a user's password against a stored hash",
      "Test the right cost factor for your server's hardware",
      'Understand bcrypt output format ($2a$, $2b$ prefixes)',
    ],
    faq: [
      {
        q: 'What cost factor should I use?',
        a: 'OWASP recommends a cost factor high enough that hashing takes at least 1 second on your production hardware. Cost 12 is a reasonable default for most servers in 2024. Higher is more secure but slower.',
      },
      {
        q: 'Why does the same password produce a different hash each time?',
        a: 'Bcrypt generates a random 128-bit salt for each hash. The salt is stored inside the hash string itself (the 22-character segment after the cost factor). This means two identical passwords produce different hashes, defeating precomputed rainbow table attacks.',
      },
    ],
  },

  'text-diff': {
    about:
      'A diff compares two texts and identifies which lines were added, removed, or unchanged. This tool performs a line-by-line comparison and highlights changes using the same green/red convention used by Git.',
    useCases: [
      'Compare two versions of a config file',
      'Review what changed between two API responses',
      'Check your edits before committing to version control',
      'Spot unintended changes in generated code',
    ],
    faq: [
      {
        q: 'What algorithm is used?',
        a: "The comparison uses the Myers diff algorithm — the same algorithm at the core of Git's diff engine. It produces the minimal edit script (fewest insertions and deletions) needed to transform one text into the other.",
      },
      {
        q: 'Is there a size limit?',
        a: 'The tool runs entirely in your browser. Very large inputs (hundreds of thousands of lines) may be slow, but there is no hard limit. No data is uploaded.',
      },
    ],
  },

  'case-normalizer': {
    about:
      'Different programming ecosystems use different naming conventions: JavaScript prefers camelCase, Python uses snake_case, CSS uses kebab-case, and constants use SCREAMING_SNAKE_CASE. This tool converts any text between all common conventions instantly.',
    useCases: [
      'Convert a Python variable name to a JavaScript camelCase name',
      'Transform API response keys from snake_case to camelCase',
      'Normalize database column names to match code conventions',
      'Convert a sentence to a constant name',
    ],
    faq: [
      {
        q: 'What conventions are supported?',
        a: 'camelCase, PascalCase (UpperCamelCase), snake_case, kebab-case, SCREAMING_SNAKE_CASE, dot.case, and Title Case.',
      },
      {
        q: 'How does the tool detect word boundaries?',
        a: 'Word boundaries are detected at: spaces, hyphens, underscores, dots, and transitions from lowercase to uppercase (for camelCase/PascalCase input).',
      },
    ],
  },

  'curl-converter': {
    about:
      'curl is the universal command-line HTTP client — developers use it to test APIs, share reproducible requests, and document API calls. This tool parses any curl command and converts it to the equivalent code in JavaScript fetch, Axios, Python requests, or HTTPie.',
    useCases: [
      'Copy a curl command from API docs and convert it to your language',
      'Share an API request with a teammate in their preferred language',
      'Convert browser DevTools "Copy as cURL" output to fetch',
      'Understand what headers and auth a curl command is sending',
    ],
    faq: [
      {
        q: 'What curl flags are supported?',
        a: '-X (method), -H (headers), -d / --data / --data-raw / --data-binary (body), -u (basic auth), -b (cookies), --url, -F (form data), --json, and all common no-value flags like -L, -s, -k.',
      },
      {
        q: 'Are multi-line curl commands supported?',
        a: 'Yes. Curl commands split across lines with backslash continuation (\\) are joined before parsing.',
      },
    ],
  },

  'query-string-parser': {
    about:
      'A query string is the part of a URL after the ? character, containing key=value pairs separated by &. This tool parses query strings into a readable table, lets you edit individual values, and rebuilds the encoded string.',
    useCases: [
      'Decode a complex query string from an API request',
      'Build a query string from known parameters',
      'Debug URL parameters in redirect chains',
      'Extract tracking parameters from marketing URLs',
    ],
    faq: [
      {
        q: 'Are duplicate keys supported?',
        a: 'Yes. Query strings can contain multiple values for the same key (e.g. ?tag=a&tag=b). The parser displays all values and preserves duplicates when rebuilding.',
      },
      {
        q: 'What about plus signs in query strings?',
        a: 'In application/x-www-form-urlencoded format, + represents a space. The parser decodes + as a space, matching how browsers submit HTML forms.',
      },
    ],
  },

  'xml-json': {
    about:
      'XML and JSON are both widely used data serialization formats. XML is common in SOAP APIs, configuration files, and document formats; JSON dominates REST APIs and JavaScript ecosystems. This tool converts between them while handling attributes, namespaces, and arrays.',
    useCases: [
      'Convert a SOAP API response to JSON for processing',
      'Transform a config file from XML to JSON format',
      'Convert RSS or Atom feeds to a JSON structure',
      'Migrate data between systems using different formats',
    ],
    faq: [
      {
        q: 'How are XML attributes handled?',
        a: 'XML attributes are converted to keys with an @ prefix in the JSON output (e.g. <tag id="1"> becomes {"tag": {"@id": "1"}}). This preserves all attribute information in the JSON representation.',
      },
      {
        q: 'What about XML namespaces?',
        a: 'Namespace prefixes are preserved as-is in key names. Full namespace URI resolution is not performed — the tool treats them as opaque prefixes.',
      },
    ],
  },

  'html-entity-encoder': {
    about:
      'HTML entities are escape sequences for characters that have special meaning in HTML (&, <, >, ", \'). Encoding user-provided content before inserting it into HTML prevents Cross-Site Scripting (XSS) attacks where malicious scripts are injected into web pages.',
    useCases: [
      'Escape user input before rendering it in HTML',
      'Decode HTML entities in scraped web content',
      'Prepare text content for safe inclusion in HTML attributes',
      'Debug encoded content in HTML source code',
    ],
    faq: [
      {
        q: 'Does encoding prevent XSS?',
        a: 'HTML entity encoding prevents XSS when output is placed in HTML text content and attributes. However, different contexts (JavaScript, CSS, URL) require different escaping strategies. This tool handles the HTML context.',
      },
      {
        q: 'What is the difference between &amp; and &#38;?',
        a: 'Both represent the & character. Named entities (&amp;) are more readable; numeric entities (&#38; decimal or &#x26; hex) work even when the named entity is not recognized.',
      },
    ],
  },

  'mime-lookup': {
    about:
      'MIME types (Media Types) tell browsers and servers what kind of data is in a file or HTTP response. Serving a file with the wrong Content-Type can cause browsers to refuse to render it, trigger security warnings, or misinterpret the data.',
    useCases: [
      'Find the correct Content-Type header for a file you are serving',
      'Check what MIME type a browser expects for a given extension',
      'Configure a web server to serve obscure file types correctly',
      'Verify that your API is returning the right Content-Type',
    ],
    faq: [
      {
        q: 'Why does the wrong MIME type matter?',
        a: 'Browsers use the Content-Type header (not the file extension) to decide how to process a response. Serving JavaScript as text/plain prevents execution; serving an SVG as image/jpeg prevents it from rendering. Incorrect MIME types also trigger browser MIME-sniffing, which can create security vulnerabilities.',
      },
      {
        q: 'What is application/octet-stream?',
        a: 'This is the generic binary MIME type. Browsers treat it as a file download. Use it as a fallback when the actual type is unknown, or when you want to force a download instead of in-browser rendering.',
      },
    ],
  },

  'number-base-converter': {
    about:
      'Computers operate in binary (base 2), but humans prefer decimal (base 10). Hexadecimal (base 16) is used in color codes, memory addresses, and character encodings. Octal (base 8) appears in Unix file permissions. This tool converts between any of these — or any custom base from 2 to 36.',
    useCases: [
      'Convert a hex color code to decimal RGB values',
      'Understand binary representations of integers',
      'Convert Unix file permission octal values',
      'Work with any numeric base in custom encoding schemes',
    ],
    faq: [
      {
        q: 'What is the maximum number supported?',
        a: 'The converter uses JavaScript BigInt for large numbers, so there is no practical upper limit. Numbers with hundreds of digits are supported.',
      },
      {
        q: 'Why do hex values use letters A–F?',
        a: 'Hexadecimal needs 16 distinct digits but the decimal system only has 10 (0–9). Letters A through F represent the values 10 through 15. This convention dates back to early computing and is now universal.',
      },
    ],
  },

  'string-inspector': {
    about:
      "Text is more complex than it appears — a string's byte length differs from its character count when it contains multi-byte Unicode characters (emoji, CJK characters, accented letters). Shannon entropy measures the information density of the string and can detect patterns or randomness.",
    useCases: [
      "Check if a string fits within a database column's byte limit",
      'Detect high-entropy (random) strings like tokens or passwords',
      'Analyze character distribution in text data',
      'Find invisible characters or zero-width spaces in a string',
    ],
    faq: [
      {
        q: 'Why is the byte count different from the character count?',
        a: 'UTF-8 encoding uses 1 byte for ASCII characters, 2 bytes for Latin Extended and Greek, 3 bytes for most CJK characters and emoji, and 4 bytes for supplementary emoji. A single emoji like 🔥 is 1 character but 4 bytes.',
      },
      {
        q: 'What is Shannon entropy?',
        a: 'Shannon entropy measures the average information per character. A string of all identical characters has 0 entropy. A random string of bytes has ~8 bits of entropy. Passwords should have high entropy; natural language text is typically around 4–5 bits per character.',
      },
    ],
  },

  'csv-json': {
    about:
      'CSV (Comma-Separated Values) is a universal tabular data format supported by every spreadsheet application and database. JSON is the standard format for APIs and JavaScript applications. This tool converts between them, handling quoted fields, escaped characters, and multiple delimiter types.',
    useCases: [
      'Convert a spreadsheet export to JSON for use in an app',
      'Transform an API response into a CSV for analysis in Excel',
      'Process data that uses semicolons or tabs as delimiters',
      'Quickly preview the structure of a CSV file as a JSON array',
    ],
    faq: [
      {
        q: 'What delimiters are supported?',
        a: 'Comma (,), semicolon (;), tab (\\t), and pipe (|). The tool auto-detects the delimiter by counting occurrences in the first line.',
      },
      {
        q: 'What about quoted fields containing commas?',
        a: 'The parser handles RFC 4180 quoting rules: fields wrapped in double quotes may contain commas, newlines, and escaped double quotes ("").',
      },
    ],
  },

  'json-java': {
    about:
      'Java POJOs (Plain Old Java Objects) are simple classes used to represent data. This tool generates Java class or record definitions from a JSON sample, inferring field types and names automatically. It supports Lombok @Data to eliminate boilerplate getters and setters, and Jackson annotations for JSON property mapping.',
    useCases: [
      'Quickly scaffold a data model from an API response',
      'Generate Java records (Java 16+) for immutable data transfer objects',
      'Add Jackson @JsonProperty annotations for snake_case JSON keys',
      'Add Lombok @Data to eliminate getter/setter boilerplate',
    ],
    faq: [
      {
        q: 'What is the difference between class and record?',
        a: 'Java records (introduced in Java 16) are immutable data carriers with auto-generated constructor, getters, equals, hashCode, and toString. Classes give you full control including mutable fields. Use records for DTOs and value objects; use classes when you need inheritance or mutable state.',
      },
      {
        q: 'Why does the generated code use List instead of arrays?',
        a: 'List<T> is preferred over arrays in modern Java because it is more flexible (resizable), integrates with the Collections API, and works better with Jackson deserialization.',
      },
    ],
  },

  'maven-gradle': {
    about:
      'Maven and Gradle are the two dominant build tools in the Java ecosystem. Maven uses XML pom.xml files; Gradle uses a Kotlin or Groovy DSL. This tool converts dependency declarations between the two formats, mapping Maven scopes (compile, test, provided, runtime) to their Gradle counterparts (implementation, testImplementation, compileOnly, runtimeOnly).',
    useCases: [
      'Migrate a Maven project to Gradle without manually rewriting dependencies',
      'Copy a dependency from Maven Central docs and convert it for Gradle',
      'Understand which Gradle configuration matches a Maven scope',
      'Convert a Gradle build back to Maven for a legacy project',
    ],
    faq: [
      {
        q: 'What is the difference between implementation and api in Gradle?',
        a: 'implementation hides the dependency from consumers of your library (compile classpath only). api exposes it (like Maven compile scope). Use implementation by default — it produces faster builds with better dependency isolation.',
      },
      {
        q: 'What happens to Maven <exclusions>?',
        a: 'Exclusions are not converted — they require manual handling. In Gradle, use exclude within the dependency block: implementation("group:artifact") { exclude group: "unwanted", module: "dep" }.',
      },
    ],
  },

  'quartz-cron': {
    about:
      'Quartz is a popular Java job scheduling library. Its cron format extends the standard Unix cron with a mandatory seconds field and special characters: L (last), W (nearest weekday), and # (nth occurrence). A Quartz expression has 6 required fields — seconds, minutes, hours, day-of-month, month, day-of-week — and an optional year field.',
    useCases: [
      'Decode a Quartz @Scheduled expression in a Spring Boot application',
      'Understand what 0 0 0 L * ? means (midnight on the last day of every month)',
      'Figure out the next run times for a Quartz job',
      'Use the L/W/# specials to schedule the last Friday or first Monday of the month',
    ],
    faq: [
      {
        q: 'How is Quartz cron different from standard Unix cron?',
        a: 'Quartz adds a mandatory seconds field at the beginning (Unix cron starts at minutes). Day-of-week numbering differs: Quartz uses 1=Sunday through 7=Saturday. Quartz also adds L (last), W (nearest weekday), and # (nth weekday) special characters. Finally, either day-of-month or day-of-week must be ? when the other is specified.',
      },
      {
        q: 'What does ? mean in Quartz cron?',
        a: '? means "no specific value" and is used to avoid conflicts between day-of-month and day-of-week. For example, 0 0 0 15 * ? fires on the 15th regardless of weekday. You cannot specify both a day-of-month and a day-of-week — use ? for the one you do not care about.',
      },
    ],
  },

  'lorem-ipsum': {
    about:
      'Lorem Ipsum is placeholder text derived from Cicero\'s "De Finibus Bonorum et Malorum" (45 BC). The classic opening — "Lorem ipsum dolor sit amet..." — has been the standard dummy text in typesetting since the 1500s. This generator produces random Latin-style placeholder text in four formats: paragraphs, individual sentences, word lists, and bullet lists, with an option to start with the canonical opening.',
    useCases: [
      'Fill UI mockups and wireframes with realistic-looking text before real content is ready',
      'Test font rendering, line-height, and layout behavior with multi-paragraph dummy content',
      'Generate placeholder copy for email templates, landing pages, and design handoffs',
      'Populate database seed scripts or test fixtures with varied text data',
    ],
    faq: [
      {
        q: 'What is "classic start"?',
        a: 'When enabled, the first paragraph or sentence always begins with the canonical "Lorem ipsum dolor sit amet..." opening. Subsequent items are randomly generated from the Lorem Ipsum word bank.',
      },
      {
        q: 'Is Lorem Ipsum actual Latin?',
        a: 'It is scrambled Latin derived from a passage by Cicero, deliberately altered so it has no readable meaning. The purpose is to provide neutral filler text that does not distract from layout evaluation.',
      },
    ],
  },

  'sql-formatter': {
    about:
      'A SQL formatter rewrites raw or minified SQL into consistently indented, keyword-uppercased statements. It breaks long queries into readable clauses — SELECT columns on separate lines, WHERE conditions aligned, JOIN chains clearly separated — making it easier to review query logic and spot mistakes.',
    useCases: [
      'Prettify a minified SQL query copied from application logs',
      'Normalize SQL from different developers to a consistent style before code review',
      'Quickly read a complex multi-join query by expanding it into readable form',
      'Minify SQL for embedding in config files or environment variables',
    ],
    faq: [
      {
        q: 'Which SQL dialects are supported?',
        a: 'The formatter handles standard SQL and most common dialects — MySQL, PostgreSQL, SQLite, SQL Server, and Oracle. Dialect-specific syntax like LIMIT/TOP, backtick identifiers, and square bracket quoting is all preserved correctly.',
      },
      {
        q: 'Is my query sent to a server?',
        a: 'No. All formatting happens entirely in your browser using a client-side parser. Nothing leaves your tab.',
      },
    ],
  },

  'html-formatter': {
    about:
      'An HTML formatter parses markup and re-serializes it with consistent indentation, making nested elements and their relationships immediately visible. It handles void elements (br, img, input), inline vs block elements, raw content blocks (script, style, pre), and HTML comments.',
    useCases: [
      'Unminify HTML from a web page source to inspect its structure',
      'Clean up HTML generated by a WYSIWYG editor or templating engine',
      'Minify HTML templates for production builds',
      'Review the nesting structure of a complex component or email template',
    ],
    faq: [
      {
        q: 'Does formatting change how the page renders?',
        a: 'For block elements, no — whitespace between block elements is ignored by browsers. For inline elements (span, a, em), adding whitespace can introduce small gaps. The formatter preserves inline elements on the same line to avoid this.',
      },
      {
        q: 'What happens to script and style tags?',
        a: 'The content inside script, style, and pre tags is treated as raw text and is not re-indented, since these elements have their own formatting rules. Only the opening and closing tags are repositioned.',
      },
    ],
  },

  'css-formatter': {
    about:
      'A CSS formatter takes minified or poorly formatted stylesheets and rewrites each rule with one property per line and consistent indentation. It handles nested @media and @keyframes blocks, preserves comments, and supports minification to strip all unnecessary whitespace.',
    useCases: [
      'Expand minified CSS from a CDN to understand what a class does',
      'Clean up CSS generated by a preprocessor or build tool',
      'Minify a stylesheet to reduce file size before deployment',
      'Review a third-party stylesheet before integrating it into a project',
    ],
    faq: [
      {
        q: 'Does the formatter sort CSS properties?',
        a: 'No — property order is preserved as-is. Sorting properties alphabetically or by category is a style preference that can cause unexpected cascade behavior if done without understanding the existing order.',
      },
      {
        q: 'Will it format CSS-in-JS or Sass/SCSS?',
        a: 'The formatter handles standard CSS syntax. CSS-in-JS template literals and Sass/SCSS features like nesting, variables ($var), and mixins (@include) are not supported and may produce unexpected output.',
      },
    ],
  },

  'js-beautifier': {
    about:
      'A JS beautifier takes minified or poorly formatted JavaScript and adds proper indentation, line breaks, and spacing. It preserves string literals, template literals, comments, and regex patterns exactly, only adjusting whitespace around statements and blocks.',
    useCases: [
      'Unminify a JavaScript bundle or library to understand its structure',
      'Read obfuscated JavaScript from a web page to see what it does',
      'Clean up auto-generated JavaScript before adding it to a project',
      'Quickly format a snippet before reviewing it in a pull request',
    ],
    faq: [
      {
        q: 'Why is the output not perfectly formatted?',
        a: 'Perfect JS formatting requires a full AST parser — tools like Prettier build a complete syntax tree before emitting output. This formatter uses a fast structural approach: it tracks braces, parens, and string boundaries without parsing the full grammar. For production codebases, use Prettier or ESLint.',
      },
      {
        q: 'Can it format TypeScript or JSX?',
        a: 'Basic TypeScript syntax (type annotations, interfaces) is handled. JSX tags (angle-bracket components) may not format correctly since they look like comparison operators to the formatter. For TypeScript and JSX, use the Prettier playground.',
      },
    ],
  },

  'java-decompiler': {
    about:
      'The Java decompiler takes a compiled .class or .jar file and reconstructs readable Java source code from it. It uses Vineflower on our servers — the same engine that powers IntelliJ IDEA — with full support for modern Java features: records, sealed classes, switch expressions, lambdas, and pattern matching. The output is syntax-highlighted Java code you can read, copy, or compare against the original.',
    useCases: [
      'Inspect a third-party library when source code is unavailable',
      'Understand what a compiled class actually does at runtime',
      'Recover source from a jar when the original repo is lost',
      'Check if a dependency contains unexpected or obfuscated code',
    ],
    faq: [
      {
        q: 'Does the decompiler run in my browser?',
        a: 'No — decompiling bytecode requires a JVM, which cannot run in a browser. The file is uploaded to our server, decompiled in memory by Vineflower, and the source is returned. The file is never stored or logged. This feature requires a Pro plan.',
      },
      {
        q: 'What Java versions are supported?',
        a: 'Vineflower supports Java 8 through Java 21+, including records, sealed classes, switch expressions, text blocks, and pattern matching. Very old class files (Java 1.1–1.4) are also handled.',
      },
    ],
  },

  'java-stack-trace': {
    about:
      'Java stack traces are dense walls of text mixing your own code with dozens of library frames from Spring, Hibernate, Netty, and the JDK itself. This tool parses the raw trace and renders it with syntax coloring: exceptions in red, Caused by chains in orange, your own frames highlighted, and library noise dimmed. The status bar shows the exception class and how many of the frames are your code.',
    useCases: [
      'Quickly spot which of your classes caused an exception among library noise',
      'Understand a multi-level Caused by chain in a single glance',
      'Share a clean, readable trace with a teammate in a PR comment',
      'Identify the root cause when a NullPointerException is buried under 60 Spring frames',
    ],
    faq: [
      {
        q: 'How does it decide which frames are "mine"?',
        a: 'Frames starting with known library prefixes — java.*, javax.*, org.springframework.*, org.hibernate.*, io.netty.*, kotlin.*, and 10+ more — are treated as library code and dimmed. Everything else is treated as your code and highlighted. The list covers the most common Java ecosystems.',
      },
      {
        q: 'Is the trace sent anywhere?',
        a: 'No. All parsing and coloring happens in your browser with JavaScript. Your stack traces, which often contain class and method names from internal code, never leave the tab.',
      },
    ],
  },

  'properties-yaml': {
    about:
      'Spring Boot accepts both application.properties and application.yml. Properties files use flat dotted keys (spring.datasource.url=…), while YAML uses indented nested maps. This converter handles both directions: dotted keys become nested YAML maps, indexed array keys (list[0]=x) become YAML sequences, and values that would confuse a YAML parser are automatically quoted.',
    useCases: [
      'Migrate a legacy application.properties to the more readable YAML format',
      'Convert a YAML snippet from documentation into properties format to merge with an existing file',
      'Understand how a deeply nested YAML key maps to its properties equivalent',
      'Quickly check that a properties key and its YAML counterpart are equivalent',
    ],
    faq: [
      {
        q: 'Are comments preserved?',
        a: 'Comments in .properties files (lines starting with #) are stripped during conversion because YAML comment placement cannot be reliably inferred from flat key order. Add comments manually after converting.',
      },
      {
        q: 'Does it support multi-document YAML or anchors?',
        a: 'No — only single-document YAML without anchors, aliases, or complex scalars. This covers 99% of Spring Boot application.yml files. For advanced YAML features, use a full YAML library.',
      },
    ],
  },

  'java-formatter': {
    about:
      'Java formatter runs your code through google-java-format on our servers — the same formatter used by Google, the Android Open Source Project, and most major Java projects. Choose Google style (2-space indent, strict column limit) or AOSP style (4-space indent, wider lines). The output is syntax-highlighted so you can review it before copying back.',
    useCases: [
      'Format a code snippet before pasting it into a PR comment or design doc',
      'Normalize indentation and brace style when merging code from different contributors',
      'Quickly check whether your IDE formatter is misconfigured by comparing its output',
      'Format generated code (from JSON→Java or protobuf output) before committing',
    ],
    faq: [
      {
        q: 'What is the difference between Google style and AOSP style?',
        a: 'Both are defined by google-java-format. Google style uses 2-space indentation and a 100-column line limit. AOSP (Android Open Source Project) style uses 4-space indentation and a 100-column line limit. If you are working on Android code, choose AOSP; otherwise Google style is the default.',
      },
      {
        q: 'Why does this require a Pro plan?',
        a: 'google-java-format is a JVM tool — it cannot run in a browser. The code is sent to our server, formatted in memory, and returned. The code is never stored or logged.',
      },
    ],
  },

  'java-format-string': {
    about:
      'Java has two string formatting systems: String.format (printf-style %s, %d, %f specifiers with flags, width, and precision) and MessageFormat ({0}, {1,number,currency} with type and style). This tool parses your format string, detects each placeholder, lets you supply values for each one, and shows the formatted output live.',
    useCases: [
      'Verify that a String.format call produces the expected output before shipping',
      'Figure out the right flags for zero-padded integers or comma-grouped numbers (%,d vs %05d)',
      'Test a MessageFormat pattern with different numeric values before using it in an i18n bundle',
      'Understand what %.2f vs %10.2f produces for a given float',
    ],
    faq: [
      {
        q: 'What is the difference between String.format and MessageFormat?',
        a: 'String.format uses C-style % specifiers (%s, %d, %f) and is the most common choice for single-language apps. MessageFormat uses {0}, {1} positional placeholders and adds type-aware formatting ({0,number,currency}, {0,date,short}) — it is designed for internationalized messages where argument order may differ between locales.',
      },
      {
        q: 'Is the preview 100% identical to Java output?',
        a: "It is very close for the most common specifiers. Locale-specific formatting (decimal separators, currency symbols) uses the browser's Intl API which may differ from the JVM's default locale. For production validation, test in your actual Java environment.",
      },
    ],
  },

  'bytecode-viewer': {
    about:
      'The Java bytecode viewer runs javap -verbose on your uploaded .class file and shows you the raw JVM instructions: constant pool entries, method descriptors, local variable tables, and every opcode with its operands. It is the same output you get running javap locally, available instantly in your browser without a local JDK installation.',
    useCases: [
      'Confirm that a compiler optimization (constant folding, inlining) actually happened',
      'Debug ClassFormatError or VerifyError by inspecting the bytecode directly',
      'Learn how Java constructs (lambdas, try-with-resources, switch expressions) translate to JVM opcodes',
      'Reverse-engineer the structure of a class file you cannot decompile cleanly',
    ],
    faq: [
      {
        q: 'What is the difference between bytecode viewer and the decompiler?',
        a: 'The decompiler reconstructs high-level Java source code from bytecode — readable but an approximation. The bytecode viewer shows the exact JVM instructions stored in the .class file: opcodes (invokevirtual, aload_0, etc.), the constant pool, and stack frame information. Use the decompiler to understand what code does; use bytecode viewer to understand exactly how the JVM executes it.',
      },
      {
        q: 'Why does this require a Pro plan?',
        a: 'javap is a command-line JDK tool that cannot run in a browser. The .class file is sent to our server, analysed in memory, and returned. The file is never stored or logged.',
      },
    ],
  },

  'jwt-sign': {
    about:
      'The JWT signer lets you create signed tokens using HS256 (HMAC-SHA-256), RS256 (RSA-SHA-256), or ES256 (ECDSA-P256-SHA-256) — all three algorithms from RFC 7518. Set any header and payload fields, enter your secret or private key, and get a ready-to-use signed token. Everything runs in your browser via the WebCrypto API; no keys or tokens leave your tab.',
    useCases: [
      'Create test tokens to feed into a protected API endpoint during development',
      'Generate a signed token with a specific expiry or custom claim to test your JWT validation logic',
      'Understand how signing works by tweaking the payload and watching the signature change',
      'Sign tokens with RS256 or ES256 using a locally generated key pair',
    ],
    faq: [
      {
        q: 'Which algorithms are supported?',
        a: 'HS256 (HMAC-SHA-256) with a shared secret, RS256 (RSA-PKCS1v1.5-SHA-256) with a PEM private key, and ES256 (ECDSA-P256-SHA-256) with a PEM EC private key. These cover the vast majority of real-world JWT deployments.',
      },
      {
        q: 'Is my key sent to your server?',
        a: 'No. Signing uses the WebCrypto API built into your browser. Your secret or private key never leaves the tab.',
      },
    ],
  },

  'ssl-cert-inspector': {
    about:
      'The SSL certificate inspector parses PEM-encoded X.509 certificates directly in your browser. Paste a certificate (the block between -----BEGIN CERTIFICATE----- and -----END CERTIFICATE-----) and instantly see the subject, issuer, validity period, Subject Alternative Names (SANs), signature algorithm, and SHA-256 fingerprint — no extension or server needed.',
    useCases: [
      'Quickly check the expiry date and issuer of a certificate you copied from a server',
      'Verify the SANs on a multi-domain or wildcard certificate before deploying',
      'Compare the fingerprint of a certificate from two different sources to confirm they match',
      'Debug certificate chain issues by inspecting each PEM block in the chain',
    ],
    faq: [
      {
        q: 'What format does this accept?',
        a: 'PEM-encoded X.509 certificates — the text block starting with -----BEGIN CERTIFICATE-----. You can export a certificate from most browsers (Developer Tools → Security → View certificate → Export) or extract it with openssl s_client -connect host:443 -showcerts.',
      },
      {
        q: 'Is the certificate sent to your server?',
        a: 'No. The PEM data is parsed entirely in your browser using the Web Crypto API and custom ASN.1/DER parsing. Nothing is sent over the network.',
      },
    ],
  },

  'word-counter': {
    about:
      'The word counter analyses the text you type and tracks seven statistics in real time: total characters, characters excluding spaces, word count, line count, sentence count, paragraph count, and estimated reading time at an average 200 words per minute. All processing happens in your browser without any network requests.',
    useCases: [
      'Check that a blog post or article meets a target word count before publishing',
      'Verify that a meta description or tweet stays within the character limit',
      'Estimate how long a script or presentation will take to read aloud',
      'Count lines in a log snippet or config file without opening a terminal',
    ],
    faq: [
      {
        q: 'How is "word" defined?',
        a: 'A word is any sequence of non-whitespace characters separated by whitespace. Hyphenated compounds (e.g. "well-known") count as one word.',
      },
      {
        q: 'How is reading time calculated?',
        a: 'The estimate uses 200 words per minute, which is a typical silent reading speed for adults. Actual speed varies by reader and content complexity.',
      },
    ],
  },

  'hex-encoder': {
    about:
      'The hex encoder converts text to its hexadecimal byte representation using the TextEncoder API, defaulting to UTF-8. Each byte becomes a two-character hex pair. The decoder reverses the process, reading pairs of hex digits and converting them back to the original string. Options let you control the byte separator and letter case.',
    useCases: [
      'Inspect the raw UTF-8 byte sequence of a string containing Unicode or emoji',
      'Prepare hex-encoded data for low-level protocols or binary file headers',
      'Decode a hex dump from a network trace or memory inspector',
      'Verify how many bytes a specific Unicode character occupies in UTF-8',
    ],
    faq: [
      {
        q: 'What encoding does this use?',
        a: 'UTF-8 by default, which encodes ASCII characters as one byte and most other Unicode characters as two to four bytes. The byte count shown will differ from the character count for non-ASCII input.',
      },
      {
        q: 'What separator should I use?',
        a: 'Space-separated ("48 65 6c 6c 6f") is the most readable format and matches most hex dump tools. No separator is useful when you need a compact hex string for embedding in code.',
      },
    ],
  },

  'http-status': {
    about:
      'HTTP status codes are three-digit integers returned by a server to indicate the result of a client request. They are grouped into five classes: 1xx (informational), 2xx (success), 3xx (redirection), 4xx (client error), and 5xx (server error). This reference covers all codes defined in RFC 7231 and later RFCs, with plain-English explanations and common causes.',
    useCases: [
      'Look up what a specific status code means while debugging an API response',
      'Understand the difference between 301 and 302, or 401 and 403',
      'Identify which error class a code belongs to at a glance',
      'Check the meaning of less common codes like 409, 422, or 429',
    ],
    faq: [
      {
        q: 'What is the difference between 401 and 403?',
        a: '401 Unauthorized means the request lacks valid authentication credentials — the client should log in. 403 Forbidden means the server understood the request and knows who you are, but refuses to authorize the action.',
      },
      {
        q: 'What is the difference between 301 and 302?',
        a: '301 Moved Permanently signals that the resource has been moved forever — browsers and search engines update their records. 302 Found is a temporary redirect; the original URL remains canonical.',
      },
    ],
  },

  'unit-converter': {
    about:
      'The unit converter supports eight measurement categories: length, weight, temperature, digital data, area, volume, speed, and time. All conversions go through a single base unit per category, so adding a new unit never requires updating existing pairs. Temperature conversions use Kelvin as the intermediate to correctly handle the non-linear Celsius ↔ Fahrenheit relationship.',
    useCases: [
      'Convert kilometres to miles when reading international documentation',
      'Check the equivalent of a storage size in bytes, megabytes, and gibibytes',
      'Convert Celsius to Fahrenheit for a weather API that uses imperial units',
      'Convert knots to km/h when reading maritime or aviation data',
    ],
    faq: [
      {
        q: 'What is the difference between MB and MiB?',
        a: 'MB (megabyte) is 1,000,000 bytes in SI units used by storage manufacturers. MiB (mebibyte) is 1,048,576 bytes (2²⁰) used by operating systems. This is why a "500 GB" hard drive shows as ~465 GiB in Windows.',
      },
      {
        q: 'Why does temperature conversion look different?',
        a: 'Unlike other units, Celsius and Fahrenheit scales do not start at the same zero point. All temperature conversions go through Kelvin (absolute zero) as an intermediate to handle the offset correctly.',
      },
    ],
  },

  'color-converter': {
    about:
      'The color converter accepts any common color format — hex triplets, rgb() and rgba() CSS functions, hsl() and hsla(), oklch(), and named CSS colors — and instantly shows the equivalent representation in all five formats: HEX, RGB, HSL, OKLCH, and CIELab. The OKLCH and Lab values are computed through a full sRGB → linear → XYZ → OKLab pipeline.',
    useCases: [
      'Convert a design token from HEX to HSL for use in a CSS custom property',
      'Inspect the OKLCH lightness and chroma of a brand color for accessibility work',
      'Convert a named CSS color like "cornflowerblue" to its hex value',
      'Get the Lab coordinates of a color for perceptual uniformity checks',
    ],
    faq: [
      {
        q: 'What is OKLCH and why should I use it?',
        a: 'OKLCH is a perceptually uniform color space where equal numeric steps produce equally perceived changes in lightness, chroma, and hue. It is supported natively in CSS (color: oklch(60% 0.15 240)) and is useful for creating consistent color scales and accessible palettes.',
      },
      {
        q: 'What formats are accepted as input?',
        a: 'HEX (#rgb, #rrggbb, #rrggbbaa), CSS rgb()/rgba(), CSS hsl()/hsla(), CSS oklch(), and any named CSS color (red, cornflowerblue, etc.). The tool auto-detects the format — just type or paste and it will parse on every keystroke.',
      },
    ],
  },

  'image-webp': {
    about:
      'WebP is a modern image format developed by Google that achieves significantly smaller file sizes than JPEG and PNG at comparable visual quality. This tool converts images to WebP entirely in your browser using the Canvas API — no files are sent to any server. A quality slider controls the lossy compression level, and a side-by-side canvas shows the original versus the converted result.',
    useCases: [
      'Optimise hero images and product photos before uploading to a website',
      'Compare WebP quality levels to find the best size-to-quality tradeoff',
      'Convert screenshots to WebP for use in documentation or blog posts',
      'Batch-check how much file size WebP would save for a set of images',
    ],
    faq: [
      {
        q: 'Does the original file leave my device?',
        a: 'No. The conversion is done entirely in your browser using the HTML Canvas API. The image is read locally, drawn to a canvas, and exported as a WebP blob — no network request is made at any point.',
      },
      {
        q: 'Which source formats are supported?',
        a: "Any format your browser can decode: JPEG, PNG, GIF (first frame), BMP, AVIF, and WebP itself. HEIC/HEIF is not universally supported — it depends on the browser and OS. If the image doesn't load, try converting it to PNG first.",
      },
    ],
  },

  'cidr-calculator': {
    about:
      'CIDR (Classless Inter-Domain Routing) notation expresses an IP address and its subnet mask as a single string, e.g. 192.168.1.0/24. Given a CIDR block, this calculator derives the network address, broadcast address, first and last usable host, subnet mask, wildcard mask, prefix length, total and usable host count, IP class, address type (private/loopback/link-local/public), and the full binary representation with network and host bits highlighted.',
    useCases: [
      'Verify that two IP addresses fall in the same subnet before setting up routing',
      'Calculate how many hosts a /27 or /30 subnet can accommodate',
      'Plan VPC or cloud network address ranges before deployment',
      'Understand the binary breakdown of a subnet mask for a networking exam',
    ],
    faq: [
      {
        q: 'What is the difference between network hosts and usable hosts?',
        a: 'In any subnet, the first address is the network address and the last is the broadcast address. Neither can be assigned to a host. So a /24 has 256 total addresses but only 254 usable host addresses.',
      },
      {
        q: 'What does the wildcard mask represent?',
        a: 'The wildcard mask is the bitwise inverse of the subnet mask. It is used in access control lists (ACLs) and OSPF configurations to specify which bits of an address are significant. For a /24 subnet mask (255.255.255.0), the wildcard is 0.0.0.255.',
      },
    ],
  },

  'markdown-html': {
    about:
      'The Markdown to HTML converter implements GitHub Flavored Markdown (GFM) in a custom parser written in pure JavaScript. It supports headings (ATX and Setext), bold, italic, strikethrough, inline and fenced code blocks, ordered and unordered lists, task lists, blockquotes, tables, horizontal rules, images, and links. The preview tab renders the HTML and the source tab shows the raw output.',
    useCases: [
      'Preview how a README.md will look before pushing it to GitHub',
      'Convert documentation written in Markdown to HTML for embedding in a CMS',
      'Test GFM table syntax to get the column alignment right',
      'Inspect the generated HTML to understand how a Markdown element is rendered',
    ],
    faq: [
      {
        q: "Is this exactly the same as GitHub's renderer?",
        a: 'Very close for common elements. GFM has some edge cases in list nesting and tight vs. loose list handling that differ slightly between implementations. For pixel-perfect parity with GitHub, use their Markdown REST API.',
      },
      {
        q: 'Is the HTML sanitised?',
        a: 'The converter does not sanitise the output. If you paste Markdown that contains raw HTML, that HTML will appear in the output. Do not inject this output directly into a page without sanitising it first if the Markdown source is untrusted.',
      },
    ],
  },

  'yaml-json': {
    about:
      'The YAML ↔ JSON converter automatically detects whether the input is YAML or JSON and converts it to the other format. The YAML parser is implemented from scratch and handles block and flow mappings, block and flow sequences, all scalar types (string, integer, float, boolean, null), multi-line block scalars (| and >), quoted strings, and comments. Converting from JSON produces clean, indented YAML.',
    useCases: [
      'Convert a docker-compose.yml or Kubernetes manifest to JSON for programmatic processing',
      'Convert a JSON API response to YAML for more readable diffing or documentation',
      'Validate YAML syntax when a config file fails to parse in CI',
      'Strip YAML comments by converting to JSON and back',
    ],
    faq: [
      {
        q: 'Are YAML comments preserved?',
        a: 'Comments are stripped during parsing because JSON has no concept of comments. If you need to keep comments, consider editing the YAML source directly.',
      },
      {
        q: 'What YAML features are supported?',
        a: 'Block and flow mappings and sequences, all scalar types including multi-line literals (| and >), quoted strings, anchors and aliases, and comments. YAML merge keys (<<: *anchor) are not supported.',
      },
    ],
  },

  'qr-code': {
    about:
      'This QR code generator implements the full QR Code Model 2 specification in pure JavaScript — no external libraries or CDN dependencies. It supports versions 1 through 10 (up to 174 characters) in byte mode, all four error correction levels (L 7%, M 15%, Q 25%, H 30%), Reed-Solomon encoding over GF(256), all 8 mask patterns with the official penalty scoring system, and format information encoding. Output is available as SVG (vector, any size) or PNG (copied to clipboard).',
    useCases: [
      'Generate a QR code for a URL to include in a presentation or printed material',
      'Create a QR code for a Wi-Fi SSID and password to share with guests',
      'Test how different error correction levels affect QR code density',
      'Generate a QR code that links to a vCard or calendar event',
    ],
    faq: [
      {
        q: 'What is the maximum text length?',
        a: 'This tool generates versions 1–10. At version 10 with L (low) error correction, the limit is 174 bytes. Higher versions support more data but produce denser codes that are harder for older scanners to read. For URLs, keep them short.',
      },
      {
        q: 'Which error correction level should I choose?',
        a: 'L (7%) produces the smallest code and is fine for clean digital displays. M (15%) is a good general-purpose default. Q (25%) or H (30%) are useful when the QR code will be printed on a surface that may get partially damaged or obscured.',
      },
    ],
  },

  'svg-optimizer': {
    about:
      'SVG files exported from design tools like Figma, Illustrator, or Inkscape often contain significant bloat: XML declarations, DOCTYPE, editor metadata, empty attributes, redundant default values, long decimal coordinates, and excess whitespace. This tool applies up to eight configurable optimisation passes entirely in your browser and shows the exact byte reduction.',
    useCases: [
      'Reduce SVG icon file size before bundling them into a web app',
      'Clean up Figma or Illustrator SVG exports before committing to a repo',
      'Remove metadata and comments from SVGs used in production CSS',
      'Inspect the size impact of each individual optimisation pass',
    ],
    faq: [
      {
        q: 'Is this the same as SVGO?',
        a: 'No. SVGO is a Node.js tool that applies a much larger set of transformations including path merging, shape conversion, and transform collapsing. This tool performs simpler text-level and attribute-level passes that are safe and reversible. For production pipelines, SVGO or svgomg is recommended.',
      },
      {
        q: 'Will the SVG still render correctly after optimisation?',
        a: 'Yes for the default passes. Removing comments, DOCTYPE, XML declarations, title/desc/metadata, empty attributes, and collapsing whitespace are all visually lossless. The "round decimals" pass (toPrecision 4) may cause sub-pixel differences on very precise paths.',
      },
    ],
  },

  'thread-dump-analyzer': {
    about:
      "A Java thread dump is a snapshot of all thread states in a JVM process at a given moment, produced by jstack, kill -3, or JConsole. It captures each thread's name, OS thread ID, Java state (RUNNABLE, BLOCKED, WAITING, TIMED_WAITING), full stack trace, and any monitor locks it holds or waits for. This tool parses raw jstack output into a structured view with state summaries, deadlock detection, and blocking chain analysis.",
    useCases: [
      'Diagnose a deadlocked production JVM by identifying the circular lock dependency between threads',
      'Find threads stuck in BLOCKED state to locate contention bottlenecks around synchronized blocks',
      'Identify CPU-consuming threads by correlating RUNNABLE threads with top -H output',
      'Compare thread counts before and after a load spike to detect thread pool saturation or leaks',
    ],
    faq: [
      {
        q: 'How do I generate a thread dump?',
        a: 'Run jstack <pid> in a terminal, or press Ctrl+Break on Windows JVMs. In containers, use kubectl exec <pod> -- jstack 1. You can also trigger a dump via JMX, VisualVM, or by sending SIGQUIT to the Java process.',
      },
      {
        q: 'What is the difference between BLOCKED and WAITING?',
        a: 'BLOCKED means a thread is waiting to acquire a monitor lock (synchronized block) currently held by another thread. WAITING or TIMED_WAITING means a thread is voluntarily suspended via Object.wait(), Thread.sleep(), or LockSupport.park() — it is not competing for a lock.',
      },
      {
        q: 'Can I detect deadlocks?',
        a: 'Yes. The analyzer identifies deadlock cycles automatically — threads that each hold a lock the other needs. The raw jstack output also includes a "Found one Java-level deadlock" section when a deadlock is present.',
      },
    ],
  },

  'json-typescript': {
    about:
      'This tool infers TypeScript interface definitions from a JSON sample. It inspects every key, determines the most specific type for each value (string, number, boolean, null, array, or nested object), and generates clean TypeScript interfaces with proper nesting. Arrays are analyzed element-by-element and produce union types when elements have varying shapes.',
    useCases: [
      'Generate TypeScript types for a REST API response copied from browser DevTools Network tab',
      "Scaffold model interfaces from a Prisma or Mongoose schema's sample document",
      'Type an external SDK payload that ships without type definitions',
      "Quickly type a configuration file's JSON shape to enable editor autocomplete",
    ],
    faq: [
      {
        q: 'Does it handle nested objects?',
        a: 'Yes. Nested objects produce separate named interfaces (e.g. interface Address { ... }) referenced by the parent. The tool names nested types from the key name, capitalised.',
      },
      {
        q: 'What happens with mixed-type arrays?',
        a: 'If an array contains elements of different types, the tool produces a union type: (string | number)[]. Empty arrays produce unknown[].',
      },
      {
        q: 'Does it handle null and optional fields?',
        a: 'Null values produce type | null. Fields are marked optional (?) when needed. For truly optional fields, paste a representative sample and adjust the output manually.',
      },
    ],
  },

  'json-diff': {
    about:
      'JSON Diff performs a deep structural comparison between two JSON objects and reports every change as an added key (+), removed key (−), or changed value (~). The diff walks nested objects and arrays recursively, reporting paths in dot-notation (user.address.city) so you can pinpoint exactly what changed at any depth. Everything runs in your browser — no JSON leaves your machine.',
    useCases: [
      'Compare two API responses to find exactly which fields changed between versions',
      'Audit configuration drift between a staging and production JSON config',
      'Debug a serialization bug by comparing the before and after snapshots of an object',
      'Validate that a migration script transformed data correctly by diffing sample rows',
    ],
    faq: [
      {
        q: 'Does it diff arrays element-by-element?',
        a: 'Yes. Array elements are compared by index. If an element was inserted or removed, all subsequent indices shift and appear as changes. For large arrays this can produce verbose output — consider comparing specific slices.',
      },
      {
        q: 'What does the path notation mean?',
        a: 'Paths use dot notation for object keys (a.b.c) and bracket notation for array indices (items[2].name). The full path tells you exactly where in the nested structure the change occurred.',
      },
      {
        q: 'Are nested objects expanded?',
        a: 'Yes. If an object value changes, the diff recurses into it and reports individual field changes rather than showing the whole object as changed. Only primitive values (string, number, boolean, null) are shown as leaf-level diffs.',
      },
    ],
  },

  'chmod-calculator': {
    about:
      'Unix file permissions are stored as a 9-bit mask split into three groups — owner, group, and others — each with three bits for read (4), write (2), and execute (1). Adding the bits gives a single octal digit per group, producing the familiar three-digit notation like 755 or 644. This tool lets you toggle permissions via checkboxes or type an octal value directly, with both representations always in sync.',
    useCases: [
      'Generate the exact chmod command needed before running it on a server',
      'Decode an octal permission string from ls -l output into human-readable rights',
      'Set secure defaults for web server files (644 for files, 755 for directories)',
      'Explain Unix permission concepts when onboarding junior developers',
    ],
    faq: [
      {
        q: 'What does the execute bit mean on a directory?',
        a: 'On a directory, the execute bit controls whether a user can enter (cd into) the directory and access its contents. Without it, even a directory with read permission will refuse to list files if execute is missing.',
      },
      {
        q: 'What is the difference between 755 and 777?',
        a: '755 gives the owner full access (rwx) and everyone else read+execute (r-x) — the standard for executables and directories. 777 gives everyone full write access, which is a security risk and rarely the right choice on shared systems.',
      },
      {
        q: 'Why does chmod 644 use three digits, not four?',
        a: 'chmod accepts 3- or 4-digit octal. The optional leading digit controls special bits: setuid (4), setgid (2), and sticky (1). Most files only need the three permission digits. The calculator shows the three-digit form used in everyday practice.',
      },
    ],
  },

  'url-parser': {
    about:
      "Every URL is a structured string following RFC 3986, composed of a scheme (https), authority (host + optional port), path, query string, and fragment. This tool uses the browser's native URL API to parse any valid URL into its components and displays all query parameters in a key/value table. The parsed URL is always reconstructed and shown as the canonical form.",
    useCases: [
      'Inspect OAuth redirect URIs to verify that all required parameters are present',
      'Debug a failing API call by checking whether the query string is encoded correctly',
      'Extract the hostname from a list of full URLs for domain analysis',
      'Understand the structure of a complex URL with many nested query parameters',
    ],
    faq: [
      {
        q: 'Does it handle URLs without a scheme?',
        a: 'Yes. If you paste a URL without https:// the tool automatically prepends it for parsing. The displayed scheme will then reflect the added prefix. Paste the full URL to see the exact original scheme.',
      },
      {
        q: 'Are percent-encoded characters decoded?',
        a: 'Query parameter values are shown decoded (e.g. %20 → space). The raw encoded form is visible in the search field row. This mirrors how browsers and servers interpret the values in practice.',
      },
      {
        q: 'What is the origin?',
        a: "The origin is the combination of scheme + host + port: https://example.com:8443. It is the security boundary used by the browser's same-origin policy. Two URLs with the same origin can share cookies and make cross-frame calls freely.",
      },
    ],
  },

  'env-json': {
    about:
      '.env files store environment variables as KEY=VALUE pairs, one per line. Lines starting with # are comments and blank lines are ignored. Values can optionally be wrapped in single or double quotes. This tool converts between .env text and JSON objects in both directions — useful for comparing environment configs, migrating to a secrets manager that speaks JSON, or seeding a local env from a JSON export.',
    useCases: [
      'Convert a .env file exported from Vercel or Render into a JSON object for programmatic use',
      'Seed a Docker Compose environment block by converting a JSON secrets export to .env format',
      'Compare two .env files by converting both to JSON and using a diff tool',
      'Generate a .env template from a JSON schema by converting example values',
    ],
    faq: [
      {
        q: 'Are comments preserved in .env → JSON conversion?',
        a: 'No. Comments (lines starting with #) and blank lines are skipped during parsing — JSON has no comment syntax. In the reverse direction (JSON → .env) no comments are added either, since the tool only knows key/value pairs.',
      },
      {
        q: 'What happens to quoted values?',
        a: 'Both single-quoted and double-quoted values are unquoted during parsing: KEY="hello world" becomes {"KEY": "hello world"}. In the reverse direction, values containing spaces, # or = characters are automatically re-quoted with double quotes.',
      },
      {
        q: 'Does it support multi-line values?',
        a: 'No. Each line is treated as an independent key=value pair. Multi-line values (using escaped newlines or quoted newlines) are a non-standard extension not supported here. Flatten multi-line values to a single line before converting.',
      },
    ],
  },
};

export const TOOL_CONTENT_RU: Record<string, ToolContent> = {
  'json-formatter': {
    about:
      'JSON-форматтер мгновенно форматирует или минифицирует любую JSON-строку и проверяет её на соответствие стандарту. Инструмент находит синтаксические ошибки — пропущенные запятые, незакавыченные ключи, лишние запятые в конце — и указывает точную позицию ошибки.',
    useCases: [
      'Вставить минифицированный ответ API и изучить его структуру',
      'Проверить JSON-конфиги перед коммитом в репозиторий',
      'Минифицировать JSON-данные для уменьшения размера запроса',
      'Найти опечатки в JSON написанном вручную',
    ],
    faq: [
      {
        q: 'Почему мой JSON не проходит валидацию?',
        a: 'JSON строг: ключи должны быть строками в двойных кавычках, лишние запятые в конце не допускаются, комментарии не поддерживаются. Форматтер укажет точную позицию ошибки.',
      },
      {
        q: 'Данные отправляются на сервер?',
        a: 'Нет. Форматирование и валидация происходят в браузере через нативный JSON.parse. Ничего не покидает вкладку.',
      },
    ],
  },

  base64: {
    about:
      'Base64-кодирование преобразует бинарные или текстовые данные в строку из 64 печатаемых ASCII-символов, что позволяет безопасно передавать их в URL, HTML-атрибутах и JSON. Декодер выполняет обратное преобразование.',
    useCases: [
      'Закодировать изображения или шрифты в data URI для встраивания',
      'Декодировать Base64-часть JWT-токена для просмотра данных',
      'Подготовить бинарные данные для передачи по текстовым протоколам',
      'Использовать URL-safe режим чтобы избежать + и / в строках запроса',
    ],
    faq: [
      {
        q: 'В чём разница между стандартным и URL-safe Base64?',
        a: 'Стандартный Base64 использует + и /, которые зарезервированы в URL. URL-safe Base64 заменяет их на - и _, убирает = отступы — результат безопасен для использования в URL без дополнительного кодирования.',
      },
      {
        q: 'Base64 шифрует данные?',
        a: 'Нет. Base64 — это кодирование, а не шифрование. Любой может декодировать строку без ключа. Никогда не используйте Base64 для защиты данных.',
      },
    ],
  },

  'jwt-decoder': {
    about:
      'JWT (JSON Web Token) состоит из трёх частей в Base64URL-кодировании: заголовок с алгоритмом, полезная нагрузка с данными (ID пользователя, роли, время истечения) и подпись. Инструмент декодирует все три части без проверки подписи.',
    useCases: [
      'Посмотреть содержимое токена авторизации',
      'Проверить срок действия токена (поле exp) без написания кода',
      'Отладить проблемы аутентификации в разработке',
      'Узнать алгоритм подписи токена',
    ],
    faq: [
      {
        q: 'Можно ли проверить подпись JWT?',
        a: 'Проверка подписи на клиенте требует секретного или публичного ключа — их не стоит вставлять в веб-инструменты. Этот инструмент декодирует и отображает payload. Проверку подписи выполняйте на сервере через свою библиотеку авторизации.',
      },
      {
        q: 'Почему payload читается без ключа?',
        a: 'JWT payload закодирован в Base64URL, а не зашифрован. Подпись только подтверждает подлинность — но не скрывает содержимое. Никогда не храните в JWT секретные данные без шифрования (JWE).',
      },
    ],
  },

  'uuid-generator': {
    about:
      'UUID — это 128-битный идентификатор, уникальный глобально без центрального координатора. v4 UUID — случайный; v7 UUID — упорядоченный по времени (лучше для первичных ключей БД); NanoID генерирует короткие URL-безопасные идентификаторы.',
    useCases: [
      'Генерировать первичные ключи для записей базы данных',
      'Создавать ключи идемпотентности для API-запросов',
      'Генерировать уникальные имена файлов для загруженных активов',
      'Создавать идентификаторы корреляции для трассировки',
    ],
    faq: [
      {
        q: 'Что лучше для БД — v4 или v7?',
        a: 'v7 лучше для баз данных, потому что упорядочен по времени: новые записи всегда вставляются в конец B-tree индекса, избегая расщепления страниц при случайных v4.',
      },
      {
        q: 'Насколько UUID уникален?',
        a: 'UUID v4 имеет 122 бита случайности. Вероятность коллизии ничтожно мала — примерно 1 к 2^61 даже при генерации миллиарда UUID в секунду на протяжении века.',
      },
    ],
  },

  'regex-tester': {
    about:
      'Регулярное выражение — это шаблон для поиска в тексте. Тестер позволяет написать паттерн, выбрать флаги (global, ignore case, multiline, dot-all) и увидеть все совпадения с подсветкой в реальном времени, включая содержимое групп захвата.',
    useCases: [
      'Извлекать поля из строк логов или CSV',
      'Валидировать email-адреса, телефоны или почтовые индексы',
      'Строить паттерны замены для редактора кода',
      'Тестировать регулярные выражения перед добавлением в продакшн',
    ],
    faq: [
      {
        q: 'Какие флаги поддерживаются?',
        a: 'g (глобальный поиск), i (без учёта регистра), m (многострочный — ^ и $ совпадают с границами строк), s (точка совпадает с переносами). Флаги можно комбинировать.',
      },
      {
        q: 'Почему мой regex вешает браузер?',
        a: 'Некоторые паттерны вызывают катастрофический откат — экспоненциальную сложность для определённых входных данных. Паттерны вида (a+)+ — частая причина. Упростите вложенные кванторы.',
      },
    ],
  },

  'cron-parser': {
    about:
      'Cron-выражение — компактная запись для периодических задач в Unix cron, Kubernetes CronJob, CI/CD и планировщиках задач. Парсер переводит любое выражение на русский язык и показывает ближайшие запуски.',
    useCases: [
      'Проверить расписание перед деплоем задачи',
      'Объяснить cron-выражение нетехническому коллеге',
      'Найти следующий запуск для запланированной задачи',
      'Отладить слишком частые или редкие запуски',
    ],
    faq: [
      {
        q: 'Какой формат поддерживается?',
        a: 'Стандартный 5-польный POSIX cron (минута час день-месяца месяц день-недели) и расширенный 6-польный формат с секундами в начале.',
      },
      {
        q: 'Что значит */5?',
        a: '*/5 означает «каждые 5 единиц». В поле минут — каждые 5 минут: 0, 5, 10, 15... 55. * = все значения, /5 = шаг 5.',
      },
    ],
  },

  'timestamp-converter': {
    about:
      'Unix-timestamp — количество секунд (или миллисекунд) с 1 января 1970 года 00:00:00 UTC. Не зависит от часового пояса, используется в базах данных, API и логах. Конвертер переводит timestamps в читаемые даты и обратно.',
    useCases: [
      'Декодировать timestamp из ответа API или поля БД',
      'Найти timestamp для конкретной даты для использования в запросе',
      'Конвертировать между UTC и локальным временем',
      'Вычислить разницу между двумя timestamp',
    ],
    faq: [
      {
        q: 'Секунды или миллисекунды?',
        a: 'Традиционно Unix timestamp — секунды, но JavaScript и многие современные API используют миллисекунды. 13-значное число — миллисекунды, 10-значное — секунды. Конвертер определяет единицу автоматически.',
      },
      {
        q: 'Что такое проблема 2038 года?',
        a: '32-битные целые числа со знаком могут хранить timestamp только до 19 января 2038 года. Современные системы используют 64-битные числа, но старые встроенные системы могут быть подвержены этой проблеме.',
      },
    ],
  },

  'url-encoder': {
    about:
      'URL может содержать только ограниченный набор ASCII-символов. Процентное кодирование заменяет небезопасные символы на % и два шестнадцатеричных символа. Инструмент кодирует и декодирует отдельные компоненты URL или полные адреса.',
    useCases: [
      'Кодировать значения параметров запроса со спецсимволами',
      'Декодировать encoded-URL чтобы прочитать что в нём',
      'Кодировать URL для использования как значение в другом URL',
      'Исправить ошибки "invalid URL" из-за незакодированных пробелов',
    ],
    faq: [
      {
        q: 'Разница между encodeURI и encodeURIComponent?',
        a: "encodeURIComponent кодирует всё кроме букв, цифр и - _ . ! ~ * ' ( ). Используй для значений параметров. encodeURI сохраняет символы со значением в URL (/, ?, #, &, =) — используй для полных URL.",
      },
      {
        q: 'Почему пробел иногда %20, а иногда +?',
        a: '%20 — стандартное кодирование пробела в URL. Кодирование через + специфично для формата application/x-www-form-urlencoded, который используется в HTML-формах.',
      },
    ],
  },

  'hash-generator': {
    about:
      'Криптографическая хеш-функция преобразует данные любого размера в дайджест фиксированной длины. SHA-256 даёт 64-символьную строку в hex; SHA-512 — 128 символов. Хеши однонаправленные: восстановить исходные данные из дайджеста нельзя.',
    useCases: [
      'Проверить что загруженный файл не был подменён',
      'Создать контрольную сумму до и после миграции данных',
      'Создать детерминированные идентификаторы из контента',
      'Проверить целостность данных без хранения полного payload',
    ],
    faq: [
      {
        q: 'Можно ли расшифровать SHA-хеш?',
        a: 'Нет. SHA — однонаправленная функция. Можно только сравнить два хеша. Для слабых паролей существуют rainbow table атаки — поэтому для хеширования паролей используйте bcrypt или Argon2, а не SHA.',
      },
      {
        q: 'SHA-256 подходит для паролей?',
        a: 'Нет. SHA-256 слишком быстрый — современные GPU вычисляют миллиарды SHA-256 в секунду. Для паролей используйте bcrypt, Argon2 или PBKDF2 — они намеренно медленные.',
      },
    ],
  },

  'password-generator': {
    about:
      'Надёжный пароль должен быть длинным, случайным и использовать разнообразный набор символов. Генератор использует crypto.getRandomValues браузера — криптографически стойкий ГПСЧ, результат которого нельзя предсказать.',
    useCases: [
      'Сгенерировать новый пароль для сервиса',
      'Создать API-ключ или секретный токен',
      'Создать временный пароль для нового пользователя',
      'Создать парольную фразу для ключевого файла или базы данных',
    ],
    faq: [
      {
        q: 'Как рассчитывается оценка энтропии?',
        a: 'Энтропия (в битах) = log2(размер_алфавита) × длина_пароля. 16-символьный пароль со всеми типами символов (~94 символа) имеет около 105 бит — практически не поддаётся взлому.',
      },
      {
        q: 'Пароль отправляется на сервер?',
        a: 'Нет. Пароли генерируются через crypto.getRandomValues в браузере. Ничего не отправляется на сервер. Исходный код открыт на GitHub.',
      },
    ],
  },

  'slug-generator': {
    about:
      'URL-slug — читаемая часть пути URL: строчные буквы, дефисы, без спецсимволов. Инструмент преобразует любую строку, включая кириллицу, в валидный URL-slug через транслитерацию.',
    useCases: [
      'Генерировать URL-slugs для заголовков статей или названий товаров',
      'Конвертировать русские заголовки в латинские slugs',
      'Создавать консистентные идентификаторы из пользовательского текста',
      'Нормализовать имена файлов для статических генераторов сайтов',
    ],
    faq: [
      {
        q: 'Как работает транслитерация кириллицы?',
        a: 'Каждый кириллический символ заменяется стандартным латинским фонетическим эквивалентом (е → e, ж → zh, ш → sh). Результат — читаемый латинский slug, приближённый к оригинальному произношению.',
      },
      {
        q: 'Slugs чувствительны к регистру в URL?',
        a: 'HTTP технически допускает регистрозависимые пути, но лучшая практика — использовать только строчные буквы и делать редирект с вариантов в верхнем регистре, чтобы избежать дублирования контента для поисковиков.',
      },
    ],
  },

  bcrypt: {
    about:
      'Bcrypt — адаптивный алгоритм хеширования паролей, намеренно медленный. Параметр cost (от 4 до 14) определяет количество раундов хеширования. Удвоение cost удваивает время вычисления — брутфорс становится всё сложнее по мере роста производительности железа.',
    useCases: [
      'Захешировать пароль перед сохранением в базу данных',
      'Проверить пароль пользователя по сохранённому хешу',
      'Подобрать оптимальный cost-фактор для своего сервера',
      'Разобраться в формате bcrypt-хеша ($2a$, $2b$)',
    ],
    faq: [
      {
        q: 'Какой cost-фактор выбрать?',
        a: 'OWASP рекомендует выбирать cost достаточно высоким, чтобы хеширование занимало не менее 1 секунды на продакшн-железе. Cost 12 — разумный дефолт для большинства серверов в 2024 году.',
      },
      {
        q: 'Почему одинаковый пароль даёт разные хеши?',
        a: 'Bcrypt генерирует случайную 128-битную соль для каждого хеша. Соль хранится внутри строки хеша (22 символа после cost-фактора). Поэтому одинаковые пароли дают разные хеши — rainbow table атаки не работают.',
      },
    ],
  },

  'text-diff': {
    about:
      'Diff сравнивает два текста и определяет, какие строки были добавлены, удалены или остались неизменными. Инструмент выполняет построчное сравнение и подсвечивает изменения в зелёно-красной цветовой схеме как в Git.',
    useCases: [
      'Сравнить две версии конфиг-файла',
      'Посмотреть что изменилось между двумя ответами API',
      'Проверить свои правки перед коммитом',
      'Найти непреднамеренные изменения в сгенерированном коде',
    ],
    faq: [
      {
        q: 'Какой алгоритм используется?',
        a: 'Алгоритм Майерса — тот же, что в основе Git diff. Он находит минимальный набор вставок и удалений для преобразования одного текста в другой.',
      },
      {
        q: 'Есть ли ограничение размера?',
        a: 'Инструмент работает полностью в браузере. Очень большие тексты (сотни тысяч строк) могут работать медленно, но жёсткого ограничения нет. Данные не загружаются на сервер.',
      },
    ],
  },

  'case-normalizer': {
    about:
      'Разные экосистемы используют разные соглашения об именовании: JavaScript — camelCase, Python — snake_case, CSS — kebab-case, константы — SCREAMING_SNAKE_CASE. Инструмент мгновенно конвертирует текст между всеми распространёнными форматами.',
    useCases: [
      'Конвертировать Python-переменную в camelCase для JavaScript',
      'Преобразовать ключи ответа API из snake_case в camelCase',
      'Нормализовать имена колонок БД под соглашения кода',
      'Конвертировать предложение в имя константы',
    ],
    faq: [
      {
        q: 'Какие форматы поддерживаются?',
        a: 'camelCase, PascalCase, snake_case, kebab-case, SCREAMING_SNAKE_CASE, dot.case и Title Case.',
      },
      {
        q: 'Как определяются границы слов?',
        a: 'Границы слов определяются по: пробелам, дефисам, подчёркиваниям, точкам и переходам от строчной к заглавной букве (для camelCase/PascalCase).',
      },
    ],
  },

  'curl-converter': {
    about:
      'curl — универсальный командный HTTP-клиент. Разработчики используют его для тестирования API, совместного использования запросов и документирования вызовов. Инструмент парсит любую curl-команду и конвертирует в fetch, Axios, Python requests или HTTPie.',
    useCases: [
      'Скопировать curl из документации API и конвертировать в свой язык',
      'Поделиться API-запросом с коллегой на предпочтительном языке',
      'Конвертировать "Copy as cURL" из DevTools браузера в fetch',
      'Разобраться какие заголовки и авторизацию отправляет curl-команда',
    ],
    faq: [
      {
        q: 'Какие флаги curl поддерживаются?',
        a: '-X (метод), -H (заголовки), -d / --data / --data-raw / --data-binary (тело), -u (basic auth), -b (cookies), --url, -F (form data), --json и все стандартные флаги без значений (-L, -s, -k).',
      },
      {
        q: 'Поддерживаются многострочные команды?',
        a: 'Да. Curl-команды разбитые на строки через \\ объединяются перед парсингом.',
      },
    ],
  },

  'query-string-parser': {
    about:
      'Query string — часть URL после символа ?, содержащая пары ключ=значение разделённые &. Инструмент разбирает строку запроса в читаемую таблицу, позволяет редактировать значения и восстанавливает encoded-строку.',
    useCases: [
      'Декодировать сложную строку запроса из API-запроса',
      'Построить строку запроса из известных параметров',
      'Отладить URL-параметры в цепочках редиректов',
      'Извлечь трекинговые параметры из маркетинговых URL',
    ],
    faq: [
      {
        q: 'Поддерживаются ли дублирующиеся ключи?',
        a: 'Да. Query string может содержать несколько значений для одного ключа (?tag=a&tag=b). Парсер отображает все значения и сохраняет дубликаты при пересборке.',
      },
      {
        q: 'Что делать с плюсами в query string?',
        a: 'В формате application/x-www-form-urlencoded + обозначает пробел. Парсер декодирует + как пробел, как это делают браузеры при отправке HTML-форм.',
      },
    ],
  },

  'xml-json': {
    about:
      'XML и JSON — популярные форматы сериализации данных. XML распространён в SOAP API, конфигах и документах; JSON доминирует в REST API и JavaScript. Инструмент конвертирует между ними, обрабатывая атрибуты, пространства имён и массивы.',
    useCases: [
      'Конвертировать ответ SOAP API в JSON для обработки',
      'Преобразовать конфиг из XML в JSON формат',
      'Конвертировать RSS или Atom фиды в JSON',
      'Перенести данные между системами с разными форматами',
    ],
    faq: [
      {
        q: 'Как обрабатываются атрибуты XML?',
        a: 'XML-атрибуты конвертируются в ключи с префиксом @ в JSON (<tag id="1"> становится {"tag": {"@id": "1"}}). Это сохраняет все данные атрибутов в JSON-представлении.',
      },
      {
        q: 'Что с пространствами имён XML?',
        a: 'Префиксы пространств имён сохраняются как есть в именах ключей. Разрешение полного URI пространства имён не выполняется.',
      },
    ],
  },

  'html-entity-encoder': {
    about:
      'HTML-entity — escape-последовательность для символов со специальным значением в HTML (&, <, >, ", \'). Кодирование пользовательского контента перед вставкой в HTML предотвращает XSS-атаки.',
    useCases: [
      'Экранировать пользовательский ввод перед рендерингом в HTML',
      'Декодировать HTML-entities в scraped-контенте',
      'Подготовить текст для безопасного включения в HTML-атрибуты',
      'Отладить encoded-контент в HTML-исходниках',
    ],
    faq: [
      {
        q: 'Кодирование защищает от XSS?',
        a: 'HTML entity encoding предотвращает XSS при вставке в текстовый контент и атрибуты HTML. Но разные контексты (JavaScript, CSS, URL) требуют разных стратегий экранирования. Этот инструмент обрабатывает HTML-контекст.',
      },
      {
        q: 'Разница между &amp; и &#38;?',
        a: 'Оба представляют символ &. Именованные entities (&amp;) читабельнее; числовые (&#38; десятичный или &#x26; hex) работают даже когда именованный entity не распознан.',
      },
    ],
  },

  'mime-lookup': {
    about:
      'MIME-типы (Media Types) сообщают браузерам и серверам тип данных в файле или HTTP-ответе. Отдача файла с неверным Content-Type может привести к отказу браузера отобразить его, предупреждениям безопасности или неверной интерпретации данных.',
    useCases: [
      'Найти правильный заголовок Content-Type для раздаваемого файла',
      'Проверить какой MIME-тип ожидает браузер для расширения',
      'Настроить веб-сервер для правильной раздачи нестандартных типов',
      'Проверить что API возвращает правильный Content-Type',
    ],
    faq: [
      {
        q: 'Почему неверный MIME-тип важен?',
        a: 'Браузеры используют заголовок Content-Type (не расширение файла) для обработки ответа. JavaScript как text/plain не выполнится; SVG как image/jpeg не отрендерится. Неверные MIME-типы также провоцируют MIME-sniffing браузера, что создаёт уязвимости.',
      },
      {
        q: 'Что такое application/octet-stream?',
        a: 'Универсальный бинарный MIME-тип. Браузеры интерпретируют его как скачивание файла. Используйте как запасной вариант когда реальный тип неизвестен, или когда нужно принудительно скачать файл.',
      },
    ],
  },

  'number-base-converter': {
    about:
      'Компьютеры работают в двоичной системе (основание 2), люди предпочитают десятичную (10). Шестнадцатеричная (16) используется в цветовых кодах, адресах памяти и кодировках символов. Восьмеричная (8) встречается в правах файлов Unix. Инструмент конвертирует между любыми системами от 2 до 36.',
    useCases: [
      'Конвертировать hex-код цвета в десятичные RGB-значения',
      'Разобраться в бинарном представлении целых чисел',
      'Конвертировать восьмеричные значения прав файлов Unix',
      'Работать с любой системой счисления в пользовательских схемах кодирования',
    ],
    faq: [
      {
        q: 'Какое максимальное число поддерживается?',
        a: 'Конвертер использует JavaScript BigInt для больших чисел, поэтому практического ограничения нет. Числа с сотнями цифр поддерживаются.',
      },
      {
        q: 'Почему в hex используются буквы A–F?',
        a: 'Шестнадцатеричная система требует 16 различных цифр, а десятичная имеет только 10 (0–9). Буквы от A до F представляют значения от 10 до 15. Это соглашение восходит к ранним компьютерам.',
      },
    ],
  },

  'string-inspector': {
    about:
      'Текст сложнее чем кажется — длина строки в байтах отличается от количества символов при наличии многобайтовых Unicode-символов (emoji, CJK, буквы с диакритикой). Энтропия Шеннона измеряет информационную плотность строки и позволяет обнаружить паттерны или случайность.',
    useCases: [
      'Проверить влезет ли строка в байтовый лимит колонки БД',
      'Обнаружить высокоэнтропийные строки — токены или пароли',
      'Проанализировать распределение символов в текстовых данных',
      'Найти невидимые символы или пробелы нулевой ширины',
    ],
    faq: [
      {
        q: 'Почему количество байт отличается от числа символов?',
        a: 'UTF-8 использует 1 байт для ASCII, 2 байта для латиницы Extended и греческого, 3 байта для большинства CJK и emoji, 4 байта для дополнительных emoji. Один emoji 🔥 — это 1 символ, но 4 байта.',
      },
      {
        q: 'Что такое энтропия Шеннона?',
        a: 'Энтропия Шеннона измеряет среднее количество информации на символ. Строка из одинаковых символов имеет энтропию 0. Случайная строка байт — около 8 бит. Пароли должны иметь высокую энтропию; естественный язык — обычно 4–5 бит на символ.',
      },
    ],
  },

  'csv-json': {
    about:
      'CSV — универсальный формат табличных данных, поддерживаемый всеми таблицами и базами данных. JSON — стандарт для API и JavaScript. Инструмент конвертирует между форматами, обрабатывая поля в кавычках, спецсимволы и разные разделители.',
    useCases: [
      'Конвертировать экспорт таблицы в JSON для использования в приложении',
      'Преобразовать ответ API в CSV для анализа в Excel',
      'Обработать данные с точкой с запятой или табуляцией как разделителем',
      'Быстро просмотреть структуру CSV-файла как JSON-массив',
    ],
    faq: [
      {
        q: 'Какие разделители поддерживаются?',
        a: 'Запятая (,), точка с запятой (;), табуляция (\\t) и вертикальная черта (|). Инструмент автоматически определяет разделитель по первой строке.',
      },
      {
        q: 'Что с полями в кавычках содержащими запятые?',
        a: 'Парсер обрабатывает правила RFC 4180: поля в двойных кавычках могут содержать запятые, переносы строк и экранированные кавычки ("").',
      },
    ],
  },

  'json-java': {
    about:
      'Java POJO (Plain Old Java Object) — простой класс для представления данных. Инструмент генерирует Java-классы или records из JSON, автоматически выводя типы и имена полей. Поддерживаются Lombok @Data для устранения шаблонного кода и Jackson-аннотации для маппинга JSON-ключей.',
    useCases: [
      'Быстро создать модель данных из ответа API',
      'Сгенерировать Java records (Java 16+) для неизменяемых DTO',
      'Добавить @JsonProperty аннотации для snake_case JSON ключей',
      'Использовать Lombok @Data чтобы убрать геттеры и сеттеры',
    ],
    faq: [
      {
        q: 'В чём разница между class и record?',
        a: 'Java records (с Java 16) — неизменяемые носители данных с автогенерируемыми конструктором, геттерами, equals, hashCode и toString. Классы дают полный контроль включая изменяемые поля. Используйте records для DTO и value-объектов; классы — когда нужно наследование или изменяемое состояние.',
      },
      {
        q: 'Почему в сгенерированном коде используется List, а не массивы?',
        a: 'List<T> предпочтительнее массивов в современном Java: он гибче (изменяемый размер), интегрируется с Collections API и лучше работает при десериализации через Jackson.',
      },
    ],
  },

  'maven-gradle': {
    about:
      'Maven и Gradle — два доминирующих инструмента сборки в Java-экосистеме. Maven использует XML-файлы pom.xml; Gradle — Kotlin или Groovy DSL. Инструмент конвертирует зависимости между форматами, маппируя Maven-скоупы (compile, test, provided, runtime) в конфигурации Gradle (implementation, testImplementation, compileOnly, runtimeOnly).',
    useCases: [
      'Перенести Maven-проект на Gradle без ручной переписки зависимостей',
      'Скопировать зависимость из документации Maven Central и конвертировать для Gradle',
      'Понять какая конфигурация Gradle соответствует Maven-скоупу',
      'Конвертировать Gradle-сборку обратно в Maven для legacy-проекта',
    ],
    faq: [
      {
        q: 'В чём разница между implementation и api в Gradle?',
        a: 'implementation скрывает зависимость от потребителей библиотеки (только compile classpath). api её открывает (как Maven compile). По умолчанию используйте implementation — это даёт быстрые сборки с лучшей изоляцией зависимостей.',
      },
      {
        q: 'Что происходит с Maven <exclusions>?',
        a: 'Исключения не конвертируются — их нужно добавить вручную. В Gradle используйте exclude внутри блока зависимости: implementation("group:artifact") { exclude group: "unwanted", module: "dep" }.',
      },
    ],
  },

  'lorem-ipsum': {
    about:
      'Lorem Ipsum — это текст-заполнитель, основанный на трактате Цицерона «De Finibus Bonorum et Malorum» (45 г. до н.э.). Классическое начало «Lorem ipsum dolor sit amet...» используется в вёрстке с XVI века. Генератор создаёт случайный псевдолатинский текст в четырёх форматах: абзацы, предложения, список слов и маркированные списки.',
    useCases: [
      'Заполнить макеты и вайрфреймы реалистичным текстом до появления реального контента',
      'Протестировать рендеринг шрифтов, межстрочный интервал и вёрстку на многоабзацном тексте',
      'Сгенерировать текст-заглушку для шаблонов писем, лендингов и дизайн-макетов',
      'Заполнить seed-скрипты баз данных и тестовые фикстуры разнообразным текстом',
    ],
    faq: [
      {
        q: 'Что такое «классическое начало»?',
        a: 'При включённой опции первый абзац или предложение всегда начинается с канонического «Lorem ipsum dolor sit amet...». Последующие элементы генерируются случайно из словаря Lorem Ipsum.',
      },
      {
        q: 'Lorem Ipsum — это настоящая латынь?',
        a: 'Это искажённая латынь из текста Цицерона, специально перемешанная так, чтобы не иметь читаемого смысла. Цель — нейтральный текст-заполнитель, который не отвлекает от оценки вёрстки.',
      },
    ],
  },

  'sql-formatter': {
    about:
      'SQL-форматтер переписывает сырой или минифицированный SQL в читаемый вид с отступами и заглавными ключевыми словами. Он разбивает длинные запросы на клозы — столбцы SELECT на отдельных строках, условия WHERE выровнены, JOIN-цепочки разделены — что упрощает review и поиск ошибок.',
    useCases: [
      'Отформатировать минифицированный SQL из логов приложения',
      'Привести SQL от разных разработчиков к единому стилю перед code review',
      'Быстро разобраться в сложном запросе с множеством JOIN',
      'Минифицировать SQL для вставки в конфиг или переменную окружения',
    ],
    faq: [
      {
        q: 'Какие SQL-диалекты поддерживаются?',
        a: 'Форматтер обрабатывает стандартный SQL и наиболее распространённые диалекты — MySQL, PostgreSQL, SQLite, SQL Server и Oracle. Синтаксис конкретного диалекта — LIMIT/TOP, идентификаторы в backtick-ах, квадратные скобки — сохраняется корректно.',
      },
      {
        q: 'Запрос отправляется на сервер?',
        a: 'Нет. Форматирование выполняется полностью в браузере на стороне клиента. Ничего не покидает вашу вкладку.',
      },
    ],
  },

  'html-formatter': {
    about:
      'HTML-форматтер парсит разметку и восстанавливает её с единообразными отступами, делая вложенность элементов сразу понятной. Обрабатывает void-элементы (br, img, input), строчные и блочные элементы, блоки с сырым контентом (script, style, pre) и HTML-комментарии.',
    useCases: [
      'Распаковать минифицированный HTML со страницы для изучения структуры',
      'Почистить HTML из WYSIWYG-редактора или шаблонизатора',
      'Минифицировать HTML-шаблоны для продакшн-сборки',
      'Просмотреть структуру вложенности сложного компонента или email-шаблона',
    ],
    faq: [
      {
        q: 'Влияет ли форматирование на рендеринг страницы?',
        a: 'Для блочных элементов — нет: пробелы между ними браузер игнорирует. Для строчных элементов (span, a, em) добавление пробелов может привести к маленьким зазорам. Форматтер оставляет строчные элементы на одной строке, чтобы этого избежать.',
      },
      {
        q: 'Что происходит с тегами script и style?',
        a: 'Содержимое script, style и pre обрабатывается как сырой текст и не переиндентируется — у этих элементов свои правила форматирования. Только открывающий и закрывающий теги меняют позицию.',
      },
    ],
  },

  'css-formatter': {
    about:
      'CSS-форматтер превращает минифицированные или плохо оформленные стили в читаемый вид: каждое свойство на отдельной строке с единообразными отступами. Обрабатывает вложенные @media и @keyframes блоки, сохраняет комментарии и поддерживает минификацию для удаления лишних пробелов.',
    useCases: [
      'Раскрыть минифицированный CSS из CDN чтобы понять что делает класс',
      'Почистить CSS сгенерированный препроцессором или инструментом сборки',
      'Минифицировать стили для уменьшения размера файла перед деплоем',
      'Проверить сторонний стилист перед интеграцией в проект',
    ],
    faq: [
      {
        q: 'Форматтер сортирует CSS-свойства?',
        a: 'Нет — порядок свойств сохраняется как есть. Сортировка по алфавиту или категориям — вопрос стиля, который может нарушить каскад если делать это не понимая существующего порядка.',
      },
      {
        q: 'Поддерживается Sass/SCSS или CSS-in-JS?',
        a: 'Форматтер работает со стандартным CSS-синтаксисом. CSS-in-JS шаблонные строки и Sass/SCSS-фичи — вложенность, переменные ($var), миксины (@include) — не поддерживаются и могут дать некорректный результат.',
      },
    ],
  },

  'js-beautifier': {
    about:
      'JS-бьютифайер превращает минифицированный или плохо отформатированный JavaScript в читаемый вид: правильные отступы, переносы строк и пробелы. Строковые литералы, шаблонные строки, комментарии и regex-паттерны сохраняются как есть — меняются только пробелы вокруг инструкций и блоков.',
    useCases: [
      'Распаковать минифицированный бандл или библиотеку чтобы понять структуру',
      'Прочитать обфусцированный JavaScript со страницы',
      'Почистить автосгенерированный JavaScript перед добавлением в проект',
      'Быстро отформатировать сниппет перед review в pull request',
    ],
    faq: [
      {
        q: 'Почему результат не идеально отформатирован?',
        a: 'Идеальное форматирование JS требует полного AST-парсера — Prettier строит полное синтаксическое дерево перед выводом. Этот форматтер использует быстрый структурный подход: отслеживает фигурные скобки, скобки и строки без полного разбора грамматики. Для продакшн-кода используйте Prettier или ESLint.',
      },
      {
        q: 'Поддерживаются TypeScript или JSX?',
        a: 'Базовый синтаксис TypeScript (аннотации типов, интерфейсы) обрабатывается. JSX-теги (компоненты в угловых скобках) могут форматироваться неправильно — они похожи на операторы сравнения. Для TypeScript и JSX используйте Prettier Playground.',
      },
    ],
  },

  'quartz-cron': {
    about:
      'Quartz — популярная библиотека планирования задач для Java. Её cron-формат расширяет стандартный Unix cron обязательным полем секунд и специальными символами: L (последний), W (ближайший будний день), # (n-е вхождение). Выражение Quartz имеет 6 обязательных полей — секунды, минуты, часы, день месяца, месяц, день недели — и необязательный год.',
    useCases: [
      'Расшифровать выражение @Scheduled в Spring Boot приложении',
      'Понять что означает 0 0 0 L * ? (полночь в последний день месяца)',
      'Вычислить следующие времена запуска Quartz-задачи',
      'Использовать L/W/# для планирования последней пятницы или первого понедельника месяца',
    ],
    faq: [
      {
        q: 'Чем Quartz cron отличается от стандартного Unix cron?',
        a: 'Quartz добавляет обязательное поле секунд в начале (Unix cron начинается с минут). Нумерация дней недели отличается: в Quartz 1=воскресенье, 7=суббота. Quartz также добавляет спецсимволы L (последний), W (ближайший будний) и # (n-й день недели). Одно из полей — день месяца или день недели — должно быть ? если указано другое.',
      },
      {
        q: 'Что означает ? в Quartz cron?',
        a: '? означает "без конкретного значения" и используется чтобы избежать конфликта между днём месяца и днём недели. Например, 0 0 0 15 * ? срабатывает 15-го числа независимо от дня недели. Нельзя указать и день месяца, и день недели одновременно — используйте ? для того поля, которое не важно.',
      },
    ],
  },

  'java-decompiler': {
    about:
      'Java-декомпилятор берёт скомпилированный .class или .jar файл и восстанавливает из него читаемый исходный код Java. Инструмент использует Vineflower на наших серверах — тот же движок, что работает внутри IntelliJ IDEA — с полной поддержкой современных конструкций: records, sealed classes, switch expressions, лямбды и pattern matching. Результат — код Java с подсветкой синтаксиса.',
    useCases: [
      'Изучить стороннюю библиотеку, когда исходный код недоступен',
      'Понять, что скомпилированный класс делает во время выполнения',
      'Восстановить исходник из jar, когда оригинальный репозиторий утерян',
      'Проверить, не содержит ли зависимость неожиданного или обфусцированного кода',
    ],
    faq: [
      {
        q: 'Декомпилятор работает в браузере?',
        a: 'Нет — декомпиляция байткода требует JVM, которая не может работать в браузере. Файл загружается на наш сервер, декомпилируется в памяти через Vineflower и возвращается исходный код. Файл никогда не сохраняется и не логируется. Функция доступна на Pro-плане.',
      },
      {
        q: 'Какие версии Java поддерживаются?',
        a: 'Vineflower поддерживает Java 8 — Java 21+, включая records, sealed classes, switch expressions, text blocks и pattern matching. Также поддерживаются очень старые class-файлы (Java 1.1–1.4).',
      },
    ],
  },

  'java-stack-trace': {
    about:
      'Java stack trace — это плотная стена текста, где перемешан твой собственный код с десятками фреймов библиотек: Spring, Hibernate, Netty, JDK. Инструмент разбирает сырой trace и отображает его с подсветкой: исключения красным, цепочки Caused by оранжевым, твои фреймы выделены, библиотечный шум приглушён. Статус-бар показывает класс исключения и долю твоих фреймов.',
    useCases: [
      'Быстро найти свой класс, который вызвал исключение, среди библиотечного шума',
      'Понять многоуровневую цепочку Caused by с первого взгляда',
      'Поделиться чистым читаемым trace с коллегой в PR-комментарии',
      'Найти root cause, когда NullPointerException скрыт под 60 Spring-фреймами',
    ],
    faq: [
      {
        q: 'Как инструмент определяет "мои" фреймы?',
        a: 'Фреймы, начинающиеся с известных библиотечных префиксов — java.*, javax.*, org.springframework.*, org.hibernate.*, io.netty.*, kotlin.* и ещё 10+, — считаются библиотечным кодом и приглушаются. Всё остальное считается твоим кодом и выделяется.',
      },
      {
        q: 'Trace отправляется на сервер?',
        a: 'Нет. Весь разбор и подсветка происходят в браузере на JavaScript. Твои stack trace-ы, которые часто содержат имена классов и методов из внутреннего кода, никогда не покидают вкладку.',
      },
    ],
  },

  'properties-yaml': {
    about:
      'Spring Boot принимает как application.properties, так и application.yml. Properties-файлы используют плоские ключи с точками (spring.datasource.url=…), YAML — отступы и вложенные структуры. Конвертер работает в обе стороны: ключи с точками превращаются в вложенные YAML-структуры, индексированные ключи массивов (list[0]=x) — в YAML-последовательности, а значения, которые могут сбить YAML-парсер, автоматически берутся в кавычки.',
    useCases: [
      'Мигрировать устаревший application.properties в более читаемый YAML-формат',
      'Конвертировать YAML-сниппет из документации в properties для слияния с существующим файлом',
      'Понять, как глубоко вложенный YAML-ключ соответствует своему properties-эквиваленту',
      'Быстро проверить эквивалентность properties-ключа и его YAML-варианта',
    ],
    faq: [
      {
        q: 'Сохраняются ли комментарии?',
        a: 'Комментарии в .properties (строки начинающиеся с #) удаляются при конвертации, так как нельзя надёжно определить их место в YAML по порядку плоских ключей. Добавь комментарии вручную после конвертации.',
      },
      {
        q: 'Поддерживается multi-document YAML или anchors?',
        a: 'Нет — только однодокументный YAML без anchors, aliases и сложных скаляров. Это покрывает 99% файлов application.yml в Spring Boot. Для продвинутых возможностей YAML используй полноценную библиотеку.',
      },
    ],
  },

  'java-formatter': {
    about:
      'Java форматтер прогоняет ваш код через google-java-format на наших серверах — тот же форматтер, который используют Google, Android Open Source Project и большинство крупных Java-проектов. Выберите Google-стиль (2 пробела, строгий лимит колонок) или AOSP-стиль (4 пробела, более широкие строки). Результат подсвечивается синтаксически — можно сразу проверить перед копированием.',
    useCases: [
      'Отформатировать сниппет перед вставкой в PR-комментарий или дизайн-документ',
      'Нормализовать отступы и стиль скобок при слиянии кода от разных участников',
      'Быстро проверить, не сбился ли форматтер в IDE, сравнив его вывод с эталонным',
      'Отформатировать сгенерированный код (из JSON→Java или protobuf) перед коммитом',
    ],
    faq: [
      {
        q: 'В чём разница между Google-стилем и AOSP-стилем?',
        a: 'Оба определены в google-java-format. Google-стиль использует отступы в 2 пробела и лимит строки 100 символов. AOSP-стиль (Android Open Source Project) — 4 пробела и тот же лимит. Если работаете над Android-кодом — выбирайте AOSP, в остальных случаях Google-стиль.',
      },
      {
        q: 'Почему нужен Pro-план?',
        a: 'google-java-format — это JVM-инструмент, который не может работать в браузере. Код отправляется на наш сервер, форматируется в памяти и возвращается. Код никогда не сохраняется и не логируется.',
      },
    ],
  },

  'java-format-string': {
    about:
      'В Java два механизма форматирования строк: String.format (printf-стиль: %s, %d, %f с флагами, шириной и точностью) и MessageFormat ({0}, {1,number,currency} с типом и стилем). Инструмент разбирает строку формата, определяет каждый плейсхолдер, позволяет ввести значение для каждого и показывает результат в реальном времени.',

    useCases: [
      'Убедиться, что String.format-вызов даёт ожидаемый результат до деплоя',
      'Разобраться с нужными флагами для zero-padded целых или чисел с группировкой (%,d vs %05d)',
      'Протестировать MessageFormat-паттерн с разными числовыми значениями перед использованием в i18n-бандле',
      'Понять, что выведет %.2f в отличие от %10.2f для данного числа с плавающей точкой',
    ],
    faq: [
      {
        q: 'В чём разница между String.format и MessageFormat?',
        a: 'String.format использует C-style % спецификаторы (%s, %d, %f) — наиболее распространённый выбор для одноязычных приложений. MessageFormat использует позиционные плейсхолдеры {0}, {1} и добавляет форматирование с учётом типа ({0,number,currency}, {0,date,short}) — он создан для интернационализированных сообщений, где порядок аргументов может отличаться в разных локалях.',
      },
      {
        q: 'Предпросмотр полностью совпадает с выводом Java?',
        a: 'Для большинства распространённых спецификаторов — очень близко. Форматирование с учётом локали (разделители десятичных, символы валют) использует браузерный Intl API, который может отличаться от дефолтной локали JVM. Для production-валидации тестируй в реальном Java-окружении.',
      },
    ],
  },

  'bytecode-viewer': {
    about:
      'Просмотрщик байткода запускает javap -verbose на загруженном .class файле и показывает инструкции JVM: записи в пуле констант, дескрипторы методов, таблицы локальных переменных и каждый опкод с операндами. Тот же вывод, что вы получаете при запуске javap локально — доступен мгновенно без установки JDK.',
    useCases: [
      'Убедиться, что оптимизация компилятора (constant folding, inlining) действительно произошла',
      'Отладить ClassFormatError или VerifyError, напрямую изучив байткод',
      'Понять, как Java-конструкции (лямбды, try-with-resources, switch expressions) транслируются в опкоды JVM',
      'Исследовать структуру class-файла, который не удаётся красиво декомпилировать',
    ],
    faq: [
      {
        q: 'Чем просмотрщик байткода отличается от декомпилятора?',
        a: 'Декомпилятор восстанавливает высокоуровневый Java-код из байткода — читаемый, но приближённый. Просмотрщик байткода показывает точные JVM-инструкции, хранящиеся в .class файле: опкоды (invokevirtual, aload_0 и т.д.), пул констант и информацию о стек-фреймах. Используй декомпилятор, чтобы понять, что делает код; используй просмотрщик байткода, чтобы понять, как именно JVM его выполняет.',
      },
      {
        q: 'Почему нужен Pro-план?',
        a: 'javap — это инструмент командной строки из JDK, который не может работать в браузере. Файл .class отправляется на наш сервер, анализируется в памяти и возвращается. Файл никогда не сохраняется и не логируется.',
      },
    ],
  },

  'jwt-sign': {
    about:
      'Подписыватель JWT позволяет создавать подписанные токены с алгоритмами HS256 (HMAC-SHA-256), RS256 (RSA-SHA-256) или ES256 (ECDSA-P256-SHA-256) — все три алгоритма из RFC 7518. Укажи любые поля заголовка и payload, введи секрет или приватный ключ — и получи готовый подписанный токен. Всё работает в браузере через WebCrypto API; ключи и токены не покидают вкладку.',
    useCases: [
      'Создать тестовый токен для защищённого API-эндпоинта в процессе разработки',
      'Сгенерировать подписанный токен с конкретным сроком действия или кастомным claim для тестирования JWT-валидации',
      'Понять принцип подписания, меняя payload и наблюдая, как меняется подпись',
      'Подписать токены с RS256 или ES256 с помощью локально сгенерированной пары ключей',
    ],
    faq: [
      {
        q: 'Какие алгоритмы поддерживаются?',
        a: 'HS256 (HMAC-SHA-256) с общим секретом, RS256 (RSA-PKCS1v1.5-SHA-256) с PEM приватным ключом и ES256 (ECDSA-P256-SHA-256) с PEM EC приватным ключом. Это покрывает подавляющее большинство реальных JWT-реализаций.',
      },
      {
        q: 'Мой ключ отправляется на ваш сервер?',
        a: 'Нет. Подпись использует WebCrypto API, встроенный в браузер. Ваш секрет или приватный ключ никогда не покидает вкладку.',
      },
    ],
  },

  'ssl-cert-inspector': {
    about:
      'Инспектор SSL-сертификатов разбирает PEM-кодированные X.509 сертификаты прямо в браузере. Вставь сертификат (блок между -----BEGIN CERTIFICATE----- и -----END CERTIFICATE-----) и мгновенно увидишь: subject, issuer, срок действия, Subject Alternative Names (SAN), алгоритм подписи и SHA-256 fingerprint — без расширений и серверов.',
    useCases: [
      'Быстро проверить срок действия и издателя сертификата, скопированного с сервера',
      'Убедиться в правильности SAN для мульти-доменного или wildcard сертификата перед деплоем',
      'Сравнить fingerprint сертификата из двух источников и убедиться, что они совпадают',
      'Отладить проблемы цепочки сертификатов, проверив каждый PEM-блок в цепочке',
    ],
    faq: [
      {
        q: 'Какой формат принимается?',
        a: 'PEM-кодированные X.509 сертификаты — текстовый блок, начинающийся с -----BEGIN CERTIFICATE-----. Можно экспортировать сертификат из большинства браузеров (DevTools → Security → View certificate → Export) или извлечь с помощью openssl s_client -connect host:443 -showcerts.',
      },
      {
        q: 'Сертификат отправляется на ваш сервер?',
        a: 'Нет. PEM-данные разбираются целиком в браузере с помощью Web Crypto API и кастомного ASN.1/DER парсера. Ничего не отправляется по сети.',
      },
    ],
  },

  'word-counter': {
    about:
      'Счётчик слов анализирует введённый текст и отслеживает семь показателей в реальном времени: общее число символов, символы без пробелов, количество слов, строк, предложений, абзацев и расчётное время чтения из расчёта 200 слов в минуту. Всё обрабатывается в браузере без сетевых запросов.',
    useCases: [
      'Проверить, что статья или пост в блоге достигает целевого числа слов перед публикацией',
      'Убедиться, что мета-описание или твит укладывается в лимит символов',
      'Оценить, сколько времени займёт вслух прочитать сценарий или презентацию',
      'Посчитать строки в логе или конфиге без открытия терминала',
    ],
    faq: [
      {
        q: 'Как определяется «слово»?',
        a: 'Слово — любая последовательность непробельных символов, отделённая пробелами. Дефисные составные слова (например, «хорошо-написанный») считаются как одно слово.',
      },
      {
        q: 'Как рассчитывается время чтения?',
        a: 'Оценка основана на скорости 200 слов в минуту — типичная скорость тихого чтения для взрослых. Реальная скорость зависит от читателя и сложности текста.',
      },
    ],
  },

  'hex-encoder': {
    about:
      'HEX-кодировщик конвертирует текст в шестнадцатеричное представление байтов через TextEncoder API, используя UTF-8 по умолчанию. Каждый байт превращается в пару шестнадцатеричных символов. Декодер выполняет обратную операцию, читая пары hex-цифр и восстанавливая исходную строку. Можно настроить разделитель между байтами и регистр букв.',
    useCases: [
      'Проверить байтовую последовательность UTF-8 для строки с Unicode или эмодзи',
      'Подготовить hex-кодированные данные для низкоуровневых протоколов или заголовков бинарных файлов',
      'Декодировать hex-дамп из трассировки сети или инспектора памяти',
      'Проверить, сколько байт занимает конкретный Unicode-символ в UTF-8',
    ],
    faq: [
      {
        q: 'Какая кодировка используется?',
        a: 'UTF-8 по умолчанию: ASCII-символы кодируются одним байтом, большинство других Unicode-символов — двумя-четырьмя. Для не-ASCII входных данных число байт будет отличаться от числа символов.',
      },
      {
        q: 'Какой разделитель выбрать?',
        a: 'Пробел («48 65 6c 6c 6f») — наиболее читаемый формат, совпадает с выводом большинства инструментов hex-дампа. Без разделителя удобно, когда нужна компактная hex-строка для вставки в код.',
      },
    ],
  },

  'http-status': {
    about:
      'HTTP-коды состояния — трёхзначные числа, которые сервер возвращает в ответ на запрос клиента. Они делятся на пять классов: 1xx (информационные), 2xx (успех), 3xx (редиректы), 4xx (ошибки клиента), 5xx (ошибки сервера). Справочник охватывает все коды из RFC 7231 и более поздних RFC с пояснениями на понятном языке и типичными причинами.',
    useCases: [
      'Узнать значение конкретного кода при отладке ответа API',
      'Разобраться в разнице между 301 и 302, или 401 и 403',
      'Быстро определить класс ошибки по коду',
      'Выяснить смысл редких кодов — 409, 422, 429',
    ],
    faq: [
      {
        q: 'В чём разница между 401 и 403?',
        a: '401 Unauthorized означает отсутствие действительных учётных данных — клиенту нужно войти в систему. 403 Forbidden означает, что сервер понял запрос и знает, кто вы, но отказывает в доступе.',
      },
      {
        q: 'В чём разница между 301 и 302?',
        a: '301 Moved Permanently сигнализирует о постоянном перемещении ресурса — браузеры и поисковики обновляют свои записи. 302 Found — временный редирект, исходный URL остаётся каноническим.',
      },
    ],
  },

  'unit-converter': {
    about:
      'Конвертер единиц поддерживает восемь категорий измерений: длина, масса, температура, цифровые данные, площадь, объём, скорость и время. Все конвертации проходят через единую базовую единицу в каждой категории. Конвертация температуры использует Кельвин как промежуточную единицу для корректной обработки нелинейного соотношения Цельсий ↔ Фаренгейт.',
    useCases: [
      'Перевести километры в мили при работе с международной документацией',
      'Проверить эквивалент размера хранилища в байтах, мегабайтах и гибибайтах',
      'Перевести Цельсий в Фаренгейт для API погоды, использующего имперские единицы',
      'Перевести узлы в км/ч при чтении морских или авиационных данных',
    ],
    faq: [
      {
        q: 'Чем отличаются МБ и МиБ?',
        a: 'МБ (мегабайт) — 1 000 000 байт по СИ, используют производители накопителей. МиБ (мебибайт) — 1 048 576 байт (2²⁰), используют операционные системы. Поэтому жёсткий диск «500 ГБ» отображается как ~465 ГиБ в Windows.',
      },
      {
        q: 'Почему конвертация температуры выглядит иначе?',
        a: 'В отличие от других единиц, шкалы Цельсия и Фаренгейта начинаются с разных нулевых точек. Все конвертации температуры проходят через Кельвин (абсолютный ноль) как промежуточный шаг для корректного учёта смещения.',
      },
    ],
  },

  'color-converter': {
    about:
      'Конвертер цветов принимает любой распространённый формат цвета — hex-триплеты, CSS-функции rgb() и rgba(), hsl() и hsla(), oklch() и именованные CSS-цвета — и мгновенно показывает эквивалент во всех пяти форматах: HEX, RGB, HSL, OKLCH и CIELab. Значения OKLCH и Lab вычисляются через полный конвейер sRGB → линейный → XYZ → OKLab.',
    useCases: [
      'Конвертировать дизайн-токен из HEX в HSL для CSS-переменной',
      'Проверить светлоту и насыщенность фирменного цвета в OKLCH для работы с доступностью',
      'Конвертировать именованный CSS-цвет (например, «cornflowerblue») в его hex-значение',
      'Получить Lab-координаты цвета для проверки перцептивной однородности',
    ],
    faq: [
      {
        q: 'Что такое OKLCH и зачем его использовать?',
        a: 'OKLCH — перцептивно однородное цветовое пространство, в котором одинаковые числовые шаги дают одинаково воспринимаемые изменения светлоты, насыщенности и тона. Нативно поддерживается в CSS (color: oklch(60% 0.15 240)) и удобен для создания консистентных цветовых шкал и доступных палитр.',
      },
      {
        q: 'Какие форматы принимаются на входе?',
        a: 'HEX (#rgb, #rrggbb, #rrggbbaa), CSS rgb()/rgba(), CSS hsl()/hsla(), CSS oklch() и любой именованный CSS-цвет (red, cornflowerblue и т.д.). Инструмент автоматически определяет формат — просто вводите или вставляйте значение.',
      },
    ],
  },

  'image-webp': {
    about:
      'WebP — современный формат изображений от Google, обеспечивающий значительно меньший размер файла по сравнению с JPEG и PNG при сопоставимом визуальном качестве. Этот инструмент конвертирует изображения в WebP полностью в браузере через Canvas API — файлы не отправляются на серверы. Ползунок качества управляет уровнем сжатия с потерями, а предпросмотр показывает оригинал и результат рядом.',
    useCases: [
      'Оптимизировать главные изображения и фотографии товаров перед загрузкой на сайт',
      'Сравнить уровни качества WebP, чтобы найти оптимальный баланс размера и качества',
      'Конвертировать скриншоты в WebP для документации или блога',
      'Проверить, сколько места сэкономит WebP для набора изображений',
    ],
    faq: [
      {
        q: 'Покидает ли оригинальный файл устройство?',
        a: 'Нет. Конвертация выполняется полностью в браузере через HTML Canvas API. Изображение читается локально, рисуется на холст и экспортируется как WebP blob — сетевые запросы не выполняются.',
      },
      {
        q: 'Какие исходные форматы поддерживаются?',
        a: 'Любые форматы, которые браузер умеет декодировать: JPEG, PNG, GIF (первый кадр), BMP, AVIF и сам WebP. HEIC/HEIF не поддерживается повсеместно — зависит от браузера и ОС. Если изображение не загружается, сначала конвертируйте его в PNG.',
      },
    ],
  },

  'cidr-calculator': {
    about:
      'CIDR (Classless Inter-Domain Routing) — запись IP-адреса вместе с маской подсети в одной строке, например 192.168.1.0/24. По заданному CIDR-блоку калькулятор вычисляет адрес сети, широковещательный адрес, первый и последний используемый хост, маску подсети, wildcard-маску, префиксную длину, общее число и число используемых хостов, класс IP и тип адреса (частный/loopback/link-local/публичный), а также полное двоичное представление с выделением сетевых и хостовых битов.',
    useCases: [
      'Проверить, что два IP-адреса находятся в одной подсети перед настройкой маршрутизации',
      'Рассчитать, сколько хостов вместит подсеть /27 или /30',
      'Спланировать диапазоны адресов VPC или облачной сети до развёртывания',
      'Разобрать двоичное представление маски подсети для экзамена по сетям',
    ],
    faq: [
      {
        q: 'Чем отличаются «всего хостов» и «используемых хостов»?',
        a: 'В любой подсети первый адрес — адрес сети, последний — широковещательный. Ни тот, ни другой нельзя назначить хосту. Поэтому /24 имеет 256 адресов всего, но только 254 используемых.',
      },
      {
        q: 'Что такое wildcard-маска?',
        a: 'Wildcard-маска — побитовая инверсия маски подсети. Используется в списках контроля доступа (ACL) и конфигурациях OSPF для указания значимых битов адреса. Для маски /24 (255.255.255.0) wildcard равен 0.0.0.255.',
      },
    ],
  },

  'markdown-html': {
    about:
      'Конвертер Markdown в HTML реализует GitHub Flavored Markdown (GFM) на собственном парсере, написанном на чистом JavaScript. Поддерживаются заголовки (ATX и Setext), жирный текст, курсив, зачёркивание, строчный и блочный код, нумерованные и ненумерованные списки, task-списки, цитаты, таблицы, горизонтальные линии, изображения и ссылки. Вкладка «Предпросмотр» рендерит HTML, вкладка «Источник» показывает сырой вывод.',
    useCases: [
      'Предпросмотр README.md перед пушем на GitHub',
      'Конвертировать документацию в Markdown в HTML для вставки в CMS',
      'Проверить синтаксис таблиц GFM, чтобы правильно выровнять столбцы',
      'Изучить сгенерированный HTML для понимания рендеринга элемента Markdown',
    ],
    faq: [
      {
        q: 'Это точно такой же рендеринг, как на GitHub?',
        a: 'Очень близко для распространённых элементов. В GFM есть крайние случаи во вложенных списках и обработке плотных vs. свободных списков, которые немного отличаются между реализациями. Для точного соответствия GitHub используйте их Markdown REST API.',
      },
      {
        q: 'Санируется ли HTML на выходе?',
        a: 'Конвертер не санирует вывод. Если в Markdown содержится сырой HTML, он появится в выводе. Не вставляйте этот HTML напрямую на страницу без санирования, если источник Markdown ненадёжен.',
      },
    ],
  },

  'yaml-json': {
    about:
      'Конвертер YAML ↔ JSON автоматически определяет, является ли входные данные YAML или JSON, и конвертирует в противоположный формат. YAML-парсер написан с нуля и поддерживает блочные и потоковые маппинги, блочные и потоковые последовательности, все скалярные типы (строка, целое, вещественное, булево, null), многострочные блочные скаляры (| и >), строки в кавычках и комментарии. При конвертации из JSON создаётся чистый YAML с отступами.',
    useCases: [
      'Конвертировать docker-compose.yml или манифест Kubernetes в JSON для программной обработки',
      'Конвертировать JSON-ответ API в YAML для более удобного сравнения или документации',
      'Проверить синтаксис YAML, когда конфиг-файл не парсится в CI',
      'Убрать YAML-комментарии, конвертировав в JSON и обратно',
    ],
    faq: [
      {
        q: 'Сохраняются ли YAML-комментарии?',
        a: 'Комментарии удаляются при парсинге, поскольку JSON не поддерживает комментарии. Если нужно сохранить комментарии, редактируйте YAML-источник напрямую.',
      },
      {
        q: 'Какие возможности YAML поддерживаются?',
        a: 'Блочные и потоковые маппинги и последовательности, все скалярные типы включая многострочные литералы (| и >), строки в кавычках, якоря и псевдонимы, комментарии. Ключи объединения YAML (<<: *anchor) не поддерживаются.',
      },
    ],
  },

  'qr-code': {
    about:
      'Этот генератор QR-кодов реализует полную спецификацию QR Code Model 2 на чистом JavaScript — без внешних библиотек. Поддерживаются версии с 1 по 10 (до 174 символов) в байтовом режиме, все четыре уровня коррекции ошибок (L 7%, M 15%, Q 25%, H 30%), кодирование Рида-Соломона в GF(256), все 8 масок с официальной системой штрафных очков и кодирование информации формата. Вывод доступен в SVG (векторный, любой размер) или PNG (копируется в буфер обмена).',
    useCases: [
      'Сгенерировать QR-код для URL для использования в презентации или печатных материалах',
      'Создать QR-код с именем и паролем Wi-Fi для гостей',
      'Протестировать, как разные уровни коррекции ошибок влияют на плотность кода',
      'Создать QR-код, ведущий на vCard или событие в календаре',
    ],
    faq: [
      {
        q: 'Какова максимальная длина текста?',
        a: 'Инструмент генерирует версии 1–10. При версии 10 с уровнем L (низкий) лимит — 174 байта. Более высокие версии поддерживают больше данных, но создают более плотные коды, которые труднее считывают старые сканеры. Для URL используйте короткие ссылки.',
      },
      {
        q: 'Какой уровень коррекции ошибок выбрать?',
        a: 'L (7%) создаёт наименьший код и подходит для чистых цифровых экранов. M (15%) — хороший выбор по умолчанию. Q (25%) или H (30%) полезны, когда QR-код будет напечатан на поверхности, которая может быть частично повреждена или закрыта.',
      },
    ],
  },

  'svg-optimizer': {
    about:
      'SVG-файлы, экспортированные из Figma, Illustrator или Inkscape, часто содержат много лишнего: XML-декларации, DOCTYPE, метаданные редактора, пустые атрибуты, избыточные значения по умолчанию, длинные десятичные координаты и лишние пробелы. Инструмент применяет до восьми настраиваемых оптимизационных проходов полностью в браузере и показывает точное сокращение в байтах.',
    useCases: [
      'Уменьшить размер SVG-иконок перед включением в бандл веб-приложения',
      'Очистить SVG-экспорты из Figma или Illustrator перед коммитом в репозиторий',
      'Удалить метаданные и комментарии из SVG, используемых в продакшен-CSS',
      'Оценить влияние каждого отдельного прохода оптимизации на размер',
    ],
    faq: [
      {
        q: 'Это то же самое, что SVGO?',
        a: 'Нет. SVGO — Node.js-инструмент с гораздо большим набором трансформаций: объединение путей, конвертация фигур, свёртка трансформаций. Этот инструмент выполняет более простые текстовые и атрибутные проходы, которые безопасны и обратимы. Для продакшен-пайплайнов рекомендуется SVGO или svgomg.',
      },
      {
        q: 'SVG будет корректно отображаться после оптимизации?',
        a: 'Да для стандартных проходов. Удаление комментариев, DOCTYPE, XML-деклараций, title/desc/metadata, пустых атрибутов и сжатие пробелов — всё визуально безопасно. Проход «округление чисел» (toPrecision 4) может вызвать субпиксельные различия на очень точных путях.',
      },
    ],
  },

  'thread-dump-analyzer': {
    about:
      'Thread dump Java — снимок состояний всех тредов JVM-процесса в конкретный момент, создаваемый через jstack, kill -3 или JConsole. Он фиксирует имя, OS thread ID, Java-состояние (RUNNABLE, BLOCKED, WAITING, TIMED_WAITING), стектрейс и блокировки каждого треда. Инструмент парсит вывод jstack в структурированное представление со сводкой по состояниям, обнаружением дедлоков и анализом цепочек блокировок.',
    useCases: [
      'Диагностировать дедлок в продакшен-JVM, выявив циклическую зависимость блокировок',
      'Найти треды в BLOCKED для поиска узких мест синхронизации в synchronized-блоках',
      'Выявить CPU-потребляющие треды, сопоставив RUNNABLE-треды с выводом top -H',
      'Сравнить количество тредов до и после нагрузки для обнаружения утечек тредов',
    ],
    faq: [
      {
        q: 'Как сгенерировать thread dump?',
        a: 'Выполните jstack <pid> в терминале или Ctrl+Break в Windows JVM. В контейнерах: kubectl exec <pod> -- jstack 1. Также можно через JMX, VisualVM или SIGQUIT процессу.',
      },
      {
        q: 'Чем BLOCKED отличается от WAITING?',
        a: 'BLOCKED — тред ждёт захвата монитора (synchronized-блока), удерживаемого другим тредом. WAITING/TIMED_WAITING — тред добровольно приостановлен через Object.wait(), Thread.sleep() или LockSupport.park() и не конкурирует за блокировку.',
      },
      {
        q: 'Можно ли обнаружить дедлоки?',
        a: 'Да. Анализатор автоматически выявляет циклы дедлоков. Вывод jstack также содержит секцию "Found one Java-level deadlock" при наличии дедлока.',
      },
    ],
  },

  'json-typescript': {
    about:
      'Инструмент выводит TypeScript-интерфейсы из JSON-примера. Он анализирует каждый ключ, определяет наиболее конкретный тип (string, number, boolean, null, массив, вложенный объект) и генерирует чистые интерфейсы с правильной вложенностью. Массивы анализируются поэлементно — разнородные элементы дают union-типы.',
    useCases: [
      'Сгенерировать TypeScript-типы для ответа REST API из вкладки Network DevTools',
      'Создать интерфейсы моделей из примера документа Prisma или Mongoose-схемы',
      'Типизировать payload внешнего SDK без готовых type definitions',
      'Быстро типизировать JSON-конфиг для автодополнения в редакторе',
    ],
    faq: [
      {
        q: 'Поддерживаются ли вложенные объекты?',
        a: 'Да. Вложенные объекты создают отдельные именованные интерфейсы, на которые ссылается родительский. Имена типов формируются из имени ключа с заглавной буквы.',
      },
      {
        q: 'Что происходит с массивами разных типов?',
        a: 'Разнородные элементы дают union-тип: (string | number)[]. Пустые массивы — unknown[].',
      },
      {
        q: 'Поддерживаются ли null и опциональные поля?',
        a: 'Null-значения дают type | null. При необходимости поля помечаются опциональными (?). Для полей, присутствующих не во всех объектах, скорректируйте вывод вручную.',
      },
    ],
  },

  'json-diff': {
    about:
      'JSON Diff выполняет глубокое структурное сравнение двух JSON-объектов и фиксирует каждое изменение: добавленный ключ (+), удалённый ключ (−) или изменённое значение (~). Инструмент рекурсивно обходит вложенные объекты и массивы, выводя пути в dot-нотации (user.address.city), чтобы точно указать место изменения на любой глубине. Всё работает в браузере — данные не покидают ваш компьютер.',
    useCases: [
      'Сравнить два ответа API и найти, какие поля изменились между версиями',
      'Обнаружить расхождения в конфигурации между стейджингом и продакшеном',
      'Отладить баг сериализации, сравнив снимки объекта до и после',
      'Проверить корректность скрипта миграции, сравнив примеры записей до и после',
    ],
    faq: [
      {
        q: 'Сравниваются ли элементы массива поэлементно?',
        a: 'Да. Элементы массива сравниваются по индексу. Если элемент вставлен или удалён, все последующие индексы сдвигаются и отображаются как изменения. Для больших массивов это может дать объёмный вывод.',
      },
      {
        q: 'Что означает нотация пути?',
        a: 'Пути используют dot-нотацию для ключей объектов (a.b.c) и скобочную нотацию для индексов массивов (items[2].name). Полный путь точно указывает место изменения в структуре.',
      },
      {
        q: 'Раскрываются ли вложенные объекты?',
        a: 'Да. Если значение-объект изменилось, diff рекурсивно входит в него и показывает отдельные изменения полей, а не весь объект целиком. На листовом уровне отображаются только примитивы.',
      },
    ],
  },

  'chmod-calculator': {
    about:
      'Права доступа Unix хранятся в виде 9-битной маски, разделённой на три группы — владелец, группа, остальные — каждая с тремя битами: чтение (4), запись (2), выполнение (1). Сумма битов даёт одну восьмеричную цифру на группу, образуя привычную трёхзначную запись: 755 или 644. Инструмент позволяет переключать права через чекбоксы или вводить восьмеричное значение напрямую — оба представления всегда синхронизированы.',
    useCases: [
      'Сформировать точную команду chmod перед выполнением на сервере',
      'Декодировать восьмеричную строку прав из вывода ls -l в понятный формат',
      'Установить безопасные права для файлов веб-сервера (644 для файлов, 755 для директорий)',
      'Объяснить концепцию прав Unix при введении в курс дела новых разработчиков',
    ],
    faq: [
      {
        q: 'Что означает бит выполнения у директории?',
        a: 'Для директории бит выполнения управляет возможностью войти в неё (cd) и обращаться к содержимому. Без него даже директория с правом чтения отказывает в доступе к файлам.',
      },
      {
        q: 'В чём разница между 755 и 777?',
        a: '755 даёт владельцу полный доступ (rwx), а всем остальным — чтение и выполнение (r-x). Это стандарт для исполняемых файлов и директорий. 777 даёт всем право записи — это риск безопасности на общих системах.',
      },
      {
        q: 'Почему chmod 644 записывается тремя цифрами, а не четырьмя?',
        a: 'chmod принимает 3 или 4 восьмеричные цифры. Опциональная ведущая цифра управляет специальными битами: setuid (4), setgid (2) и sticky (1). Большинству файлов нужны только три цифры прав. Калькулятор показывает трёхзначный формат.',
      },
    ],
  },

  'url-parser': {
    about:
      'Каждый URL — структурированная строка по RFC 3986, состоящая из схемы (https), authority (хост + опциональный порт), пути, строки запроса и фрагмента. Инструмент использует нативный URL API браузера для разбора любого валидного URL на компоненты и отображает все query-параметры в виде таблицы ключ/значение.',
    useCases: [
      'Проверить OAuth redirect URI — убедиться, что все обязательные параметры присутствуют',
      'Отладить падающий API-запрос, проверив правильность кодирования query-строки',
      'Извлечь hostname из списка полных URL для анализа доменов',
      'Разобраться в структуре сложного URL со многими вложенными query-параметрами',
    ],
    faq: [
      {
        q: 'Работает ли с URL без схемы?',
        a: 'Да. Если вставить URL без https://, инструмент автоматически добавит его для парсинга. Чтобы увидеть точную оригинальную схему, вставьте полный URL.',
      },
      {
        q: 'Декодируются ли percent-encoded символы?',
        a: 'Значения query-параметров отображаются в декодированном виде (например, %20 → пробел). Сырое закодированное значение видно в строке search. Это соответствует тому, как браузеры и серверы интерпретируют значения на практике.',
      },
      {
        q: 'Что такое origin?',
        a: 'Origin — комбинация схемы, хоста и порта: https://example.com:8443. Это граница безопасности браузера, используемая политикой same-origin. Два URL с одинаковым origin могут свободно обмениваться куками и делать cross-frame вызовы.',
      },
    ],
  },

  'env-json': {
    about:
      '.env-файлы хранят переменные окружения в виде пар KEY=VALUE, по одной на строку. Строки, начинающиеся с #, являются комментариями, пустые строки игнорируются. Значения могут быть обёрнуты в одинарные или двойные кавычки. Инструмент конвертирует .env-текст в JSON-объекты и обратно — удобно для сравнения конфигов окружений или миграции в менеджер секретов.',
    useCases: [
      'Конвертировать .env-файл, экспортированный из Vercel или Render, в JSON для программной обработки',
      'Заполнить секцию environment Docker Compose, конвертировав JSON-экспорт секретов в .env',
      'Сравнить два .env-файла, конвертировав оба в JSON и использовав diff-инструмент',
      'Сгенерировать .env-шаблон из JSON-схемы с примерами значений',
    ],
    faq: [
      {
        q: 'Сохраняются ли комментарии при конвертации .env → JSON?',
        a: 'Нет. Комментарии (строки, начинающиеся с #) и пустые строки пропускаются при парсинге — в JSON нет синтаксиса для комментариев. В обратном направлении (JSON → .env) комментарии также не добавляются.',
      },
      {
        q: 'Что происходит с закавыченными значениями?',
        a: 'Значения в одинарных и двойных кавычках раскавычиваются при парсинге: KEY="hello world" превращается в {"KEY": "hello world"}. В обратном направлении значения, содержащие пробелы, # или =, автоматически оборачиваются в двойные кавычки.',
      },
      {
        q: 'Поддерживаются ли многострочные значения?',
        a: 'Нет. Каждая строка считается отдельной парой key=value. Многострочные значения (с экранированными переносами или переносами в кавычках) — нестандартное расширение, которое здесь не поддерживается. Приведите такие значения к одной строке перед конвертацией.',
      },
    ],
  },
};
