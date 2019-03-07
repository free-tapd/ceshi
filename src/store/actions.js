import * as types from './mutation-types';

export const actionsSetLogin = function ({ commit, state }, login) {
  commit(types.LOGIN, login);
}
//个人信息
export const actionsSetUserinfo = function ({ commit, state }, userinfo) {
    console.log(types);
  commit(types.USERINFO, userinfo);
}
//项目数据
export const actionsSetProjectdata = function ({ commit, state }, projectdata) {
    console.log(types);
  commit(types.PROJECTDATA, projectdata);
}
