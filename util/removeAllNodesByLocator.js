export async function removeAllNodesByLocator(locator, page, callback) {
    let elementsToRemove = await page.locator(locator).all()

    if (elementsToRemove.length === 0) {
        return
    }

    await callback(page, elementsToRemove[0])

    await removeAllNodesByLocator(locator, page, callback)
}
