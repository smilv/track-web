/*
 * @Description: 用户信息
 * @Autor: bin
 * @Date: 2020-05-19 17:15:29
 * @LastEditors: bin
 * @LastEditTime: 2020-06-09 10:29:06
 */
const user = (state = {}, action) => {
    switch (action.type) {
        case "ADD_USER":
            return { ...state, ...action.data };
        default:
            return state;
    }
};

export default user;
