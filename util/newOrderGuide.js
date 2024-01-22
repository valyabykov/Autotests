import { test, expect } from '@playwright/test'

import { MY_ACCOUNT_MODAL } from '@selector/modal/myAccountModal'
import { ORDER_GUIDES } from '@selector/page/orderguides'
import { NEW_ORDER_GUIDE_MODAL } from '@selector/modal/newOrderGuideModal'
import { HEADER } from '@selector/block/header'
import { order_guide_name } from '@pool'

export async function newOrderGuide(page, name) {
    await test.step('Click on My Account button', async () => {
        await page.click(HEADER.accountButton)

        await expect(page.locator(MY_ACCOUNT_MODAL.contentsOpen)).toBeVisible()
    })
    await test.step('Click on OG item', async () => {
        await page.click(MY_ACCOUNT_MODAL.orderGuides)

        await expect(page.locator(ORDER_GUIDES.newOrderGuideButton)).toBeVisible()
    })
    await test.step('Click on New Order Guide button', async () => {
        await page.click(ORDER_GUIDES.newOrderGuideButton)

        await expect(page.locator(NEW_ORDER_GUIDE_MODAL.nameInput)).toBeVisible()
    })
    await test.step('Fill Order Guide name', async () => {
        await page.locator(NEW_ORDER_GUIDE_MODAL.nameInput).fill(name)
    })
    await test.step('Click on the Save button', async () => {
        const orderGuideName = ORDER_GUIDES.orderGuideName[0].replace(order_guide_name[0].name, name)

        await page.click(NEW_ORDER_GUIDE_MODAL.confirmButton)
        await page.locator(NEW_ORDER_GUIDE_MODAL.contentModal).isHidden()

        await expect(page.locator(orderGuideName)).toBeVisible()
    })
}
