import { partialClassSelector } from '@selector/cssSelectors'
import { classAndInputNameSelector } from '@selector/cssSelectors'
import { classAndLiNthSelector } from '@selector/cssSelectors'
import { classAndChildSelector } from '@selector/cssSelectors'
import { classAndSpanSelector } from '@selector/cssSelectors'
import { ariaLabelSelector } from '@selector/cssSelectors'

export const SHOPPING_CART = {
    header: partialClassSelector('cartPage-heading_container'),
    firstItem: classAndLiNthSelector('productListing-root', 1),
    itemName: classAndChildSelector('product-name', 'a'),
    itemPrice: classAndSpanSelector('product-details', 'product-price'),
    itemQty: classAndInputNameSelector('quantityStepper-input', 'quantity'),
    kebabButton: ariaLabelSelector('Actions with item'),
    kebabDropdown: partialClassSelector('product-kebabDropdown_active'),
    removeItemButton: classAndLiNthSelector('product-kebabDropdown_active', 2),
}
