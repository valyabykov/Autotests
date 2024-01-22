import { test, expect } from '@playwright/test'

import { openHomepage } from '@util/openHomepage'
import { confirmCookies } from '@util/confirmCookies'
import { login } from '@util/login'
import { HEADER } from '@selector/block/header'
import { PLP_CATALOG } from '@selector/page/plpCatalog'
import { MINI_CART_MODAL } from '@selector/modal/miniCartModal'
import { SHOPPING_CART } from '@selector/page/shoppingCart'
import { PDP } from '@selector/page/pdp'
import { TOAST } from '@selector/toast/toast'
import { PRODUCT_CAROUSEL } from '@selector/block/productCarousel'
import { addProductToCart } from '@util/addProductToCart'

test.describe('Add product to Shopping Cart', () => {
    test.beforeEach(async ({ page }) => {
        await openHomepage(page)
        await confirmCookies(page)
        await login(page)
    })
    test('C_01 Add product from PLP', async ({ page }) => {
        let itemNamePLP
        let itemPricePLP

        await test.step('Hover the mouse over the dropdown', async () => {
            await page.hover(HEADER.catalogButton)

            await expect(page.locator(HEADER.megaMenuDropDown)).toBeVisible()
        })
        await test.step('Click on catalog category', async () => {
            await page.locator(HEADER.secondCategory).click()
            await page.waitForSelector(PLP_CATALOG.firstItem)

            await expect(page.locator(PLP_CATALOG.filterHeader)).toBeVisible()
            await expect(page.locator(PLP_CATALOG.firstItem)).toBeVisible()
        })
        await test.step('Click Add to Cart', async () => {
            await page.locator(PLP_CATALOG.firstItem).locator(PLP_CATALOG.addToCartButton).click()

            await expect(page.locator(TOAST.successToast)).toBeVisible()
        })
        await test.step('Click on Mini Cart', async () => {
            itemNamePLP = await page.locator(PLP_CATALOG.firstItem).locator(PLP_CATALOG.itemName).textContent()
            itemPricePLP = await page.locator(PLP_CATALOG.firstItem).locator(PLP_CATALOG.itemPrice).textContent()

            await page.locator(HEADER.miniCartButton).click()
            const itemNameMiniCart = await page
                .locator(MINI_CART_MODAL.openMiniCart)
                .locator(MINI_CART_MODAL.itemName)
                .textContent()
            const itemPriceMiniCart = await page
                .locator(MINI_CART_MODAL.openMiniCart)
                .locator(MINI_CART_MODAL.itemPrice)
                .textContent()
            const itemQty = await page
                .locator(MINI_CART_MODAL.openMiniCart)
                .locator(MINI_CART_MODAL.itemQty)
                .textContent()

            expect(itemNameMiniCart).toBe(itemNamePLP)
            expect(itemPriceMiniCart).toBe(itemPricePLP)
            expect(itemQty).toBe('Qty : 1')
        })
        await test.step('Click Edit Shopping Cart', async () => {
            await page.locator(MINI_CART_MODAL.shoppingCartButton).click()
            const itemNameCart = await page
                .locator(SHOPPING_CART.firstItem)
                .locator(SHOPPING_CART.itemName)
                .textContent()
            const itemPriceCart = await page
                .locator(SHOPPING_CART.firstItem)
                .locator(SHOPPING_CART.itemPrice)
                .textContent()
            const itemQtyCart = await page.locator(SHOPPING_CART.firstItem).locator(SHOPPING_CART.itemQty).inputValue()

            await expect(page.locator(SHOPPING_CART.header)).toBeVisible()
            expect(itemNameCart).toBe(itemNamePLP)
            expect(itemPriceCart).toBe(itemPricePLP)
            expect(itemQtyCart).toBe('1')
        })
    })
    test('C_02 Add product from PDP', async ({ page }) => {
        let itemNamePLP
        let itemPricePLP

        await test.step('Hover the mouse over the dropdown', async () => {
            await page.hover(HEADER.catalogButton)

            await expect(page.locator(HEADER.megaMenuDropDown)).toBeVisible()
        })
        await test.step('Click on catalog category', async () => {
            await page.locator(HEADER.secondCategory).click()
            await page.waitForSelector(PLP_CATALOG.firstItem)

            await expect(page.locator(PLP_CATALOG.filterHeader)).toBeVisible()
            await expect(page.locator(PLP_CATALOG.firstItem)).toBeVisible()
        })
        await test.step('Click on the item', async () => {
            itemNamePLP = await page.locator(PLP_CATALOG.fourthItem).locator(PLP_CATALOG.itemName).textContent()
            itemPricePLP = await page.locator(PLP_CATALOG.fourthItem).locator(PLP_CATALOG.itemPrice).textContent()

            await page.locator(PLP_CATALOG.fourthItem).locator(PLP_CATALOG.itemImage).click()
            const itemNamePDP = await page.locator(PDP.itemName).textContent()
            const itemPricePDP = await page.locator(PDP.itemPrice).textContent()

            await expect(page.locator(PDP.itemName)).toBeVisible()
            expect(itemNamePLP).toBe(itemNamePDP)
            expect(itemPricePLP).toBe(itemPricePDP)
        })
        await test.step('Click Add to Cart', async () => {
            await page.locator(PDP.addToCartButton).click()

            await expect(page.locator(TOAST.successToast)).toBeVisible()
        })
        await test.step('Click on Mini Cart', async () => {
            await page.locator(HEADER.miniCartButton).click()
            const itemNameMiniCart = await page
                .locator(MINI_CART_MODAL.openMiniCart)
                .locator(MINI_CART_MODAL.itemName)
                .textContent()
            const itemPriceMiniCart = await page
                .locator(MINI_CART_MODAL.openMiniCart)
                .locator(MINI_CART_MODAL.itemPrice)
                .textContent()
            const itemQty = await page
                .locator(MINI_CART_MODAL.openMiniCart)
                .locator(MINI_CART_MODAL.itemQty)
                .textContent()

            expect(itemNameMiniCart).toBe(itemNamePLP)
            expect(itemPriceMiniCart).toBe(itemPricePLP)
            expect(itemQty).toBe('Qty : 1')
        })
        await test.step('Click Edit Shopping Cart', async () => {
            await page.locator(MINI_CART_MODAL.shoppingCartButton).click()
            const itemNameCart = await page
                .locator(SHOPPING_CART.firstItem)
                .locator(SHOPPING_CART.itemName)
                .textContent()
            const itemPriceCart = await page
                .locator(SHOPPING_CART.firstItem)
                .locator(SHOPPING_CART.itemPrice)
                .textContent()
            const itemQtyCart = await page.locator(SHOPPING_CART.firstItem).locator(SHOPPING_CART.itemQty).inputValue()

            await expect(page.locator(SHOPPING_CART.header)).toBeVisible()
            expect(itemNameCart).toBe(itemNamePLP)
            expect(itemPriceCart).toBe(itemPricePLP)
            expect(itemQtyCart).toBe('1')
        })
    })
    test('C_03 Add product from "Related Product"', async ({ page }) => {
        let itemNamePLP
        let itemPricePLP
        let firstCarousel
        let itemNameCarousel
        let itemPriceCarousel

        await test.step('Hover the mouse over the dropdown', async () => {
            await page.hover(HEADER.catalogButton)

            await expect(page.locator(HEADER.megaMenuDropDown)).toBeVisible()
        })
        await test.step('Click on catalog category', async () => {
            await page.locator(HEADER.secondCategory).click()
            await page.waitForSelector(PLP_CATALOG.firstItem)

            await expect(page.locator(PLP_CATALOG.filterHeader)).toBeVisible()
            await expect(page.locator(PLP_CATALOG.firstItem)).toBeVisible()
        })
        await test.step('Click on the item', async () => {
            itemNamePLP = await page.locator(PLP_CATALOG.secondItem).locator(PLP_CATALOG.itemName).textContent()
            itemPricePLP = await page.locator(PLP_CATALOG.secondItem).locator(PLP_CATALOG.itemPrice).textContent()

            await page.mouse.move(10, 10)
            await page.locator(PLP_CATALOG.secondItem).locator(PLP_CATALOG.itemImage).click()
            await page.waitForSelector(PDP.itemName)
            const itemNamePDP = await page.locator(PDP.itemName).textContent()
            const itemPricePDP = await page.locator(PDP.itemPrice).textContent()
            firstCarousel = page.locator(PRODUCT_CAROUSEL.carousel).first()

            await expect(page.locator(PDP.itemName)).toBeVisible()
            await expect(firstCarousel).toBeVisible()
            expect(itemNamePLP).toBe(itemNamePDP)
            expect(itemPricePLP).toBe(itemPricePDP)
        })
        await test.step('Click Add to cart on Carousel product', async () => {
            const secondCarouselItem = firstCarousel.locator(PRODUCT_CAROUSEL.secondItem)

            itemNameCarousel = await secondCarouselItem.locator(PRODUCT_CAROUSEL.itemName).textContent()
            itemPriceCarousel = await secondCarouselItem.locator(PRODUCT_CAROUSEL.itemPrice).textContent()

            await secondCarouselItem.locator(PRODUCT_CAROUSEL.addToCartButton).click()

            await expect(page.locator(TOAST.successToast)).toBeVisible()
        })

        await test.step('Click on Mini Cart', async () => {
            await page.locator(HEADER.miniCartButton).click()
            const itemNameMiniCart = await page
                .locator(MINI_CART_MODAL.openMiniCart)
                .locator(MINI_CART_MODAL.itemName)
                .textContent()
            const itemPriceMiniCart = await page
                .locator(MINI_CART_MODAL.openMiniCart)
                .locator(MINI_CART_MODAL.itemPrice)
                .textContent()
            const itemQty = await page
                .locator(MINI_CART_MODAL.openMiniCart)
                .locator(MINI_CART_MODAL.itemQty)
                .textContent()

            expect(itemNameMiniCart).toBe(itemNameCarousel)
            expect(itemPriceMiniCart).toBe(itemPriceCarousel)
            expect(itemQty).toBe('Qty : 1')
        })
        await test.step('Click Edit Shopping Cart', async () => {
            await page.locator(MINI_CART_MODAL.shoppingCartButton).click()
            const itemNameCart = await page
                .locator(SHOPPING_CART.firstItem)
                .locator(SHOPPING_CART.itemName)
                .textContent()
            const itemPriceCart = await page
                .locator(SHOPPING_CART.firstItem)
                .locator(SHOPPING_CART.itemPrice)
                .textContent()
            const itemQtyCart = await page.locator(SHOPPING_CART.firstItem).locator(SHOPPING_CART.itemQty).inputValue()

            await expect(page.locator(SHOPPING_CART.header)).toBeVisible()
            expect(itemNameCart).toBe(itemNameCarousel)
            expect(itemPriceCart).toBe(itemPriceCarousel)
            expect(itemQtyCart).toBe('1')
        })
    })
    test('C_04 Add product from "Up-Sell Products"', async ({ page }) => {
        let itemNamePLP
        let itemPricePLP
        let secondCarousel
        let itemNameCarousel
        let itemPriceCarousel

        await test.step('Hover the mouse over the dropdown', async () => {
            await page.hover(HEADER.catalogButton)

            await expect(page.locator(HEADER.megaMenuDropDown)).toBeVisible()
        })
        await test.step('Click on catalog category', async () => {
            await page.locator(HEADER.secondCategory).click()
            await page.waitForSelector(PLP_CATALOG.firstItem)

            await expect(page.locator(PLP_CATALOG.filterHeader)).toBeVisible()
            await expect(page.locator(PLP_CATALOG.firstItem)).toBeVisible()
        })
        await test.step('Click on the item', async () => {
            itemNamePLP = await page.locator(PLP_CATALOG.secondItem).locator(PLP_CATALOG.itemName).textContent()
            itemPricePLP = await page.locator(PLP_CATALOG.secondItem).locator(PLP_CATALOG.itemPrice).textContent()

            await page.mouse.move(10, 10)
            await page.locator(PLP_CATALOG.secondItem).locator(PLP_CATALOG.itemImage).click()
            await page.waitForSelector(PDP.itemName)

            const itemNamePDP = await page.locator(PDP.itemName).textContent()
            const itemPricePDP = await page.locator(PDP.itemPrice).textContent()
            secondCarousel = page.locator(PRODUCT_CAROUSEL.carousel).nth(1)

            await expect(page.locator(PDP.itemName)).toBeVisible()
            await expect(secondCarousel).toBeVisible()

            expect(itemNamePLP).toBe(itemNamePDP)
            expect(itemPricePLP).toBe(itemPricePDP)
        })
        await test.step('Click Add to cart on Carousel product', async () => {
            const firstCarouselItem = secondCarousel.locator(PRODUCT_CAROUSEL.firstItem)

            itemNameCarousel = await firstCarouselItem.locator(PRODUCT_CAROUSEL.itemName).textContent()
            itemPriceCarousel = await firstCarouselItem.locator(PRODUCT_CAROUSEL.itemPrice).textContent()

            await firstCarouselItem.locator(PRODUCT_CAROUSEL.addToCartButton).click()

            await expect(page.locator(TOAST.successToast)).toBeVisible()
        })
        await test.step('Click on Mini Cart', async () => {
            await page.locator(HEADER.miniCartButton).click()
            const itemNameMiniCart = await page
                .locator(MINI_CART_MODAL.openMiniCart)
                .locator(MINI_CART_MODAL.itemName)
                .textContent()
            const itemPriceMiniCart = await page
                .locator(MINI_CART_MODAL.openMiniCart)
                .locator(MINI_CART_MODAL.itemPrice)
                .textContent()
            const itemQty = await page
                .locator(MINI_CART_MODAL.openMiniCart)
                .locator(MINI_CART_MODAL.itemQty)
                .textContent()

            expect(itemNameMiniCart).toBe(itemNameCarousel)
            expect(itemPriceMiniCart).toBe(itemPriceCarousel)
            expect(itemQty).toBe('Qty : 1')
        })
        await test.step('Click Edit Shopping Cart', async () => {
            await page.locator(MINI_CART_MODAL.shoppingCartButton).click()
            const itemNameCart = await page
                .locator(SHOPPING_CART.firstItem)
                .locator(SHOPPING_CART.itemName)
                .textContent()
            const itemPriceCart = await page
                .locator(SHOPPING_CART.firstItem)
                .locator(SHOPPING_CART.itemPrice)
                .textContent()
            const itemQtyCart = await page.locator(SHOPPING_CART.firstItem).locator(SHOPPING_CART.itemQty).inputValue()

            await expect(page.locator(SHOPPING_CART.header)).toBeVisible()
            expect(itemNameCart).toBe(itemNameCarousel)
            expect(itemPriceCart).toBe(itemPriceCarousel)
            expect(itemQtyCart).toBe('1')
        })
    })
})

test.describe('Edit product in Shopping Cart', () => {
    test.beforeEach(async ({ page }) => {
        await openHomepage(page)
        await confirmCookies(page)
        await login(page)
        await addProductToCart(page)
    })
    test('C_14 Delete item through the kebab-menu', async ({ page }) => {
        await test.step('Click on Mini Cart', async () => {
            await page.locator(HEADER.miniCartButton).click()

            await expect(page.locator(MINI_CART_MODAL.openMiniCart)).toBeVisible()
        })
        await test.step('Click Edit Shopping Cart', async () => {
            await page.locator(MINI_CART_MODAL.shoppingCartButton).click()

            await expect(page.locator(SHOPPING_CART.header)).toBeVisible()
        })
        await test.step('Click on kebab-menu', async () => {
            await page.locator(SHOPPING_CART.firstItem).locator(SHOPPING_CART.kebabButton).click()

            await expect(page.locator(SHOPPING_CART.kebabDropdown)).toBeVisible()
        })
        await test.step('Click on Remove button', async () => {
            //i don't know how to check that this item not on the page anymore
            const itemName = await page.locator(SHOPPING_CART.firstItem).locator(SHOPPING_CART.itemName).textContent()

            await page.locator(SHOPPING_CART.removeItemButton).click()

            await expect(page.locator(SHOPPING_CART.kebabDropdown)).toBeHidden()
        })
    })
})
