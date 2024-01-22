import { partialClassSelector } from '@selector/cssSelectors'
import { classAndTextSelector } from '@selector/cssSelectors'

export const NEW_ORDER_GUIDE_MODAL = {
    contentModal: partialClassSelector('dialog-dialog'),
    nameInput: `${partialClassSelector('field-root')} input[name="name"]`,
    confirmButton: partialClassSelector('dialog-confirmButton'),
    alreadyExistErrorMessage: classAndTextSelector(
        'dialog-contents',
        'Order Guide with name Autotest Order Guide already exists'
    ),
}
