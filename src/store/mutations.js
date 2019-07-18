/**
 * 定义公共事件（业务处理）
 *
 * 例子：
 *   import * as types from './mutation-types.js'
 *
 *   [types.SHOW_ALERT] (state, data) {
 *      data.show = true
 *      state.alert = data
 *   }
 */

import * as types from './mutation-types.js';

// /* global $ */
export default {
    // 显示下拉框
    // [types.SET_USER_INFO] (state, data) {
    //     state.dropDownOpt = $.extend(true, {}, data);
    // },
    // 设置userId
    [types.SET_USER_INFO] (state, data) {
        state.userInfo.userId = data.userId
        state.userInfo.userName = data.userName
    }
};
