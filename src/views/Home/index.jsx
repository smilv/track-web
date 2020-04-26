/**
 * 首页
 * bin 2019/12/25
 */
import React, { Component } from "react";
import moment from "moment";
import style from "./style.css";

class Home extends Component {
    render() {
        return (
            <div>
                <div className={style.welcome}>
                    <h3>{moment().format("a")}好，欢迎回来！</h3>
                    <h4>今天是 {moment().format("YYYY年 MMMM Do dddd")}</h4>
                </div>
            </div>
        );
    }
}

export default Home;
