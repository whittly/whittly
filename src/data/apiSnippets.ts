export type Snip = { curl: string; fetch: string; axios: string };

const B = 'https://api.whittly.dev/v1';
const K = '$WHITTLY_API_KEY';

function post(path: string, bodyInline: string, bodyPretty: string): Snip {
  const url = `${B}/${path}`;
  return {
    curl: `curl -sX POST '${url}' \\
  -H 'Authorization: Bearer ${K}' \\
  -H 'Content-Type: application/json' \\
  -d '${bodyInline}'`,
    fetch: `const res = await fetch('${url}', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + apiKey,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(${bodyPretty}),
});
const data = await res.json();`,
    axios: `const { data } = await axios.post(
  '${url}',
  ${bodyPretty},
  { headers: { Authorization: 'Bearer ' + apiKey } }
);`,
  };
}

function get(path: string, qs: string): Snip {
  const url = `${B}/${path}?${qs}`;
  return {
    curl: `curl -s '${url}' \\
  -H 'Authorization: Bearer ${K}'`,
    fetch: `const res = await fetch(
  '${url}',
  { headers: { Authorization: 'Bearer ' + apiKey } }
);
const data = await res.json();`,
    axios: `const { data } = await axios.get(
  '${url}',
  { headers: { Authorization: 'Bearer ' + apiKey } }
);`,
  };
}

export const API_SNIPPETS: Record<string, Snip> = {
  'json-formatter': post(
    'json/format',
    '{"input":"[1,2,3]","indent":2}',
    '{ input: "[1,2,3]", indent: 2 }'
  ),
  base64: post('base64/encode', '{"input":"hello world"}', '{ input: "hello world" }'),
  'jwt-decoder': post(
    'jwt/decode',
    '{"token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGljZSJ9.abc"}',
    '{ token: "eyJhbGciOiJIUzI1NiJ9..." }'
  ),
  'uuid-generator': get('uuid', 'version=4&count=5'),
  'regex-tester': post(
    'regex/test',
    '{"pattern":"\\\\d+","flags":"g","input":"order 42"}',
    '{ pattern: "\\\\d+", flags: "g", input: "order 42" }'
  ),
  'cron-parser': post(
    'cron/parse',
    '{"expression":"*/5 9-17 * * 1-5"}',
    '{ expression: "*/5 9-17 * * 1-5" }'
  ),
  'timestamp-converter': post(
    'timestamp/convert',
    '{"input":"1716000000"}',
    '{ input: "1716000000" }'
  ),
  'url-encoder': post(
    'url/encode',
    '{"input":"https://ex.com/hello world?q=a b"}',
    '{ input: "https://ex.com/hello world?q=a b" }'
  ),
  'hash-generator': post(
    'hash',
    '{"input":"hello world","algorithm":"sha256"}',
    '{ input: "hello world", algorithm: "sha256" }'
  ),
  'password-generator': get(
    'password',
    'length=20&upper=true&lower=true&digits=true&symbols=true&count=5'
  ),
  'slug-generator': post(
    'slug',
    '{"input":"Hello World! это заголовок","separator":"-"}',
    '{ input: "Hello World! это заголовок", separator: "-" }'
  ),
  bcrypt: post(
    'bcrypt/hash',
    '{"password":"hunter2","cost":10}',
    '{ password: "hunter2", cost: 10 }'
  ),
  'html-entity-encoder': post(
    'html/encode',
    '{"input":"<div class=\\"hello\\">World &amp; Co</div>"}',
    '{ input: "<div class=\\"hello\\">World &amp; Co</div>" }'
  ),
  'xml-json': post(
    'xml/to-json',
    '{"input":"<root><item id=\\"1\\">hello</item></root>"}',
    '{ input: "<root><item id=\\"1\\">hello</item></root>" }'
  ),
  'curl-converter': post(
    'curl/convert',
    '{"curl":"curl -X POST https://api.example.com -H \'Content-Type: application/json\' -d \'{}\'","target":"fetch"}',
    '{ curl: "curl -X POST ...", target: "fetch" }'
  ),
  'query-string-parser': post(
    'querystring/parse',
    '{"input":"https://example.com?name=alice&role=admin"}',
    '{ input: "https://example.com?name=alice&role=admin" }'
  ),
  'text-diff': post(
    'text/diff',
    '{"a":"hello\\nworld","b":"hello\\nearth"}',
    '{ a: "hello\\nworld", b: "hello\\nearth" }'
  ),
  'case-normalizer': post(
    'case/convert',
    '{"input":"myVariableName","formats":["snake","kebab","pascal"]}',
    '{ input: "myVariableName", formats: ["snake","kebab","pascal"] }'
  ),
  'number-base-converter': post(
    'base/convert',
    '{"input":"255","fromBase":10,"toBases":[2,8,16]}',
    '{ input: "255", fromBase: 10, toBases: [2, 8, 16] }'
  ),
  'string-inspector': post(
    'string/inspect',
    '{"input":"hello, world!"}',
    '{ input: "hello, world!" }'
  ),
  'csv-json': post(
    'csv/to-json',
    '{"input":"name,age\\nalice,30\\nbob,25","delimiter":",","headers":true}',
    '{ input: "name,age\\nalice,30\\nbob,25", delimiter: ",", headers: true }'
  ),
};
