import { partialClassSelector } from '@selector/cssSelectors'
import { twoClassesSelector } from '@selector/cssSelectors'

export const PDP = {
    itemName: partialClassSelector('productFullDetail-productName'),
    itemPrice: twoClassesSelector('productFullDetail-price', 'prices-price'),
    addToCartButton: partialClassSelector('productFullDetail-addToCartButtonContent'),
}
