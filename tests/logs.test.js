
import { test, expect } from '@playwright/test';

test('Log headings', async ({ page }) => {
    await page.goto('https://playwright.dev/community/welcome');
  
    const headings = await page.evaluate(() => {
      const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      return Array.from(elements).map(el => ({ tag: el.tagName, text: el.innerText }));
    });
  
    console.log('Headings on the page:', headings);
  });
  
  
  test('Log roles', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    const roles = await page.evaluate(() => {
      const elements = document.querySelectorAll('[role]');
      return Array.from(elements).map(el => ({ role: el.getAttribute('role'), name: el.innerText }));
    });
  
    console.log('Roles on the page:', roles);
  });
  
  test('Log names', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    const names = await page.evaluate(() => {
      const elements = document.querySelectorAll('[aria-label], [aria-labelledby]');
      return Array.from(elements).map(el => ({
        tag: el.tagName,
        ariaLabel: el.getAttribute('aria-label'),
        ariaLabelledby: el.getAttribute('aria-labelledby'),
        text: el.innerText
      }));
    });
  
    console.log('Elements with ARIA labels or labelledby:', names);
  });
  test('Log all links', async ({ page }) => {
    // Go to the desired URL
    await page.goto('https://playwright.dev/');
  
    // Extract all link elements and their href attributes
    const links = await page.evaluate(() => {
      // Get all <a> elements
      const linkElements = document.querySelectorAll('a');
      
      // Map through the link elements to get their href and text
      return Array.from(linkElements).map(el => ({
        text: el.innerText.trim(), // Get the text content of the link
        href: el.getAttribute('href') // Get the href attribute
      }));
    });
  
    // Log the links to the console
    console.log('Links on the page:', links);
  });
  