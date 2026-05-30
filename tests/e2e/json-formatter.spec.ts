import { test, expect } from '@playwright/test';

const VALID_JSON = '{"name":"whittly","version":1,"tags":["dev","tools"]}';
const INVALID_JSON = '{"broken": }';

test.describe('JSON Formatter tool', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tools/json-formatter/');
  });

  test('formats valid JSON with 2-space indent', async ({ page }) => {
    await page.locator('#jfIn').fill(VALID_JSON);
    const output = page.locator('#jfOut');
    await expect(output).toContainText('"name": "whittly"');
    await expect(output).toContainText('"version": 1');
    // status shows valid
    await expect(page.locator('#jfStatus')).toHaveClass(/ok/);
  });

  test('switches to 4-space indent', async ({ page }) => {
    await page.locator('#jfIn').fill(VALID_JSON);
    await page.locator('.jf-mode', { hasText: '4 spaces' }).click();
    const output = await page.locator('#jfOut').textContent();
    // 4-space indent means lines start with 4 spaces
    expect(output).toMatch(/^ {4}"/m);
  });

  test('minifies JSON', async ({ page }) => {
    await page.locator('#jfIn').fill(VALID_JSON);
    await page.locator('.jf-mode', { hasText: /minif/ }).click();
    const output = await page.locator('#jfOut').textContent();
    expect(output).not.toMatch(/\n/);
  });

  test('shows error on invalid JSON', async ({ page }) => {
    await page.locator('#jfIn').fill(INVALID_JSON);
    const status = page.locator('#jfStatus');
    await expect(status).toHaveClass(/err/);
    await expect(page.locator('#jfOut')).toContainText('//');
  });

  test('copy button copies output to clipboard', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.locator('#jfIn').fill(VALID_JSON);
    await page.locator('#jfCopy').click();
    const copied = await page.evaluate(() => navigator.clipboard.readText());
    const parsed = JSON.parse(copied);
    expect(parsed.name).toBe('whittly');
  });

  test('clear button resets everything', async ({ page }) => {
    await page.locator('#jfIn').fill(VALID_JSON);
    await page.locator('#jfClear').click();
    await expect(page.locator('#jfIn')).toHaveValue('');
    await expect(page.locator('#jfStatus')).not.toHaveClass(/ok/);
  });

  test('mobile viewport renders tool', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/tools/json-formatter/');
    await page.locator('#jfIn').fill(VALID_JSON);
    await expect(page.locator('#jfStatus')).toHaveClass(/ok/);
  });
});
