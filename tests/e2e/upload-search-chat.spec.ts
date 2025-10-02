import { test, expect } from '@playwright/test';

test.describe('Upload, Search, and Chat E2E Tests', () => {
  test('should upload a document and search for it', async ({ page }) => {
    await page.goto('/');

    // Upload a document
    const filePath = 'path/to/your/test/document.pdf'; // Update with a valid file path
    await page.setInputFiles('input[type="file"]', filePath);
    await page.click('button[type="submit"]'); // Assuming there's a submit button for the upload

    // Wait for the upload to complete and check for success message
    await page.waitForSelector('.upload-success'); // Update with the actual success message selector
    expect(await page.locator('.upload-success').textContent()).toContain('Upload successful');

    // Perform a search
    const searchTerm = 'Your search term'; // Update with a relevant search term
    await page.fill('input[name="search"]', searchTerm);
    await page.click('button[type="search"]'); // Assuming there's a search button

    // Wait for search results and validate
    await page.waitForSelector('.search-results'); // Update with the actual results container selector
    const results = await page.locator('.search-results').textContent();
    expect(results).toContain('Expected result related to your search term'); // Update with expected result
  });

  test('should interact with the chat feature', async ({ page }) => {
    await page.goto('/');

    // Send a message in the chat
    const message = 'Hello, how can I use this application?'; // Update with a relevant message
    await page.fill('textarea[name="chat"]', message);
    await page.click('button[type="send"]'); // Assuming there's a send button

    // Wait for the response and validate
    await page.waitForSelector('.chat-response'); // Update with the actual response selector
    expect(await page.locator('.chat-response').textContent()).toContain('Expected response'); // Update with expected response
  });
});