import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: '18' }).first().click();
  await page.getByRole('button', { name: 'panier' }).click();

  const patesElement = page.getByText('pates');
  const quantityTextElement = page.getByText('Quantity:');

  expect(patesElement).not.toBeNull();
  expect(quantityTextElement).not.toBeNull();
});