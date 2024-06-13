import { test, expect } from '@playwright/test';

test('Авторизация валидна/невалидна', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  await page.fill('input[name="email"]', 'AlinaTest@mail.ru');
  await page.fill('input[name="password"]', '52');

  await page.click('button[type="submit"]');

  await page.isVisible(
  "text='В пароле должны быть по крайней мере одна английская буква и одна цифра'"
  );

  expect(page.url()).toBe('http://localhost:5173/login');
  await page.goto('http://localhost:5173/login');

  await page.fill('input[name="email"]', 'AlinaTest@mail.ru');
  await page.fill('input[name="password"]', 'thisIs52');

  await Promise.all([
  page.waitForURL('http://localhost:5173'),
  page.click('button[type="submit"]'),
  ]);
});
