import * as types from './mutation-types.js';

// 显示下拉框
export const showDropDown = ({ commit, state }, data) => {
    if (state.colorPickerOpt.flat) {
        commit(types.HIDE_COLORPICKER);
    }
    commit(types.SHOW_DROPDOWN, data);
};

// 修改当前用户ID
export const setUserInfo = ({ commit }, data) => {
    commit(types.SET_USER_INFO, data);
};
