import React from "react";

const msg = "hello"
let flag = false;
let arr = ["刘备", "关羽", "张飞"];

export default class App1 extends React.Component {
  // 渲染
  render() {
    return (
      <>

        <h2>{msg}</h2>
        <hr />
        <label htmlFor="username">用户名：</label>
        <input type="text" id="username" />
        <hr />

        <div className="box">  box </div>

        <div style={{ backgroundColor: flag ? 'pink' : "skyblue" }}>  style </div>

        <hr />
        <ul>
          {
            arr.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>

        <ul>
          {
            arr.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>


      </>
    )
  }
}

// rcc react class component
// rfc react function component

