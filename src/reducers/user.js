/*
 * @Description: 用户信息
 * @Autor: bin
 * @Date: 2020-05-19 17:15:29
 * @LastEditors: bin
 * @LastEditTime: 2020-05-19 18:17:13
 */
const user = (state = {}, action) => {
    switch (action.type) {
        case "ADD_USER":
            return action.data;
        default:
            return state;
    }
};

export default user;
