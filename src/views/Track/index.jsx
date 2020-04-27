/**
 * 统计页
 * bin 2020/4/24
 */
import React, { Component } from "react";
import { Cascader, Row, Col, DatePicker, Button } from "antd";
import moment from "moment";
// 引入 ECharts 主模块
import echarts from "echarts/lib/echarts";
// 引入折线图
import "echarts/lib/chart/line";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";

import style from "./style.css";
import axios from "../../axios";

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
    constructor() {
        super();
        this.state = {
            queryLoading: true //统计查询按钮状态
        };
        this.year = moment().format("YYYY"); //初始当前年份
    }

    componentDidMount() {
        this.trackQuery();
    }
    /**
     * 获取接口数据
     */
    trackQuery() {
        //获取接口数据
        axios.trackCount({ year: this.year }).then(response => {
            if (response.code == 200) {
                this.setOption(response.data, [["pvChart", "浏览量", "pv"], ["uvChart", "独立访客", "uv"], ["ipChart", "独立IP数", "ip"]]);
            }
            this.setState({ queryLoading: false });
        });
    }
    /**
     * 绘制图表
     * @param {Array} data
     * @param {Array} chartMap
     * @param {String} item[0] DOM 容器
     * @param {String} item[1] 描述
     * @param {String} item[2] 类型pv、uv、ip
     */
    setOption(data, chartMap) {
        chartMap.forEach(item => {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById(item[0]));
            // 绘制图表
            myChart.setOption({
                itemStyle: {
                    // 设置折线的颜色
                    color: "#1890ff"
                },
                tooltip: {
                    trigger: "axis"
                },
                legend: {
                    data: ["年份"]
                },
                dataset: {
                    // 这里指定了维度名的顺序，从而可以利用默认的维度到坐标轴的映射。
                    dimensions: ["month", item[2]],
                    source: data
                },
                xAxis: {
                    type: "category"
                },
                yAxis: {},
                series: [
                    {
                        name: item[1],
                        type: "line"
                    }
                ]
            });
        });
    }
    onChange = () => {};
    /**
     * 选择年份
     * @param {*} value
     * @param {*} dateString
     */
    yearChange = (value, dateString) => {
        this.year = moment(value).format("YYYY");
    };
    /**
     * 统计查询按钮
     */
    query = () => {
        this.setState({ queryLoading: true });
        this.trackQuery();
    };
    render() {
        return (
            <div>
                <div className={style.headWrapper}>
                    <div>
                        <div className={style.position}>
                            <span className={style.cho}>访问页面：</span>
                            <Cascader
                                options={options}
                                defaultValue={["mine", "mine_index"]}
                                onChange={this.onChange}
                                placeholder="请选择"
                                allowClear={false}
                            />
                        </div>
                        <div>
                            <span className={style.cho}>年度：</span>
                            <DatePicker defaultValue={moment()} onChange={this.yearChange} picker="year" allowClear={false} />
                        </div>
                    </div>
                    <div>
                        <Button type="primary" loading={this.state.queryLoading} onClick={this.query}>
                            查询
                        </Button>
                    </div>
                </div>
                <Row gutter={[32, 20]}>
                    <Col span={12}>
                        <div className={style.charts}>
                            <div className={style.title}>
                                浏览量(PV)
                                <div id="pvChart" style={{ width: "100%", height: 500 }}></div>
                            </div>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className={style.charts}>
                            <div className={style.title}>独立访客(UV)</div>
                            <div id="uvChart" style={{ width: "100%", height: 500 }}></div>
                        </div>
                    </Col>
                </Row>
                <Row gutter={[32, 20]}>
                    <Col span={12}>
                        <div className={style.charts}>
                            <div className={style.title}>独立IP数</div>
                            <div id="ipChart" style={{ width: "100%", height: 500 }}></div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Track;
