export type Category =
  | 'convert'
  | 'format'
  | 'encode'
  | 'generate'
  | 'text'
  | 'network'
  | 'image'
  | 'data'
  | 'java';

export interface Tool {
  cat: Category;
  icon: string;
  name: string;
  desc: string;
  shortcut?: string;
  popular?: true;
  new?: true;
  soon?: true;
}

export interface CatMeta {
  label: string;
  desc: string;
}

export const CATALOG: Tool[] = [
  // convert
  {
    cat: 'convert',
    icon: 'ti-clock-2',
    name: 'timestamp converter',
    desc: 'unix ↔ date, iso 8601, utc, relative',
    shortcut: 'D',
    new: true,
  },
  {
    cat: 'convert',
    icon: 'ti-arrows-shuffle',
    name: 'yaml ↔ json',
    desc: 'two-way converter with comments preserved',
    new: true,
  },
  {
    cat: 'convert',
    icon: 'ti-table',
    name: 'csv ↔ json',
    desc: 'convert csv to json and back, auto-detect delimiter',
    new: true,
  },
  {
    cat: 'convert',
    icon: 'ti-arrows-shuffle',
    name: 'xml ↔ json',
    desc: 'parse xml into json and back',
    new: true,
  },
  {
    cat: 'convert',
    icon: 'ti-brand-typescript',
    name: 'json → typescript',
    desc: 'generate typescript interfaces from json',
    new: true,
  },
  {
    cat: 'convert',
    icon: 'ti-markdown',
    name: 'markdown → html',
    desc: 'render with github-flavor extensions',
    new: true,
  },
  {
    cat: 'convert',
    icon: 'ti-ruler',
    name: 'unit converter',
    desc: 'length, weight, temperature, data',
    new: true,
  },
  {
    cat: 'convert',
    icon: 'ti-palette',
    name: 'color converter',
    desc: 'hex, rgb, hsl, oklch, lab',
    new: true,
  },
  {
    cat: 'convert',
    icon: 'ti-number',
    name: 'number base converter',
    desc: 'decimal, binary, octal, hex and any custom base',
    new: true,
  },

  // format
  {
    cat: 'format',
    icon: 'ti-braces',
    name: 'json formatter',
    desc: 'prettify, minify, validate, tree view',
    shortcut: 'J',
    popular: true,
  },
  {
    cat: 'format',
    icon: 'ti-sql',
    name: 'sql formatter',
    desc: 'reformat any sql dialect cleanly',
    new: true,
  },
  {
    cat: 'format',
    icon: 'ti-brand-html5',
    name: 'html formatter',
    desc: 'indent, minify, validate',
    new: true,
  },
  {
    cat: 'format',
    icon: 'ti-brand-css3',
    name: 'css formatter',
    desc: 'expand, minify, clean up rules',
    new: true,
  },
  {
    cat: 'format',
    icon: 'ti-code',
    name: 'js beautifier',
    desc: 'unminify and format messy js',
    new: true,
  },

  // encode
  {
    cat: 'encode',
    icon: 'ti-binary',
    name: 'base64',
    desc: 'encode and decode, text or file',
    shortcut: 'B',
  },
  {
    cat: 'encode',
    icon: 'ti-link',
    name: 'url encoder',
    desc: 'percent-encode and decode url components',
    shortcut: 'L',
    new: true,
  },
  {
    cat: 'encode',
    icon: 'ti-shield-lock',
    name: 'hash generator',
    desc: 'sha-1, sha-256, sha-384, sha-512 via web crypto',
    shortcut: 'H',
    new: true,
  },
  {
    cat: 'encode',
    icon: 'ti-hash',
    name: 'hex encoder',
    desc: 'string ↔ hex bytes, choose encoding',
    new: true,
  },
  {
    cat: 'encode',
    icon: 'ti-code',
    name: 'html entity encoder',
    desc: 'escape and unescape html special characters',
    new: true,
  },
  {
    cat: 'encode',
    icon: 'ti-lock',
    name: 'bcrypt',
    desc: 'hash and verify passwords with bcrypt',
    new: true,
  },
  // {cat: 'encode', icon: 'ti-lock', name: 'hmac', desc: 'signed hashes with shared secret'},
  {
    cat: 'encode',
    icon: 'ti-key',
    name: 'jwt decoder',
    desc: 'decode tokens, inspect claims',
    shortcut: 'T',
    popular: true,
  },
  {
    cat: 'encode',
    icon: 'ti-signature',
    name: 'jwt sign',
    desc: 'sign jwt tokens with hs256, rs256 or es256 via webcrypto',
    new: true,
  },
  {
    cat: 'encode',
    icon: 'ti-certificate',
    name: 'ssl cert inspector',
    desc: 'parse pem certificates — subject, issuer, validity, fingerprint',
    new: true,
  },

  // generate
  {
    cat: 'generate',
    icon: 'ti-fingerprint',
    name: 'uuid generator',
    desc: 'v4, v7, nanoid, custom',
    shortcut: 'U',
    popular: true,
  },
  // {cat: 'generate', icon: 'ti-id', name: 'nanoid', desc: 'short, url-safe ids'},
  {
    cat: 'generate',
    icon: 'ti-text-size',
    name: 'lorem ipsum',
    desc: 'paragraphs, sentences, words, lists',
    new: true,
  },
  {
    cat: 'generate',
    icon: 'ti-password',
    name: 'password generator',
    desc: 'configurable length, charset, entropy score',
    shortcut: 'P',
    new: true,
  },
  {
    cat: 'generate',
    icon: 'ti-qrcode',
    name: 'qr code',
    desc: 'generate svg and png qr codes in-browser',
    new: true,
  },

  // text
  {
    cat: 'text',
    icon: 'ti-file-diff',
    name: 'text diff',
    desc: 'line-level diff between two texts',
    new: true,
  },
  {
    cat: 'text',
    icon: 'ti-letter-case',
    name: 'case normalizer',
    desc: 'camelCase, snake_case, kebab-case, PascalCase and more',
    new: true,
  },
  {
    cat: 'text',
    icon: 'ti-regex',
    name: 'regex tester',
    desc: 'live match highlighting, explain mode',
    shortcut: 'R',
    popular: true,
  },
  {
    cat: 'text',
    icon: 'ti-slash',
    name: 'slug generator',
    desc: 'url-safe slugs from any text, supports cyrillic',
    new: true,
  },
  {
    cat: 'text',
    icon: 'ti-text-scan-2',
    name: 'string inspector',
    desc: 'length, bytes, unicode, entropy, character frequency',
    new: true,
  },
  {
    cat: 'text',
    icon: 'ti-pilcrow',
    name: 'word counter',
    desc: 'characters, words, lines, reading time',
    new: true,
  },

  // network
  {
    cat: 'network',
    icon: 'ti-network',
    name: 'cidr calculator',
    desc: 'subnet math, range, mask, hosts',
    new: true,
  },
  {
    cat: 'network',
    icon: 'ti-world',
    name: 'dns lookup',
    desc: 'a, aaaa, mx, txt, ns records',
    soon: true,
  },
  {
    cat: 'network',
    icon: 'ti-server',
    name: 'http status',
    desc: 'codes, meanings, common pitfalls',
    new: true,
  },

  // image
  {
    cat: 'image',
    icon: 'ti-photo',
    name: 'image → webp',
    desc: 'batch convert, control quality',
    new: true,
  },
  {
    cat: 'image',
    icon: 'ti-vector-bezier-2',
    name: 'svg optimizer',
    desc: 'remove comments, round decimals, clean attributes',
    new: true,
  },

  // data
  {
    cat: 'data',
    icon: 'ti-clock-bolt',
    name: 'cron parser',
    desc: 'translate schedules to english',
    shortcut: 'C',
  },
  {
    cat: 'data',
    icon: 'ti-terminal',
    name: 'curl converter',
    desc: 'convert curl to fetch, axios, python requests',
    new: true,
  },
  {
    cat: 'data',
    icon: 'ti-list',
    name: 'query string parser',
    desc: 'parse and build url query strings',
    new: true,
  },
  {
    cat: 'data',
    icon: 'ti-file-type',
    name: 'mime lookup',
    desc: 'find the right mime type for any file extension',
    new: true,
  },

  // java
  {
    cat: 'java',
    icon: 'ti-coffee',
    name: 'json → java',
    desc: 'generate java pojos or records from json',
    new: true,
  },
  {
    cat: 'java',
    icon: 'ti-zoom-code',
    name: 'java decompiler',
    desc: 'decompile .class and .jar files back to java source',
    new: true,
  },
  {
    cat: 'java',
    icon: 'ti-arrows-shuffle',
    name: 'maven ↔ gradle',
    desc: 'convert dependencies between maven and gradle dsl',
    new: true,
  },
  {
    cat: 'java',
    icon: 'ti-file-code',
    name: 'properties ↔ yaml',
    desc: 'convert spring boot application.properties ↔ application.yml',
    new: true,
  },
  {
    cat: 'java',
    icon: 'ti-bug',
    name: 'java stack trace',
    desc: 'colorize and navigate java exceptions and stack traces',
    new: true,
  },
  {
    cat: 'java',
    icon: 'ti-activity',
    name: 'thread dump analyzer',
    desc: 'parse jstack output — thread states, deadlocks, blocking chains',
    new: true,
  },
  {
    cat: 'java',
    icon: 'ti-percentage',
    name: 'java format string',
    desc: 'live preview of String.format and MessageFormat output',
    new: true,
  },
  {
    cat: 'java',
    icon: 'ti-paint',
    name: 'java formatter',
    desc: 'format java code with google-java-format — google or aosp style',
    new: true,
  },
  {
    cat: 'java',
    icon: 'ti-binary-tree',
    name: 'bytecode viewer',
    desc: 'inspect jvm bytecode instructions from .class files with javap',
    new: true,
  },
  {
    cat: 'java',
    icon: 'ti-clock-code',
    name: 'quartz cron',
    desc: 'parse quartz cron expressions with seconds and L/W/# syntax',
    new: true,
  },
];

export const CAT_META: Record<Category, CatMeta> = {
  convert: { label: 'convert', desc: 'change shape, keep meaning' },
  format: { label: 'format', desc: 'make ugly code readable' },
  encode: { label: 'encode', desc: 'data in, data out, safely' },
  generate: { label: 'generate', desc: 'make something from nothing' },
  text: { label: 'text', desc: 'wrangle strings and prose' },
  network: { label: 'network', desc: 'http, dns, addressing' },
  image: { label: 'image', desc: 'pixels, vectors, bytes' },
  data: { label: 'data', desc: 'schedules, parsers, edge cases' },
  java: { label: 'java', desc: 'decompile, convert, debug java' },
};

export const CAT_ORDER: Category[] = [
  'convert',
  'format',
  'encode',
  'generate',
  'text',
  'java',
  'network',
  'image',
  'data',
];

function nameToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[↔→←]/g, '-')
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function toolSlug(tool: Tool): string {
  return nameToSlug(tool.name);
}
