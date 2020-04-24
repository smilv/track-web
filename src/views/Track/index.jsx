/**
 * 统计页
 * bin 2020/4/24
 */
import React, { Component } from "react";
import { Cascader, Row, Col } from "antd";
import style from "./style.css";

const options = [
    {
        value: "mine",
        label: "个人中心",
        children: [
            {
                value: "mine_index",
                label: "首页"
            }
        ]
    }
];

class Track extends Component {
    onChange = () => {};
    render() {
        return (
            <div>
                <div className={style.headWrapper}>
                    <span className={style.cho}>访问页面：</span>
                    <Cascader options={options} defaultValue={["mine", "mine_index"]} onChange={this.onChange} placeholder="请选择" />
                </div>
                <Row gutter={[32, 20]}>
                    <Col span={12}>
                        <div className={style.charts}>
                            <div className={style.title}>浏览量(PV)</div>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className={style.charts}>
                            <div className={style.title}>访客数(UV)</div>
                        </div>
                    </Col>
                </Row>
                <Row gutter={[32, 20]}>
                    <Col span={12}>
                        <div className={style.charts}>
                            <div className={style.title}>IP数</div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Track;
