import { test, expect } from '@playwright/test'

import { HEADER } from '@selector/block/header'
import { PLP_CATALOG } from '@selector/page/plpCatalog'
import { TOAST } from '@selector/toast/toast'

export async function addProductToCart(page) {
    await test.step('Hover the mouse over the dropdown', async () => {
        await page.hover(HEADER.catalogButton)

        await expect(page.locator(HEADER.megaMenuDropDown)).toBeVisible()
    })
    await test.step('Click on catalog category', async () => {
        await page.locator(HEADER.secondCategory).click()
        await page.waitForSelector(PLP_CATALOG.firstItem)

        await expect(page.locator(PLP_CATALOG.filterHeader)).toBeVisible()
        await expect(page.locator(PLP_CATALOG.firstItem)).toBeVisible()
    })
    await test.step('Click Add to Cart', async () => {
        await page.locator(PLP_CATALOG.firstItem).locator(PLP_CATALOG.addToCartButton).click()

        await expect(page.locator(TOAST.successToast)).toBeVisible()
    })
}
