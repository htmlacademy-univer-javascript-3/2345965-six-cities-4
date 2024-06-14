import { test, expect } from '@playwright/test';

test('Форма отправки комментария (неавторизован/авторизован)', async ({
    page,
  }) => {
    const REVIEW_TEXT =
      'Очень хорошее место, отдыхали всей семьёй! Будем тут ещё раз, привезём бабулю и кота. Курорт 10 из 10!!!!';
    const RATING = 'perfect';
    const isCommentFormVisible = async () => await page.isVisible('.reviews__form')

    await page.goto('http://localhost:5173');

    await page.waitForSelector('.cities__card');
    await page.locator('.place-card__name').first().click();
    await page.waitForSelector('.offer__inside-list');

    const hasCommentForm = await isCommentFormVisible();
    expect(hasCommentForm).toBeFalsy();

    await page.goto('http://localhost:5173/login');

    await page.fill('input[name="email"]', 'AlinaTest@mail.ru');
    await page.fill('input[name="password"]', '52valid');
    await page.click('button[type="submit"]');

    await page.waitForSelector('.cities__card');

    await page.locator('.place-card__name').first().click();

    await page.waitForSelector('.offer__inside-list');
    const hasCommentFormAfterAuth = await isCommentFormVisible();
    expect(hasCommentFormAfterAuth).toBeTruthy();

    const commentForm = await page.locator('.reviews__form');
    expect(commentForm).toBeTruthy();
    await page.fill('[name="review"]', REVIEW_TEXT);
    await page.getByTitle(RATING).click();

    await Promise.all([
      page.waitForResponse(
        (resp) => resp.url().includes('/comments') && resp.status() === 201
      ),
      page.click('button[type="submit"]'),
    ]);

    const reviewText = await page
      .locator('.reviews__text')
      .first()
      .textContent();
    const reviewAuthor = (await page
      .locator('.reviews__user-name')
      .first()
      .textContent())
      ?.trim();
    const reviewRating = await page
      .locator('.reviews__stars>span')
      .first()
      .getAttribute('style');

    expect(reviewText).toBe(REVIEW_TEXT);
    expect(reviewAuthor).toBe('AlinaTest');
    expect(reviewRating).toBe('width: 100%;');
  });
