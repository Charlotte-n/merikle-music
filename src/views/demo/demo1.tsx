import React, { PureComponent } from 'react'
interface IsProps {
  age: number
  name: string
}
interface IState {
  message: string
  counter: number
}

class Demo1 extends PureComponent<IsProps, IState> {
  name = 'aaa'
  state = {
    message: 'xaiohong',
    counter: 100
  }
  // constructor(props: IsProps) {
  //   super(props)
  //   this.state = {
  //     message: '小红鸭',
  //     counter: 99
  //   }
  // }

  render() {
    const { name, age } = this.props
    const { message, counter } = this.state
    return (
      <div>
        <div>{this.name}</div>
        <div>姓名:{name}</div>
        <div>年龄:{age}</div>
        <div>信息:{message}</div>
        <div>数量:{counter}</div>
      </div>
    )
  }
}

export default Demo1
