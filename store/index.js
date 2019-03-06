export const state = () => ({
    projects: null
})

export const getters = {

}

export const mutations = {
    mutateProjects(state, projects) {
        state.projects = projects
    }
}

export const actions = {
    setProjects({ commit }, projects) {
        commit('mutateProjects', projects)
    }
}