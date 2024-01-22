import { partialClassSelector } from '@selector/cssSelectors'
import { classAndNthSelector } from '@selector/cssSelectors'

export const MY_ACCOUNT_MODAL = {
    contentsOpen: partialClassSelector('accountMenu-contents_open'),
    orderGuides: classAndNthSelector('accountMenuItems-root', 5),
}
