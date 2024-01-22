import ENV from '@util/env'

export const openHomepage = async (page) => {
    await page.goto(ENV.BASE_URL)
    await page.waitForLoadState('networkidle')
    await page.waitForLoadState('domcontentloaded')
    await page.waitForLoadState('load')
}
