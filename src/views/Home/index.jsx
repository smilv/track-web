/**
 * 首页
 * bin 2019/12/25
 */
import React, { Component } from "react";
import style from "./style.css";
import tools from "../../utils/tools";

class Home extends Component {
    render() {
        return (
            <div>
                <div className={style.welcome}>
                    <h3>早安，欢迎回来！</h3>
                    <h4>今天是 {tools.dateFormat(new Date().getTime(), "yyyy年MM月dd日 EEE")}</h4>
                </div>
            </div>
        );
    }
}

export default Home;
