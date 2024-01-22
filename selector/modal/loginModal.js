import { partialClassSelector } from '@selector/cssSelectors'

export const LOGIN_MODAL = {
    emailInput: `${partialClassSelector('signIn-form')} input[name="email"]`,
    passwordInput: `${partialClassSelector('signIn-form')} input[name="password"]`,
    signInButton: partialClassSelector('signIn-buttonSignIn'),
    forgotPasswordButton: partialClassSelector('signIn-forgotPasswordButton'),
    createAnAccountButton: partialClassSelector('signIn-buttonAccount'),
}
