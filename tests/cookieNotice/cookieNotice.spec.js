import { test, expect } from '@playwright/test'

import { COOKIE_MODAL } from '@selector/modal/cookieModal'
import { openHomepage } from '@util/openHomepage'

test.describe('Cookie Modal', () => {
    test.beforeEach(async ({ page }) => {
        await openHomepage(page)
    })

    test('Confirm the use of cookies', async ({ page }) => {
        await test.step('Click confirm button', async () => {
            await page.locator(COOKIE_MODAL.openModal).isVisible()
            await page.click(COOKIE_MODAL.confirmButton)

            await expect(page.locator(COOKIE_MODAL.openModal)).toBeHidden()
        })
    })
})
