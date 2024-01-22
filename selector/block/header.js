import { partialClassSelector } from '@selector/cssSelectors'
import { ariaLabelSelector } from '@selector/cssSelectors'
import { classAndDivNthH5Selector } from '@selector/cssSelectors'
import { classAndDivNthSelector } from '@selector/cssSelectors'
import { classAndTextSelector } from '@selector/cssSelectors'

export const HEADER = {
    accountButton: partialClassSelector('accountTrigger-trigger'),
    accountButtonText: (text) => classAndTextSelector('accountChip-root', `${text}`),
    orderGuideButton: partialClassSelector('favoritesTrigger-trigger'),
    quickOrderButton: partialClassSelector('quickOrderTrigger-trigger'),
    miniCartButton: partialClassSelector('cartTrigger-triggerContainer'),
    catalogButton: partialClassSelector('header-menuLinkButton'),
    linkButton: partialClassSelector('buttonItem-linkButton'),
    searchBarButton: ariaLabelSelector('search'),
    qrScannerButton: ariaLabelSelector('open qr scanner'),
    logoImage: partialClassSelector('logo-root'),
    searchInput: `${partialClassSelector('searchField-input')} input[name="search_query"]`,
    autocompleteSuggestions: partialClassSelector('autocomplete-suggestions'),
    phoneNumberLink: partialClassSelector('telephone-root'),
    themeSwitcherButton: partialClassSelector('switcher-toggleMenuButton'),
    companiesSwitcherButton: partialClassSelector('companiesSwitcher-root'),
    megaMenuDropDown: partialClassSelector('megaMenu-megaMenu'),
    firstCategory: classAndDivNthSelector('megaMenu-megaMenu', 1),
    secondCategory: classAndDivNthSelector('megaMenu-megaMenu', 2),
    firstSubCategory: classAndDivNthH5Selector('submenu-submenuItems', 1),
}
