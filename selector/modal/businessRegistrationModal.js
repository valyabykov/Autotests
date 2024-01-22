import { partialClassSelector } from '@selector/cssSelectors'
import { classAndTextSelector } from '@selector/cssSelectors'
import { class_inputName_ariaInvalid_textSelector } from '@selector/cssSelectors'
import { classAndInputNameSelector } from '@selector/cssSelectors'

export const BUSINESS_REGISTRATION_MODAL = {
    businessTitleButton: classAndTextSelector('createAccount-registrationTab', 'Business'),
    createAccountForm: partialClassSelector('createAccount-defaultBusiness'),
    companyNameInput: classAndInputNameSelector('createAccount-defaultBusiness', 'company.company_name'),
    companyNameErrorInput: class_inputName_ariaInvalid_textSelector(
        'field-root',
        'company.company_name',
        'true',
        'Is required.'
    ),
    companyEmailInput: classAndInputNameSelector('createAccount-defaultBusiness', 'company.company_email'),
    companyEmailErrorInput: class_inputName_ariaInvalid_textSelector(
        'field-root',
        'company.company_email',
        'true',
        'The email address has an invalid format.'
    ),
    companyLegalInput: classAndInputNameSelector('createAccount-defaultBusiness', 'company.legal_name'),
    companyLegalErrorInput: class_inputName_ariaInvalid_textSelector(
        'field-root',
        'company.legal_name',
        'true',
        'Is required.'
    ),
    companyStreetInput: classAndInputNameSelector('createAccount-defaultBusiness', 'company.legal_address.street'),
    companyStreetErrorInput: class_inputName_ariaInvalid_textSelector(
        'field-root',
        'company.legal_address.street',
        'true',
        'Is required.'
    ),
    companyCityInput: classAndInputNameSelector('createAccount-defaultBusiness', 'company.legal_address.city'),
    companyCitytErrorInput: class_inputName_ariaInvalid_textSelector(
        'field-root',
        'company.legal_address.city',
        'true',
        'Is required.'
    ),
    companyPostcodeInput: classAndInputNameSelector('createAccount-defaultBusiness', 'company.legal_address.postcode'),
    companyPostcodetErrorInput: class_inputName_ariaInvalid_textSelector(
        'field-root',
        'company.legal_address.postcode',
        'true',
        'Is required.'
    ),
    companyCountrySelect: classAndInputNameSelector('createAccount-defaultBusiness', 'company.legal_address.country'),
    companyRegionSelect: classAndInputNameSelector(
        'createAccount-defaultBusiness',
        'company.legal_address.region.region_code'
    ),
    companyPhoneInput: classAndInputNameSelector('createAccount-defaultBusiness', 'company.legal_address.telephone'),
    companyPhonetErrorInput: class_inputName_ariaInvalid_textSelector(
        'field-root',
        'company.legal_address.telephone',
        'true',
        'Is required.'
    ),
    companyAdminFirstNameInput: classAndInputNameSelector(
        'createAccount-defaultBusiness',
        'company.company_admin.firstname'
    ),
    companyAdminFirstNameErrorInput: class_inputName_ariaInvalid_textSelector(
        'field-root',
        'company.company_admin.firstname',
        'true',
        'Is required.'
    ),
    companyAdminLastNameInput: classAndInputNameSelector(
        'createAccount-defaultBusiness',
        'company.company_admin.lastname'
    ),
    companyAdminLastNameErrorInput: class_inputName_ariaInvalid_textSelector(
        'field-root',
        'company.company_admin.lastname',
        'true',
        'Is required.'
    ),
    companyAdminEmailInput: classAndInputNameSelector('createAccount-defaultBusiness', 'company.company_admin.email'),
    companyAdminEmailErrorInput: class_inputName_ariaInvalid_textSelector(
        'createAccount-hintEmailRoot',
        'company.company_admin.email',
        'true',
        'The email address has an invalid format.'
    ),
    companyAdminPasswordInput: classAndInputNameSelector('createAccount-defaultBusiness', 'password'),
    companyAdminPasswordErrorInput: class_inputName_ariaInvalid_textSelector(
        'field-root',
        'password',
        'true',
        'Is required.'
    ),
    companyAdminConfirmPassworInput: classAndInputNameSelector('createAccount-defaultBusiness', 'confirmpassword'),
    companyAdminConfirmPasswordErrorInput: class_inputName_ariaInvalid_textSelector(
        'field-root',
        'confirmpassword',
        'true',
        'Is required.'
    ),
    recaptcha: partialClassSelector('googleReCaptcha-root'),
    cancelButton: partialClassSelector('createAccount-cancelButton'),
    submitButton: partialClassSelector('createAccount-submitButton'),
    companyEmailErrorMessage: (text) =>
        classAndTextSelector('createAccount-rootError', `Company with e-mail: ${text} already exists.`),
    adminEmailErrorMessage: classAndTextSelector(
        'createAccount-rootError',
        'A customer with the same email address already exists in an associated website.'
    ),
}
