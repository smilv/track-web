/*
 * @Description: 首页
 * @Autor: bin
 * @Date: 2019-12-25 17:02:12
 * @LastEditors: bin
 * @LastEditTime: 2020-06-22 17:06:58
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import style from "./style.css";

class Home extends Component {
    render() {
        const { user } = this.props;
        return (
            <div>
                <div className={style.welcome}>
                    {user.isBirthday && <img className={style.birthday} src={require("../../assets/img/birthday.png")} alt="" />}
                    <h3>{moment().format("a")}好，欢迎回来</h3>
                    <h4>今天是 {moment().format("YYYY年 MMMM Do dddd")}</h4>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps)(Home);
