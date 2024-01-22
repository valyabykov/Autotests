import { partialClassSelector } from '@selector/cssSelectors'
import { classAndTextSelector } from '@selector/cssSelectors'

export const EDIT_ORDER_GUIDE_MODAL = {
    contentModal: partialClassSelector('dialog-dialog'),
    nameInput: `${partialClassSelector('field-root')} input[name="name"]`,
    confirmButton: partialClassSelector('dialog-confirmButton'),
    alreadyExistErrorMessage: (text) =>
        classAndTextSelector('dialog-contents', `Order Guide with name ${text} already exists`),
    makeDefaultCheckbox: classAndTextSelector('checkbox-root', 'Make default'),
    makePublicCheckbox: classAndTextSelector('checkbox-root', 'Make public'),
    makePrivateCheckbox: classAndTextSelector('checkbox-root', 'Make private'),
}
