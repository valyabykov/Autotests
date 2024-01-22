export const classAndTextSelector = (selector, text) => `[class^="${selector}"] > :has-text("${text}")`
export const classAndDivNthSelector = (selector, number) => `[class^="${selector}"] > div:nth-child(${number})`
export const classAndFormNthSelector = (selector, number) => `[class^="${selector}"] > form:nth-child(${number})`
export const classAndDivNthH5Selector = (selector, number) => `[class^="${selector}"] > div:nth-child(${number}) h5`
export const classAndNthSelector = (selector, number) => `[class^="${selector}"] > a:nth-child(${number})`
export const classAndLiNthSelector = (selector, number) => `[class^="${selector}"] > li:nth-child(${number})`
export const classAndChildSelector = (selector, child) => `[class^="${selector}"] ${child}`
export const classAndSpanSelector = (selector1, selector2) => `[class^="${selector1}"] > span[class^="${selector2}"]`
export const ariaLabelSelector = (selector) => `[aria-label="${selector}"]`
export const threeClassesInSequenceSelector = (selector1, selector2, selector3) =>
    `[class^="${selector1}"] > [class^="${selector2}"] >[class^="${selector3}"]`
export const twoClassesSelector = (selector1, selector2) => `[class*="${selector1}"][class*="${selector2}"]`
export const partialClassSelector = (selector) => `[class*="${selector}"]`
export const roleAndTextSelector = (selector, text) => `[role="${selector}"]:has-text("${text}")`
export const tagAndTextSelector = (tag, text) => `${tag}:has-text("${text}")`
export const class_inputName_ariaInvalid_textSelector = (selector, inputName, ariaInvalid, text) =>
    `[class^="${selector}"]:has(input[name="${inputName}"][aria-invalid="${ariaInvalid}"]) :has-text("${text}")`
export const class_inputName_inputType_textSelector = (selector, inputName, inputType, text) =>
    `[class^="${selector}"]:has(input[name="${inputName}"][type="${inputType}"]) :has-text("${text}")`
export const class_inputName_textSelector = (selector, inputName, text) =>
    `[class^="${selector}"]:has(input[name="${inputName}"]) :has-text("${text}")`
export const classAndInputNameSelector = (selector, inputName) => `[class^="${selector}"] input[name="${inputName}"]`
