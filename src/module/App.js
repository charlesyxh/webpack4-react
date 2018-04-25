import React, {Component} from 'react'
import { Button } from 'antd'
import img from '../assets/img/banner.jpg'
import './index.less'

class App extends Component {
  state = {
    reset: 'Y'
  }

  onClick = () => {
    this.setState({
      reset: this.state.reset === 'Y' ? 'N' : 'Y'
    })
  }

  render() {
    return (
      <div>
        <Button type='primary' onClick={this.onClick} >{this.state.reset === 'Y' ? '开始' : '停止'}</Button>
        <img src={img} alt='banner' className={ this.state.reset === 'Y' ? 'flower' : 'flower flower-rotate' } onClick={this.onClick}/>
      </div>
    )
  }
}

export default App