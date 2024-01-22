import { partialClassSelector } from '@selector/cssSelectors'

export const MINI_CART_MODAL = {
    emptyMiniCart: partialClassSelector('miniCart-contents'),
    openMiniCart: partialClassSelector('miniCart-contents_open'),
    itemName: partialClassSelector('item-name'),
    itemPrice: partialClassSelector('item-price'),
    itemQty: partialClassSelector('item-quantity'),
    shoppingCartButton: partialClassSelector('miniCart-editCartButton'),
}
