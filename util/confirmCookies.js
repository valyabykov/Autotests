import { test, expect } from '@playwright/test'

import { COOKIE_MODAL } from '@selector/modal/cookieModal'

export async function confirmCookies(page) {
    await test.step('Click confirm button', async () => {
        await page.locator(COOKIE_MODAL.openModal).isVisible()
        await page.click(COOKIE_MODAL.confirmButton)

        await expect(page.locator(COOKIE_MODAL.openModal)).toBeHidden()
    })
}
