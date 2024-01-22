import { test, expect } from '@playwright/test'

import { openHomepage } from '@util/openHomepage'
import { MY_ACCOUNT_MODAL } from '@selector/modal/myAccountModal'
import { ORDER_GUIDES } from '@selector/page/orderguides'
import { NEW_ORDER_GUIDE_MODAL } from '@selector/modal/newOrderGuideModal'
import { HEADER } from '@selector/block/header'
import { CONFIRMATION_MODAL } from '@selector/modal/confirmationModal'
import { login } from '@util/login'
import { order_guide_name } from '@pool'
import { EDIT_ORDER_GUIDE_MODAL } from '@selector/modal/editOrderGuideModal'
import { newOrderGuide } from '@util/newOrderGuide'
import { deleteOrderGuide } from '@util/deleteOrderGuide'
import { removeAllNodesByLocator } from '@util/removeAllNodesByLocator'
import { confirmCookies } from '@util/confirmCookies'

test.describe('Listing', () => {
    test.beforeEach(async ({ page }) => {
        await openHomepage(page)
        await confirmCookies(page)
        await login(page)
    })
    test('Create New Order Guide', async ({ page }) => {
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
            const name = order_guide_name[0].name

            await page.locator(NEW_ORDER_GUIDE_MODAL.nameInput).fill(name)
        })
        await test.step('Click on the Save button', async () => {
            await page.click(NEW_ORDER_GUIDE_MODAL.confirmButton)
            await page.locator(NEW_ORDER_GUIDE_MODAL.contentModal).isHidden()

            await Promise.all([expect(page.locator(ORDER_GUIDES.orderGuideName[0])).toBeVisible()])
        })
    })

    test('Create Order Guide with an existing name', async ({ page }) => {
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
            const name = order_guide_name[0].name

            await page.locator(NEW_ORDER_GUIDE_MODAL.nameInput).fill(name)
        })
        await test.step('Click on the Save button', async () => {
            const name = order_guide_name[0].name

            await page.click(NEW_ORDER_GUIDE_MODAL.confirmButton)

            await expect(page.locator(EDIT_ORDER_GUIDE_MODAL.alreadyExistErrorMessage(name))).toBeVisible()
        })
    })

    test('Change the name of the Order Guide', async ({ page }) => {
        await test.step('Click on My Account button', async () => {
            await page.click(HEADER.accountButton)

            await expect(page.locator(MY_ACCOUNT_MODAL.contentsOpen)).toBeVisible()
        })
        await test.step('Click on OG item', async () => {
            await page.click(MY_ACCOUNT_MODAL.orderGuides)

            await expect(page.locator(ORDER_GUIDES.newOrderGuideButton)).toBeVisible()
        })
        await test.step('Click on kebab menu', async () => {
            await page.locator(ORDER_GUIDES.firstOrderGuide).locator(ORDER_GUIDES.kebabMenuButton).click()

            await expect(page.locator(ORDER_GUIDES.kebabMenuDropdown)).toBeVisible()
        })
        await test.step('Click on Edit button', async () => {
            await page.locator(ORDER_GUIDES.kebabMenuDropdown).locator(ORDER_GUIDES.editButton).click()

            await expect(page.locator(EDIT_ORDER_GUIDE_MODAL.contentModal)).toBeVisible()
        })
        await test.step('Fill Order Guide name', async () => {
            const name = order_guide_name[1].name

            await page.locator(EDIT_ORDER_GUIDE_MODAL.nameInput).fill(name)
        })
        await test.step('Click on the Save button', async () => {
            await page.click(NEW_ORDER_GUIDE_MODAL.confirmButton)
            await page.locator(NEW_ORDER_GUIDE_MODAL.contentModal).isHidden()

            await expect(page.locator(ORDER_GUIDES.orderGuideName[1])).toBeVisible()
        })
    })

    test('Delete Order Guide ', async ({ page }) => {
        await test.step('Click on My Account button', async () => {
            await page.click(HEADER.accountButton)

            await expect(page.locator(MY_ACCOUNT_MODAL.contentsOpen)).toBeVisible()
        })
        await test.step('Click on OG item', async () => {
            await page.click(MY_ACCOUNT_MODAL.orderGuides)

            await expect(page.locator(ORDER_GUIDES.newOrderGuideButton)).toBeVisible()
        })
        await test.step('Click on kebab menu', async () => {
            await page.locator(ORDER_GUIDES.orderGuideName).locator(ORDER_GUIDES.kebabMenuButton).click()

            await expect(page.locator(ORDER_GUIDES.kebabMenuDropdown)).toBeVisible()
        })
        await test.step('Click on Delete button', async () => {
            await page.locator(ORDER_GUIDES.kebabMenuDropdown).locator(ORDER_GUIDES.deleteButton).click()

            await expect(page.locator(CONFIRMATION_MODAL.openModal)).toBeVisible()
        })
        await test.step('Click on Delete button in confirmation modal', async () => {
            await page.click(CONFIRMATION_MODAL.deleteButton)

            await expect(page.locator(ORDER_GUIDES.orderGuideName0)).toBeHidden()
        })
    })

    test('Change the name of the Order Guide with an existing name', async ({ page }) => {
        const name2 = order_guide_name[2].name
        await newOrderGuide(page, name2)

        const name3 = order_guide_name[3].name
        await newOrderGuide(page, name3)

        await test.step('Click on My Account button', async () => {
            await page.click(HEADER.accountButton)

            await expect(page.locator(MY_ACCOUNT_MODAL.contentsOpen)).toBeVisible()
        })
        await test.step('Click on OG item', async () => {
            await page.click(MY_ACCOUNT_MODAL.orderGuides)

            await expect(page.locator(ORDER_GUIDES.newOrderGuideButton)).toBeVisible()
        })
        await test.step('Click on kebab menu', async () => {
            await page.locator(ORDER_GUIDES.orderGuideName[2]).locator(ORDER_GUIDES.kebabMenuButton).click()

            await expect(page.locator(ORDER_GUIDES.kebabMenuDropdown)).toBeVisible()
        })
        await test.step('Click on Edit button', async () => {
            await page.locator(ORDER_GUIDES.kebabMenuDropdown).locator(ORDER_GUIDES.editButton).click()

            await expect(page.locator(EDIT_ORDER_GUIDE_MODAL.contentModal)).toBeVisible()
        })
        await test.step('Fill Order Guide name', async () => {
            await page.locator(EDIT_ORDER_GUIDE_MODAL.nameInput).fill(name3)
        })
        await test.step('Click on the Save button', async () => {
            await page.click(EDIT_ORDER_GUIDE_MODAL.confirmButton)
            await page.locator(EDIT_ORDER_GUIDE_MODAL.contentModal).isHidden()

            await expect(page.locator(EDIT_ORDER_GUIDE_MODAL.alreadyExistErrorMessage(name3))).toBeVisible()
        })
    })

    test('Delete All Order Guides', async ({ page }) => {
        await test.step('Click on My Account button', async () => {
            await page.click(HEADER.accountButton)

            await expect(page.locator(MY_ACCOUNT_MODAL.contentsOpen)).toBeVisible()
        })
        await test.step('Click on OG item', async () => {
            await page.click(MY_ACCOUNT_MODAL.orderGuides)

            await expect(page.locator(ORDER_GUIDES.newOrderGuideButton)).toBeVisible()
        })
        await test.step('Find and delete OG', async () => {
            await removeAllNodesByLocator(ORDER_GUIDES.allOrderGuides, page, deleteOrderGuide)
        })
    })

    test('Make Order Guide default through the Edit modal window', async ({ page }) => {
        const name0 = order_guide_name[0].name
        await newOrderGuide(page, name0)

        await test.step('Click on kebab menu of the second Order Guide', async () => {
            await page.locator(ORDER_GUIDES.secondOrderGuide).locator(ORDER_GUIDES.kebabMenuButton).click()

            await expect(page.locator(ORDER_GUIDES.kebabMenuDropdown)).toBeVisible()
        })
        await test.step('Click on Edit button', async () => {
            await page.locator(ORDER_GUIDES.kebabMenuDropdown).locator(ORDER_GUIDES.editButton).click()

            await expect(page.locator(EDIT_ORDER_GUIDE_MODAL.contentModal)).toBeVisible()
        })
        await test.step('Check the Make default checkbox', async () => {
            await page.locator(EDIT_ORDER_GUIDE_MODAL.makeDefaultCheckbox).check()

            await expect(page.locator(EDIT_ORDER_GUIDE_MODAL.makeDefaultCheckbox)).toBeChecked()
        })
        await test.step('Click on the Save button', async () => {
            await page.click(EDIT_ORDER_GUIDE_MODAL.confirmButton)
            await page.locator(EDIT_ORDER_GUIDE_MODAL.contentModal).isHidden()

            await Promise.all([
                expect(
                    page.locator(ORDER_GUIDES.firstOrderGuide).locator(ORDER_GUIDES.orderGuideNameButton(name0))
                ).toHaveText(name0),
                expect(
                    page.locator(ORDER_GUIDES.firstOrderGuide).locator(ORDER_GUIDES.typeOfOrderGuide[0])
                ).toBeVisible(),
            ])
        })
    })

    test('Make Order Guide default through the kebab menu', async ({ page }) => {
        const name1 = order_guide_name[1].name
        await newOrderGuide(page, name1)

        await test.step('Click on kebab menu of the second Order Guide', async () => {
            await page.locator(ORDER_GUIDES.secondOrderGuide).locator(ORDER_GUIDES.kebabMenuButton).click()

            await expect(page.locator(ORDER_GUIDES.kebabMenuDropdown)).toBeVisible()
        })
        await test.step('Click on Make Default button', async () => {
            await page.locator(ORDER_GUIDES.kebabMenuDropdown).locator(ORDER_GUIDES.makeDefaultButton).click()

            await Promise.all([
                expect(
                    page.locator(ORDER_GUIDES.firstOrderGuide).locator(ORDER_GUIDES.orderGuideNameButton(name1))
                ).toHaveText(name1),
                expect(
                    page.locator(ORDER_GUIDES.firstOrderGuide).locator(ORDER_GUIDES.typeOfOrderGuide[0])
                ).toBeVisible(),
            ])
        })
    })
})
