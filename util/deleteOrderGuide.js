import { test, expect } from '@playwright/test'

import { ORDER_GUIDES } from '@selector/page/orderguides'
import { CONFIRMATION_MODAL } from '@selector/modal/confirmationModal'

export async function deleteOrderGuide(page, element) {
    await test.step('Click on kebab menu', async () => {
        await element.locator(ORDER_GUIDES.kebabMenuButton).click()
        await expect(page.locator(ORDER_GUIDES.kebabMenuDropdown)).toBeVisible()
    })

    await test.step('Click on Delete button', async () => {
        await page.locator(ORDER_GUIDES.kebabMenuDropdown).locator(ORDER_GUIDES.deleteButton).click()
        await expect(page.locator(CONFIRMATION_MODAL.openModal)).toBeVisible()
    })

    await test.step('Click on Delete button in confirmation modal', async () => {
        await page.click(CONFIRMATION_MODAL.deleteButton)
    })
}
