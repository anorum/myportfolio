export const state = () => ({
  background: 'Not Hungry',
  backgroundpath: null
})

export const getters = {
  getBackground(state) {
    return state
  }
}

export const mutations = {
  mutateBackground(state, choice) {
    state.background = choice.choice
    state.backgroundpath = choice.path
  }
}

export const actions = {
  setBackground({ commit }, choice) {
    commit('mutateBackground', choice)
  }
}
