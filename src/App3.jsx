import React, { Component } from 'react'


export default class App3 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      num: 1
    }
  }

  render() {
    return (
      <div>
        <h2> 数字为：{this.state.num}</h2>
        <button onClick={() => this.setState({ num: this.state.num + 1 })}>按钮1 累加</button>
        <button onClick={this.addnum.bind(this)}>按钮2 累加</button>
        {/* <button onClick={this.addnum()}>按钮3 累加</button> 直接执行 不能加括号 */}

        <button onClick={() => this.addnum()}>按钮3 累加</button>

      </div>
    )
  }

  addnum() {
    this.setState({ num: this.state.num + 1 })
  }



}
