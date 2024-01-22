import { classAndDivNthSelector } from '@selector/cssSelectors'
import { partialClassSelector } from '@selector/cssSelectors'

export const PRODUCT_CAROUSEL = {
    carousel: partialClassSelector('productCarousel-root'),
    header: partialClassSelector('productCarousel-carouselHeader'),
    firstItem: classAndDivNthSelector('slick-track', 1),
    secondItem: classAndDivNthSelector('slick-track', 2),
    addToCartButton: partialClassSelector('item-addToCartButton'),
    itemName: partialClassSelector('item-name'),
    itemPrice: partialClassSelector('item-pricesWrapper'),
}
