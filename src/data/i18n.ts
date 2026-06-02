export type Lang = 'en' | 'ru';

export interface ToolPageUI {
  breadcrumbTools: string;
  apiToggleLabel: string;
  comingSoon: string;
  toolComingSoon: string;
  proUpgradeLabel: string;
  proUpgradePath: string;
}

export const TOOL_UI: Record<Lang, ToolPageUI> = {
  en: {
    breadcrumbTools: 'tools',
    apiToggleLabel: 'integrate via API',
    comingSoon: 'coming soon',
    toolComingSoon: '// tool coming soon',
    proUpgradeLabel: 'upgrade →',
    proUpgradePath: '/premium/',
  },
  ru: {
    breadcrumbTools: 'инструменты',
    apiToggleLabel: 'интеграция через API',
    comingSoon: 'скоро',
    toolComingSoon: '// инструмент скоро появится',
    proUpgradeLabel: 'подробнее →',
    proUpgradePath: '/premium/',
  },
};

export const PRO_HINTS: Record<Lang, Record<string, string[]>> = {
  en: {
    'json-formatter': ['bulk formatting', 'files over 100 MB'],
    base64: ['bulk encode / decode', 'files over 5 MB'],
    'jwt-decoder': ['bulk token validation', 'history sync'],
    'uuid-generator': ['persistent presets', 'history sync'],
    'regex-tester': ['saved patterns', 'history sync'],
    'cron-parser': ['saved expressions', 'history sync'],
    'timestamp-converter': ['bulk conversion', 'history sync'],
    'url-encoder': ['bulk URL encoding', 'files over 5 MB'],
    'hash-generator': ['bulk file hashing', 'files over 100 MB'],
    'password-generator': ['team password policies', 'history sync'],
    'slug-generator': ['bulk slug generation', 'custom transliteration maps'],
    bcrypt: ['bulk password hashing', 'configurable pepper support'],
    'text-diff': ['3-way merge view', 'history sync'],
    'case-normalizer': ['bulk batch conversion', 'history sync'],
    'curl-converter': ['bulk conversion', 'HAR import'],
    'query-string-parser': ['bulk URL parsing', 'history sync'],
    'xml-json': ['schema validation', 'bulk conversion'],
    'html-entity-encoder': ['bulk encoding', 'files over 5 MB'],
    'mime-lookup': ['custom extension mapping', 'bulk lookup via API'],
    'number-base-converter': ['bulk conversion', 'history sync'],
    'string-inspector': ['history sync', 'bulk analysis via API'],
    'csv-json': ['bulk file conversion', 'files over 10 MB'],
  },
  ru: {
    'json-formatter': ['пакетное форматирование', 'файлы больше 100 МБ'],
    base64: ['пакетное кодирование', 'файлы больше 5 МБ'],
    'jwt-decoder': ['массовая валидация', 'синхронизация истории'],
    'uuid-generator': ['сохранённые пресеты', 'синхронизация истории'],
    'regex-tester': ['сохранённые паттерны', 'синхронизация истории'],
    'cron-parser': ['сохранённые выражения', 'синхронизация истории'],
    'timestamp-converter': ['пакетная конвертация', 'синхронизация истории'],
    'url-encoder': ['пакетное кодирование', 'файлы больше 5 МБ'],
    'hash-generator': ['хеширование пачкой', 'файлы больше 100 МБ'],
    'password-generator': ['политики паролей для команды', 'синхронизация истории'],
    'slug-generator': ['пакетная генерация slug', 'кастомные таблицы транслитерации'],
    bcrypt: ['пакетное хеширование', 'поддержка pepper'],
    'text-diff': ['трёхсторонний merge', 'синхронизация истории'],
    'case-normalizer': ['пакетная конвертация', 'синхронизация истории'],
    'curl-converter': ['пакетная конвертация', 'импорт HAR'],
    'query-string-parser': ['пакетный разбор URL', 'синхронизация истории'],
    'xml-json': ['валидация схемы', 'пакетная конвертация'],
    'html-entity-encoder': ['пакетное кодирование', 'файлы больше 5 МБ'],
    'mime-lookup': ['свои расширения', 'пакетный поиск через API'],
    'number-base-converter': ['пакетная конвертация', 'синхронизация истории'],
    'string-inspector': ['синхронизация истории', 'пакетный анализ через API'],
    'csv-json': ['пакетная конвертация файлов', 'файлы больше 10 МБ'],
  },
};
