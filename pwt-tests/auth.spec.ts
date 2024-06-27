import { test, expect } from '@playwright/test';

test('auth test', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  await page.fill('input[name="email"]', 'username@mail.com');
  await page.fill('input[name="password"]', '123456');

  await page.click('button[type="submit"]');

  await page.isVisible(
    "text='Пароль должен состоять как минимум из одной буквы и одной цифры'"
  );

  expect(page.url()).toBe('http://localhost:5173/login');
  await page.goto('http://localhost:5173/login');

  await page.fill('input[name="email"]', 'username@mail.com');
  await page.fill('input[name="password"]', 'The123456');

  await Promise.all([
    page.waitForURL('http://localhost:5173'),
    page.click('button[type="submit"]'),
  ]);
});
