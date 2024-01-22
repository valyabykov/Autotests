import { test, expect } from '@playwright/test'

import { search } from '@pool'
import { confirmCookies } from '@util/confirmCookies'

test.describe('Not Logged', () => {
    test.beforeEach(async ({ page }) => {
        await openHomepage(page)
        await confirmCookies(page)
    })

    test('Search Autocomplete Suggestions', async ({ page }) => {
        await test.step('Fill search bar', async () => {
            const keyword = search[0]

            await page.locator(HEADER.searchInput).fill(keyword.search_query)

            await expect(page.locator(HEADER.autocompleteSuggestions)).toBeVisible()
        })
    })
})
