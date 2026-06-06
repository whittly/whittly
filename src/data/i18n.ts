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
    'password-generator': ['history sync', 'bulk generation via API'],
    'slug-generator': ['bulk slug generation', 'history sync'],
    bcrypt: ['bulk password hashing', 'history sync'],
    'text-diff': ['history sync', 'bulk diff via API'],
    'case-normalizer': ['bulk batch conversion', 'history sync'],
    'curl-converter': ['bulk conversion', 'HAR file import'],
    'query-string-parser': ['bulk URL parsing', 'history sync'],
    'xml-json': ['bulk conversion', 'history sync'],
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
    'password-generator': ['синхронизация истории', 'пакетная генерация через API'],
    'slug-generator': ['пакетная генерация slug', 'синхронизация истории'],
    bcrypt: ['пакетное хеширование', 'синхронизация истории'],
    'text-diff': ['синхронизация истории', 'пакетный diff через API'],
    'case-normalizer': ['пакетная конвертация', 'синхронизация истории'],
    'curl-converter': ['пакетная конвертация', 'импорт HAR-файлов'],
    'query-string-parser': ['пакетный разбор URL', 'синхронизация истории'],
    'xml-json': ['пакетная конвертация', 'синхронизация истории'],
    'html-entity-encoder': ['пакетное кодирование', 'файлы больше 5 МБ'],
    'mime-lookup': ['свои расширения', 'пакетный поиск через API'],
    'number-base-converter': ['пакетная конвертация', 'синхронизация истории'],
    'string-inspector': ['синхронизация истории', 'пакетный анализ через API'],
    'csv-json': ['пакетная конвертация файлов', 'файлы больше 10 МБ'],
  },
};
