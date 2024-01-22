import { test, expect } from '@playwright/test'

import { openHomepage } from '@util/openHomepage'
import { HEADER } from '@selector/block/header'
import { TOAST } from '@selector/toast/toast'
import { QUICK_ORDER } from '@selector/page/quickorder'
import { LOGIN_MODAL } from '@selector/modal/loginModal'
import { MINI_CART_MODAL } from '@selector/modal/miniCartModal'
import { ORDER_GUIDES } from '@selector/page/orderGuides'
import { login } from '@util/login'
import { MY_ACCOUNT_MODAL } from '@selector/modal/myAccountModal'
import { confirmCookies } from '@util/confirmCookies'

test.describe('Not Logged', () => {
    test.beforeEach(async ({ page }) => {
        await openHomepage(page)
        await confirmCookies(page)
    })
    test('Quick Order button', async ({ page }) => {
        await test.step('click on QO button', async () => {
            await page.click(HEADER.quickOrderButton)

            await expect(page.locator(QUICK_ORDER.downloadSampleButtom)).toBeVisible()
        })
    })

    test('Order Guide button', async ({ page }) => {
        await test.step('click on QO button', async () => {
            await page.click(HEADER.orderGuideButton)

            await expect(page.locator(`"${TOAST.infoToastText}"`)).toBeVisible()
        })
    })

    test('Sign In buttton', async ({ page }) => {
        await test.step('click on Account button', async () => {
            await page.click(HEADER.accountButton)

            await expect(page.locator(LOGIN_MODAL.emailInput)).toBeVisible()
        })
    })

    test('Mini Cart button', async ({ page }) => {
        await test.step('click on Mini Cart button', async () => {
            await page.click(HEADER.miniCartButton)

            await expect(page.locator(MINI_CART_MODAL.emptyMiniCart)).toBeVisible()
        })
    })
})

test.describe('Logged', () => {
    test.beforeEach(async ({ page }) => {
        await openHomepage(page)
        await confirmCookies(page)
        await login(page)
    })
    test('Quick Order button', async ({ page }) => {
        await test.step('click on QO button', async () => {
            await page.click(HEADER.quickOrderButton)

            await expect(page.locator(QUICK_ORDER.downloadSampleButtom)).toBeVisible()
        })
    })

    test('Order Guide button', async ({ page }) => {
        await test.step('click on QO button', async () => {
            await page.click(HEADER.orderGuideButton)

            await expect(page.locator(ORDER_GUIDES.newOrderGuideButton)).toBeVisible()
        })
    })

    test('My Account buttton', async ({ page }) => {
        await test.step('click on Account button', async () => {
            await page.click(HEADER.accountButton)

            await expect(page.locator(MY_ACCOUNT_MODAL.contentsOpen)).toBeVisible()
        })
    })

    test('Mini Cart button', async ({ page }) => {
        await test.step('click on Mini Cart button', async () => {
            await page.click(HEADER.miniCartButton)

            await expect(page.locator(MINI_CART_MODAL.emptyMiniCart)).toBeVisible()
        })
    })
})
