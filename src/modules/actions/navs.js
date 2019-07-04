export const NAV_ACTIONS = {
  NAV_TAB_CLICK: 'NAV_TAB_CLICK'
}

export function navTabClicked(activeNav) {
  return {
    type: NAV_ACTIONS.NAV_TAB_CLICK,
    activeNav: activeNav
  }
}
