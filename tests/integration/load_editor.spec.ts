
/* 
  This is just a simple test to check if the app is running.
*/

import { test, expect } from '@playwright/test';

test('load editor', async ({ page }) => {

  await page.goto('/');
  await expect(page.locator('.main_container')).toBeVisible();
});

test('load editor tools', async ({ page }) => {

  await page.goto('/');
  
  const panelsContainer = page.locator('.main_container aside')

  await expect(panelsContainer).toBeVisible();

  // Expect the controllers panel
    await expect(panelsContainer.locator('.global_panel')).toBeVisible();

  // Expect the add-element panel, by default it must be hidden
    await expect(panelsContainer.locator('.add_element_panel')).toBeHidden()

  // Expect the styles panel, by default it must be hidden
   await expect(panelsContainer.locator('.styles_panel')).toBeHidden();
});

test('rendering process', async ({ page }) => {

  await page.goto('/');

  const resultContainer = page.locator('.main_container .container_app')
  const panelsContainer = page.locator('.main_container aside')

  await expect(resultContainer).toBeVisible();
  await expect(panelsContainer).toBeVisible();

  const pageElement = resultContainer.locator('.app')
  const stylesPanel = panelsContainer.locator('.styles_panel')

  // Expect the first element (page)
    await expect(pageElement).toBeVisible();

  // Click the page-element to show the styles panel
    await pageElement.click()
    await expect(stylesPanel).toBeVisible();

  const paddingButton = stylesPanel.getByRole('button', { name: 'Padding' })
  const paddingOptionsSection = stylesPanel.locator('.app--options_section')

  // Expect the padding button
    await expect(paddingButton).toBeVisible();

  // Show padding options
    await paddingButton.click()
    await expect(paddingOptionsSection).toBeVisible();

  // Update the page-element padding
    const paddingOptions = paddingOptionsSection.locator('input')
    
    const paddingOption0 = paddingOptions.nth(0)
    const paddingOption1 = paddingOptions.nth(1)
    const paddingOption2 = paddingOptions.nth(2)
    const paddingOption3 = paddingOptions.nth(3)

    await paddingOption0.fill('0')
    await paddingOption1.fill('0')
    await paddingOption2.fill('0')
    await paddingOption3.fill('0')

    await expect(pageElement).toHaveCSS('padding-top', '0px')
    await expect(pageElement).toHaveCSS('padding-left', '0px')
    await expect(pageElement).toHaveCSS('padding-right', '0px')
    await expect(pageElement).toHaveCSS('padding-bottom', '0px')
});