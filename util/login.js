import { test, expect } from '@playwright/test'

import { HEADER } from '@selector/block/header'
import { LOGIN_MODAL } from '@selector/modal/loginModal'
import { ACCOUNT_INFORMATION } from '@selector/page/accountInformation'
import { login_credentials } from '@pool'

export async function login(page) {
    await test.step('Open login modal', async () => {
        await page.click(HEADER.accountButton)
    })

    await test.step('Fill credentials', async () => {
        const firstUser = login_credentials[0]

        await page.locator(LOGIN_MODAL.emailInput).fill(firstUser.username)

        await page.locator(LOGIN_MODAL.passwordInput).fill(firstUser.password)
    })

    await test.step('Submit login', async () => {
        await page.click(LOGIN_MODAL.signInButton)

        await expect(await page.getByText(ACCOUNT_INFORMATION.contactInformationText)).toBeVisible()
    })
}
