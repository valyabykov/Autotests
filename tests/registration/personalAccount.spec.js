import { test, expect } from '@playwright/test'

import { openHomepage } from '@util/openHomepage'
import { confirmCookies } from '@util/confirmCookies'
import { HEADER } from '@selector/block/header'
import { LOGIN_MODAL } from '@selector/modal/loginModal'
import { BUSINESS_REGISTRATION_MODAL } from '@selector/modal/businessRegistrationModal'
import { PERSONAL_REGISTRATION_MODAL } from '@selector/modal/personalRegistrationModal'
import { MY_ACCOUNT_MODAL } from '@selector/modal/myAccountModal'
import { users } from '@pool'

test.describe('Personal Account', () => {
    test.beforeEach(async ({ page }) => {
        await openHomepage(page)
        await confirmCookies(page)
    })
    test('R_07 Personal form fields', async ({ page }) => {
        await test.step('Click on Account button', async () => {
            await page.click(HEADER.accountButton)

            await expect(page.locator(LOGIN_MODAL.emailInput)).toBeVisible()
        })
        await test.step('Click on Create an Account button', async () => {
            await page.click(LOGIN_MODAL.createAnAccountButton)

            await expect(page.locator(BUSINESS_REGISTRATION_MODAL.createAccountForm)).toBeVisible()
        })
        await test.step('Click on Personal tab', async () => {
            await page.click(PERSONAL_REGISTRATION_MODAL.personalTitleButton)

            await Promise.all([
                expect(page.locator(PERSONAL_REGISTRATION_MODAL.createAccountForm)).toBeVisible(),
                expect(page.locator(PERSONAL_REGISTRATION_MODAL.customerFirstNameInput)).toBeVisible(),
                expect(page.locator(PERSONAL_REGISTRATION_MODAL.customerLastNameInput)).toBeVisible(),
                expect(page.locator(PERSONAL_REGISTRATION_MODAL.customerEmailInput)).toBeVisible(),
                expect(page.locator(PERSONAL_REGISTRATION_MODAL.customerPasswordInput)).toBeVisible(),
                expect(page.locator(PERSONAL_REGISTRATION_MODAL.customerConfirmPasswordInput)).toBeVisible(),
                expect(page.locator(PERSONAL_REGISTRATION_MODAL.subscribeCheckbox)).toBeVisible(),
                expect(page.locator(PERSONAL_REGISTRATION_MODAL.subscribeCheckbox)).not.toBeChecked(),
                expect(page.locator(PERSONAL_REGISTRATION_MODAL.submitButton)).toBeVisible(),
                expect(page.locator(PERSONAL_REGISTRATION_MODAL.cancelButton)).toBeVisible(),
            ])
        })
    })
    test('R_08 Checking mandatory fields', async ({ page }) => {
        await test.step('Click on Account button', async () => {
            await page.click(HEADER.accountButton)

            await expect(page.locator(LOGIN_MODAL.emailInput)).toBeVisible()
        })
        await test.step('Click on Create an Account button', async () => {
            await page.click(LOGIN_MODAL.createAnAccountButton)

            await expect(page.locator(BUSINESS_REGISTRATION_MODAL.createAccountForm)).toBeVisible()
        })
        await test.step('Click on Personal tab', async () => {
            await page.click(PERSONAL_REGISTRATION_MODAL.personalTitleButton)

            await expect(page.locator(PERSONAL_REGISTRATION_MODAL.createAccountForm)).toBeVisible()
        })
        await test.step('Click on Create an Account button', async () => {
            await page.click(PERSONAL_REGISTRATION_MODAL.submitButton)

            await Promise.all([
                expect(page.locator(PERSONAL_REGISTRATION_MODAL.customerFirstNameErrorInput)).toBeVisible(),
                expect(page.locator(PERSONAL_REGISTRATION_MODAL.customerFirstNameErrorInput)).toBeVisible(),
                expect(page.locator(PERSONAL_REGISTRATION_MODAL.customerLastNameErrorInput)).toBeVisible(),
                expect(page.locator(PERSONAL_REGISTRATION_MODAL.customerPasswordErrorInput)).toBeVisible(),
                expect(page.locator(PERSONAL_REGISTRATION_MODAL.customerConfirmPasswordErrorInput)).toBeVisible(),
                expect(page.locator(PERSONAL_REGISTRATION_MODAL.subscribeCheckbox)).not.toBeChecked(),
            ])
        })
    })
    test('R_09 Registration with new email & mandatory fields and without subscription', async ({ page }) => {
        const user = users[0]

        await test.step('Click on Account button', async () => {
            await page.click(HEADER.accountButton)

            await expect(page.locator(LOGIN_MODAL.emailInput)).toBeVisible()
        })
        await test.step('Click on Create an Account button', async () => {
            await page.click(LOGIN_MODAL.createAnAccountButton)

            await expect(page.locator(BUSINESS_REGISTRATION_MODAL.createAccountForm)).toBeVisible()
        })
        await test.step('Click on Personal tab', async () => {
            await page.click(PERSONAL_REGISTRATION_MODAL.personalTitleButton)

            await expect(page.locator(PERSONAL_REGISTRATION_MODAL.createAccountForm)).toBeVisible()
        })
        await test.step('Fill out requared fields', async () => {
            await page.locator(PERSONAL_REGISTRATION_MODAL.customerFirstNameInput).fill(user.first_name)
            await page.locator(PERSONAL_REGISTRATION_MODAL.customerLastNameInput).fill(user.last_name)
            await page.locator(PERSONAL_REGISTRATION_MODAL.customerEmailInput).fill(user.email)
            await page.locator(PERSONAL_REGISTRATION_MODAL.customerPasswordInput).fill(user.password)
            await page.locator(PERSONAL_REGISTRATION_MODAL.customerConfirmPasswordInput).fill(user.confirm_password)
        })
        await test.step('Click on Create an Account button', async () => {
            await page.click(PERSONAL_REGISTRATION_MODAL.submitButton)
            await page.waitForSelector(MY_ACCOUNT_MODAL.contentsOpen)

            await expect(page.locator(MY_ACCOUNT_MODAL.contentsOpen)).toBeVisible()

            //assuming that the browser zoom is 90% or less and the page has loaded
            await expect(page.locator(HEADER.accountButtonText(`Hi, ${user.first_name}`))).toBeVisible()
        })
    })
})
