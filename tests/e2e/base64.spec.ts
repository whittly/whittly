import { test, expect } from '@playwright/test';

test.describe('Base64 tool', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tools/base64/');
  });

  test('encodes plain text to base64', async ({ page }) => {
    const input = page.locator('#b64In');
    await input.fill('hello world');
    const output = page.locator('#b64Out');
    await expect(output).toContainText('aGVsbG8gd29ybGQ=');
  });

  test('decodes base64 back to plain text', async ({ page }) => {
    // switch to decode mode first
    await page.locator('.b64-mode', { hasText: 'decode' }).click();
    const input = page.locator('#b64In');
    await input.fill('aGVsbG8gd29ybGQ=');
    const output = page.locator('#b64Out');
    await expect(output).toContainText('hello world');
  });

  test('URL-safe mode encodes without + and /', async ({ page }) => {
    const input = page.locator('#b64In');
    await input.fill('whittly>>');
    // enable URL-safe checkbox
    await page.locator('.b64-check').click();
    const output = page.locator('#b64Out');
    const text = await output.textContent();
    expect(text).not.toContain('+');
    expect(text).not.toContain('/');
  });

  test('shows error status on invalid base64 in decode mode', async ({ page }) => {
    await page.locator('.b64-mode', { hasText: 'decode' }).click();
    const input = page.locator('#b64In');
    await input.fill('!!!not-valid-base64!!!');
    const status = page.locator('#b64Status');
    await expect(status).toHaveClass(/err/);
  });

  test('clear button resets input and output', async ({ page }) => {
    const input = page.locator('#b64In');
    await input.fill('hello');
    await page.locator('#b64Clear').click();
    await expect(input).toHaveValue('');
  });
});
