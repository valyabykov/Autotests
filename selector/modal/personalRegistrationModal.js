import { partialClassSelector } from '@selector/cssSelectors'
import { classAndTextSelector } from '@selector/cssSelectors'
import { classAndInputNameSelector } from '@selector/cssSelectors'
import { class_inputName_inputType_textSelector } from '@selector/cssSelectors'
import { class_inputName_textSelector } from '@selector/cssSelectors'

export const PERSONAL_REGISTRATION_MODAL = {
    personalTitleButton: classAndTextSelector('createAccount-registrationTab', 'Personal'),
    createAccountForm: partialClassSelector('createAccount-root'),
    customerFirstNameInput: classAndInputNameSelector('createAccount-root', 'customer.firstname'),
    customerFirstNameErrorInput: class_inputName_textSelector('field-root', 'customer.firstname', 'Is required.'),
    customerLastNameInput: classAndInputNameSelector('createAccount-root', 'customer.lastname'),
    customerLastNameErrorInput: class_inputName_textSelector('field-root', 'customer.lastname', 'Is required.'),
    customerEmailInput: classAndInputNameSelector('createAccount-root', 'customer.email'),
    customerEmailErrorInput: class_inputName_textSelector('field-root', 'customer.email', 'Is required.'),
    customerPasswordInput: classAndInputNameSelector('createAccount-root', 'password'),
    customerPasswordErrorInput: class_inputName_inputType_textSelector(
        'field-root',
        'password',
        'password',
        'Is required.'
    ),
    customerConfirmPasswordInput: classAndInputNameSelector('createAccount-root', 'confirmpassword'),
    customerConfirmPasswordErrorInput: class_inputName_inputType_textSelector(
        'field-root',
        'confirmpassword',
        'password',
        'Is required.'
    ),
    subscribeCheckbox: class_inputName_inputType_textSelector(
        'checkbox-root-',
        'is_subscribed',
        'checkbox',
        'Subscribe to news and updates'
    ),
    cancelButton: partialClassSelector('createAccount-cancelButton'),
    submitButton: partialClassSelector('createAccount-submitButton'),
}
