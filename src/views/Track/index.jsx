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
    state = {
        queryLoading: true //统计查询按钮状态
    };
    componentDidMount() {
        //获取接口数据
        axios.trackCount({ year: 2020 }).then(response => {
            if (response.code == 200) {
                this.setOption(response.data, "pvChart", "浏览量", "pv");
                this.setOption(response.data, "uvChart", "独立访客", "uv");
                this.setOption(response.data, "ipChart", "独立IP数", "ip");
            }
        });
    }
    /**
     * 绘制图表
     * @param {Array} data
     * @param {Array} domId DOM 容器
     * @param {String} name 描述
     * @param {String} type 类型pv、uv、ip
     */
    setOption(data, domId, name, type) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById(domId));
        // 绘制图表
        myChart.setOption({
            itemStyle: {
                // 设置折线的颜色
                color: "#1890ff"
            },
            tooltip: {
                trigger: "axis"
            },
            dataset: {
                // 这里指定了维度名的顺序，从而可以利用默认的维度到坐标轴的映射。
                dimensions: ["month", type],
                source: data
            },
            xAxis: {
                type: "category"
            },
            yAxis: {},
            series: [
                {
                    name: name,
                    type: "line"
                }
            ]
        });
        this.setState({ queryLoading: false });
    }
    onChange = () => {};
    /**
     * 统计查询按钮
     */
    query = () => {
        this.setState({ queryLoading: true });
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
                            />
                        </div>
                        <div>
                            <span className={style.cho}>年度：</span>
                            <DatePicker defaultValue={moment()} picker="year" />
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
