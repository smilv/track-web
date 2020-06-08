/*
 * @Description: Action 是把数据从应用传到 store 的有效载荷。它是 store 数据的唯一来源。
 * @Autor: bin
 * @Date: 2020-05-19 16:54:12
 * @LastEditors: bin
 * @LastEditTime: 2020-06-08 19:08:10
 */

export function addUser(data) {
    return { type: "ADD_USER", data };
}

export function updateUser(data) {
    return { type: "UPDATE_USER", data };
}
