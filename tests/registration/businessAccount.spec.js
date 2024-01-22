import { test, expect } from '@playwright/test'

import { openHomepage } from '@util/openHomepage'
import { confirmCookies } from '@util/confirmCookies'
import { HEADER } from '@selector/block/header'
import { LOGIN_MODAL } from '@selector/modal/loginModal'
import { BUSINESS_REGISTRATION_MODAL } from '@selector/modal/businessRegistrationModal'
import { SUCESS_REGISTRATION_MODAL } from '@selector/modal/sucessRegistrationModal'
import { companies } from '@pool'

test.describe('Business Account', () => {
    test.beforeEach(async ({ page }) => {
        await openHomepage(page)
        await confirmCookies(page)
    })
    test('R_01 Business form by default', async ({ page }) => {
        await test.step('Click on Account button', async () => {
            await page.click(HEADER.accountButton)

            await expect(page.locator(LOGIN_MODAL.emailInput)).toBeVisible()
        })
        await test.step('Click on Create an Account button', async () => {
            await page.click(LOGIN_MODAL.createAnAccountButton)

            await expect(page.locator(BUSINESS_REGISTRATION_MODAL.createAccountForm)).toBeVisible()
        })
    })
    test('R_02 Business form fields', async ({ page }) => {
        await test.step('Click on Account button', async () => {
            await page.click(HEADER.accountButton)

            await expect(page.locator(LOGIN_MODAL.emailInput)).toBeVisible()
        })
        await test.step('Click on Create an Account button', async () => {
            await page.click(LOGIN_MODAL.createAnAccountButton)

            await expect(page.locator(BUSINESS_REGISTRATION_MODAL.createAccountForm)).toBeVisible()
        })
        await test.step('Find all fields in form', async () => {
            await page.locator(BUSINESS_REGISTRATION_MODAL.createAccountForm)

            await Promise.all([
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.businessTitleButton)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyNameInput)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyEmailInput)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyLegalInput)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyStreetInput)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyPostcodeInput)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyCountrySelect)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyRegionSelect)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyPhoneInput)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyAdminFirstNameInput)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyAdminLastNameInput)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyAdminEmailInput)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyAdminPasswordInput)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyAdminConfirmPassworInput)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.recaptcha)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.cancelButton)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.submitButton)).toBeVisible(),
            ])
        })
    })
    test('R_03 Registration with new email and mandatory fields', async ({ page }) => {
        await test.step('Click on Account button', async () => {
            await page.click(HEADER.accountButton)

            await expect(page.locator(LOGIN_MODAL.emailInput)).toBeVisible()
        })
        await test.step('Click on Create an Account button', async () => {
            await page.click(LOGIN_MODAL.createAnAccountButton)

            await expect(page.locator(BUSINESS_REGISTRATION_MODAL.createAccountForm)).toBeVisible()
        })
        await test.step('Fill out requared fields', async () => {
            const company = companies[0]

            await page.locator(BUSINESS_REGISTRATION_MODAL.companyNameInput).fill(company.company_name)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyEmailInput).fill(company.general_contact_email)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyLegalInput).fill(company.company_legal_name)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyStreetInput).fill(company.street)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyCityInput).fill(company.city)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyPostcodeInput).fill(company.postcode)

            const companyOption = await page.locator(BUSINESS_REGISTRATION_MODAL.companyCountrySelect)
            await companyOption.selectOption(company.country)

            const regionOption = await page.locator(BUSINESS_REGISTRATION_MODAL.companyRegionSelect)
            await regionOption.selectOption(company.state)

            await page.locator(BUSINESS_REGISTRATION_MODAL.companyPhoneInput).fill(company.phone)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyAdminFirstNameInput).fill(company.admin_first_name)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyAdminLastNameInput).fill(company.admin_last_name)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyAdminEmailInput).fill(company.admin_email)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyAdminPasswordInput).fill(company.password)
            await page
                .locator(BUSINESS_REGISTRATION_MODAL.companyAdminConfirmPasswordInput)
                .fill(company.confirm_password)
        })
        await test.step('Click on Submit button', async () => {
            await page.click(BUSINESS_REGISTRATION_MODAL.submitButton)

            await expect(page.locator(SUCESS_REGISTRATION_MODAL.sucessRegistartionRoot)).toBeVisible()
        })
        await test.step('Click on OK button', async () => {
            await page.click(SUCESS_REGISTRATION_MODAL.submitButton)

            await expect(page.locator(SUCESS_REGISTRATION_MODAL.sucessRegistartionRoot)).toBeHidden()
        })
    })
    test('R_04 Registration with existing company email and mandatory fields', async ({ page }) => {
        const company = companies[1]
        const company_email = companies[1].general_contact_email

        await test.step('Click on Account button', async () => {
            await page.click(HEADER.accountButton)

            await expect(page.locator(LOGIN_MODAL.emailInput)).toBeVisible()
        })
        await test.step('Click on Create an Account button', async () => {
            await page.click(LOGIN_MODAL.createAnAccountButton)

            await expect(page.locator(BUSINESS_REGISTRATION_MODAL.createAccountForm)).toBeVisible()
        })
        await test.step('Fill out requared fields', async () => {
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyNameInput).fill(company.company_name)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyEmailInput).fill(company.general_contact_email)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyLegalInput).fill(company.company_legal_name)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyStreetInput).fill(company.street)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyCityInput).fill(company.city)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyPostcodeInput).fill(company.postcode)

            const companyOption = await page.locator(BUSINESS_REGISTRATION_MODAL.companyCountrySelect)
            await companyOption.selectOption(company.country)

            const regionOption = await page.locator(BUSINESS_REGISTRATION_MODAL.companyRegionSelect)
            await regionOption.selectOption(company.state)

            await page.locator(BUSINESS_REGISTRATION_MODAL.companyPhoneInput).fill(company.phone)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyAdminFirstNameInput).fill(company.admin_first_name)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyAdminLastNameInput).fill(company.admin_last_name)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyAdminEmailInput).fill(company.admin_email)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyAdminPasswordInput).fill(company.password)
            await page
                .locator(BUSINESS_REGISTRATION_MODAL.companyAdminConfirmPasswordInput)
                .fill(company.confirm_password)
        })
        await test.step('Click on Submit button', async () => {
            await page.click(BUSINESS_REGISTRATION_MODAL.submitButton)

            await expect(
                page.locator(BUSINESS_REGISTRATION_MODAL.companyEmailErrorMessage(company_email))
            ).toBeVisible()
        })
    })
    test('R_05 Registration with existing admin email and mandatory fields', async ({ page }) => {
        const company = companies[2]

        await test.step('Click on Account button', async () => {
            await page.click(HEADER.accountButton)

            await expect(page.locator(LOGIN_MODAL.emailInput)).toBeVisible()
        })
        await test.step('Click on Create an Account button', async () => {
            await page.click(LOGIN_MODAL.createAnAccountButton)

            await expect(page.locator(BUSINESS_REGISTRATION_MODAL.createAccountForm)).toBeVisible()
        })
        await test.step('Fill out requared fields', async () => {
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyNameInput).fill(company.company_name)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyEmailInput).fill(company.general_contact_email)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyLegalInput).fill(company.company_legal_name)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyStreetInput).fill(company.street)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyCityInput).fill(company.city)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyPostcodeInput).fill(company.postcode)

            const companyOption = await page.locator(BUSINESS_REGISTRATION_MODAL.companyCountrySelect)
            await companyOption.selectOption(company.country)

            const regionOption = await page.locator(BUSINESS_REGISTRATION_MODAL.companyRegionSelect)
            await regionOption.selectOption(company.state)

            await page.locator(BUSINESS_REGISTRATION_MODAL.companyPhoneInput).fill(company.phone)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyAdminFirstNameInput).fill(company.admin_first_name)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyAdminLastNameInput).fill(company.admin_last_name)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyAdminEmailInput).fill(company.admin_email)
            await page.locator(BUSINESS_REGISTRATION_MODAL.companyAdminPasswordInput).fill(company.password)
            await page
                .locator(BUSINESS_REGISTRATION_MODAL.companyAdminConfirmPasswordInput)
                .fill(company.confirm_password)
        })
        await test.step('Click on Submit button', async () => {
            await page.click(BUSINESS_REGISTRATION_MODAL.submitButton)

            await expect(page.locator(BUSINESS_REGISTRATION_MODAL.adminEmailErrorMessage)).toBeVisible()
        })
    })
    test('R_06 Checking mandatory fields', async ({ page }) => {
        await test.step('Click on Account button', async () => {
            await page.click(HEADER.accountButton)

            await expect(page.locator(LOGIN_MODAL.emailInput)).toBeVisible()
        })
        await test.step('Click on Create an Account button', async () => {
            await page.click(LOGIN_MODAL.createAnAccountButton)

            await expect(page.locator(BUSINESS_REGISTRATION_MODAL.createAccountForm)).toBeVisible()
        })
        await test.step('Click on Submit button', async () => {
            await page.click(BUSINESS_REGISTRATION_MODAL.submitButton)

            await Promise.all([
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyNameErrorInput)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyEmailErrorInput)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyLegalErrorInput)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyStreetErrorInput)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyCitytErrorInput)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyPostcodetErrorInput)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyCountrySelect)).toBeTruthy(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyRegionSelect)).toBeTruthy(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyAdminFirstNameErrorInput)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyAdminLastNameErrorInput)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyAdminEmailErrorInput)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyAdminPasswordErrorInput)).toBeVisible(),
                expect(page.locator(BUSINESS_REGISTRATION_MODAL.companyAdminConfirmPasswordErrorInput)).toBeVisible(),
            ])
        })
    })
})
