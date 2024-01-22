import { test, expect } from '@playwright/test'

import { openHomepage } from '@util/openHomepage'
import { PLP_CATALOG } from '@selector/page/plpCatalog'
import { PLP_WIZARD } from '@selector/page/plpWizard'
import { confirmCookies } from '@util/confirmCookies'

test.describe('Not Logged', () => {
    test.beforeEach(async ({ page }) => {
        await openHomepage(page)
        await confirmCookies(page)
    })
    test('Go to catalog category', async ({ page }) => {
        await test.step('Hover the mouse over the dropdown', async () => {
            await page.hover(HEADER.catalogButton)

            await expect(page.locator(HEADER.megaMenuDropDown)).toBeVisible()
        })
        await test.step('Click on catalog category', async () => {
            await page.locator(HEADER.secondCategory).click()

            await expect(page.locator(PLP_CATALOG.filterHeader)).toBeVisible()
        })
    })

    test('Go to wizard category', async ({ page }) => {
        await test.step('Hover the mouse over the dropdown', async () => {
            await page.hover(HEADER.catalogButton)

            await expect(page.locator(HEADER.megaMenuDropDown)).toBeVisible()
        })
        await test.step('Click on wizard category', async () => {
            await page.locator(HEADER.firstCategory).click()

            await expect(page.locator(PLP_WIZARD.browseCategoryHeader)).toBeVisible()
        })
    })

    test('Go to sub category', async ({ page }) => {
        await test.step('Hover the mouse over the dropdown', async () => {
            await page.hover(HEADER.catalogButton)

            await expect(page.locator(HEADER.megaMenuDropDown)).toBeVisible()
        })
        await test.step('Hover the mouse over the category', async () => {
            await page.hover(HEADER.secondCategory)
        })
        await test.step('Click on sub category', async () => {
            const secondCategory = page.locator(HEADER.secondCategory)
            const firstSubCategory = secondCategory.locator(HEADER.firstSubCategory)
            await firstSubCategory.click()

            await expect(page.locator(PLP_CATALOG.filterHeader)).toBeVisible()
        })
    })
})
