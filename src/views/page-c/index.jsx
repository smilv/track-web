/**
 * 发布/订阅 设计模式
 * bin 2019/12/25
 */
import React, { Component } from "react";
import officeAccounts from "./office-accounts";

class PageC extends Component {
    constructor() {
        super();
        this.people = {
            xming: {
                type: "北京晚报",
                fn: function(data) {
                    console.log(`小明收到了->${data}`);
                }
            },
            xhong: {
                type: "北京晚报",
                fn: function(data) {
                    console.log(`小红收到了->${data}`);
                }
            },
            xfang: {
                type: "南京晚报",
                fn: function(data) {
                    console.log(`小方收到了->${data}`);
                }
            }
        };
    }
    /**
     * 订阅
     */
    subscribe = name => {
        officeAccounts.subscribe(this.people[name].type, this.people[name].fn);
    };
    /**
     * 取消订阅
     */
    unSubscribe = name => {
        officeAccounts.unSubscribe(this.people[name].type, this.people[name].fn);
    };
    /**
     * 发布
     */
    publish = type => {
        officeAccounts.publish(type, `${type}消息体`);
    };
    render() {
        return (
            <div>
                <div>发布/订阅 设计模式</div>
                <br />
                <button onClick={this.subscribe.bind(this, "xming")}>小明订阅《北京晚报》</button>
                <button onClick={this.subscribe.bind(this, "xhong")}>小红订阅《北京晚报》</button>
                <button onClick={this.subscribe.bind(this, "xfang")}>小方订阅《南京晚报》</button>
                <br />
                <br />
                <button onClick={this.publish.bind(this, "北京晚报")}>发布《北京晚报》</button>
                <button onClick={this.publish.bind(this, "南京晚报")}>发布《南京晚报》</button>
                <br />
                <br />
                <button onClick={this.unSubscribe.bind(this, "xming")}>小明退订《北京晚报》</button>
                <button onClick={this.unSubscribe.bind(this, "xhong")}>小红退订《北京晚报》</button>
                <button onClick={this.unSubscribe.bind(this, "xfang")}>小方退订《南京晚报》</button>
            </div>
        );
    }
}

export default PageC;
