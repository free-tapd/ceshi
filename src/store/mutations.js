import * as types from './mutation-types'

const mutations = {
    [types.LOGIN](state, login) {
        state.userInfo.login = login;
    },
    [types.USERINFO](state, userInfo) {
        state.userInfo = userInfo;
    },
    [types.PROJECTDATA](state, projectdata) {
        state.projectdata = projectdata;
    }
}
export default mutations;
