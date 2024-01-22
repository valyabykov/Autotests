import { partialClassSelector } from '@selector/cssSelectors'
import { classAndFormNthSelector } from '@selector/cssSelectors'

export const PLP_CATALOG = {
    catalogHeader: partialClassSelector('productCategory-categoryTitle'),
    filterHeader: partialClassSelector('filterSidebar-headerTitle'),
    firstItem: classAndFormNthSelector('productCategory-menuItems', 1),
    secondItem: classAndFormNthSelector('productCategory-menuItems', 2),
    fourthItem: classAndFormNthSelector('productCategory-menuItems', 4),
    itemName: partialClassSelector('item-nameContainer'),
    itemPrice: partialClassSelector('item-priceContainer'),
    itemImage: partialClassSelector('item-imagesRoot'),
    addToCartButton: partialClassSelector('item-buttonRoot'),
}
