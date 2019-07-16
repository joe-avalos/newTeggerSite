export const NAV_ACTIONS = {
  NAV_TAB_CLICK: 'NAV_TAB_CLICK',
  NAV_EXPAND_TOGGLE: 'NAV_EXPAND_TOGGLE',
}

export function navTabClicked(activeNav) {
  return {
    type: NAV_ACTIONS.NAV_TAB_CLICK,
    activeNav: activeNav
  }
}
export function navExpandClick(open) {
  return {
    type: NAV_ACTIONS.NAV_EXPAND_TOGGLE,
    open: !open
  }
}
