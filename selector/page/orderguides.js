import { classAndTextSelector, partialClassSelector } from '@selector/cssSelectors'
import { roleAndTextSelector } from '@selector/cssSelectors'
import { ariaLabelSelector } from '@selector/cssSelectors'
import { tagAndTextSelector } from '@selector/cssSelectors'
import { threeClassesInSequenceSelector } from '@selector/cssSelectors'
import { classAndDivNthSelector } from '@selector/cssSelectors'
import { order_guide_name } from '@pool'

export const ORDER_GUIDES = {
    orderGuidesText: 'Order Guides',
    newOrderGuideButton: partialClassSelector('orderGuides-createGuideButtonContent'),
    orderGuideName: [
        roleAndTextSelector('presentation', order_guide_name[0].name),
        roleAndTextSelector('presentation', order_guide_name[1].name),
        roleAndTextSelector('presentation', order_guide_name[2].name),
        roleAndTextSelector('presentation', order_guide_name[3].name),
    ],
    orderGuideNameButton: (text) => classAndTextSelector('orderGuideRow-orderName', `${text}`),
    firstOrderGuide: classAndDivNthSelector('orderGuides-root', 3),
    secondOrderGuide: classAndDivNthSelector('orderGuides-root', 4),
    kebabMenuButton: ariaLabelSelector('Actions with Order Guide'),
    kebabMenuDropdown: partialClassSelector('orderGuideRow-kebabDropdown_active'),
    deleteButton: tagAndTextSelector('button', 'Delete'),
    editButton: tagAndTextSelector('button', 'Edit'),
    makeDefaultButton: tagAndTextSelector('button', 'Make Default'),
    allOrderGuides: threeClassesInSequenceSelector(
        'accountPageNavigation-accountDetails',
        'orderGuides-root',
        'orderGuides-root'
    ),
    typeOfOrderGuide: [
        classAndTextSelector('orderGuideRow-orderType', 'default'),
        classAndTextSelector('orderGuideRow-orderType', 'PRIVATE'),
        classAndTextSelector('orderGuideRow-orderType', 'PUBLIC'),
    ],
}
