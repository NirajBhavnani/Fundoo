const state = {
    sideNav: false
}

const getters = {
    returnSideNav: (state) => state.sideNav
}

const actions = {
    sideNavSwitch({commit}){
        commit('SIDE_NAV_SWITCH')
    }
}

const mutations = {
    SIDE_NAV_SWITCH: (state) => (state.sideNav = !state.sideNav)
}

export default{state, getters, actions, mutations}