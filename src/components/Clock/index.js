import {Component} from 'react'
import './index.css'

class Clock extends Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = {time: new Date()}
  //     console.log('Constructor Called')
  //   }
  constructor(props) {
    super(props)
    this.state = {time: props.date}
  }
  //   state = {time: new Date()}

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
    console.log('componentDidMount() Called')
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
    console.log('componentWillUnmount() Called')
  }

  tick = () => {
    this.setState({time: new Date()})
  }

  render() {
    const {time} = this.state
    console.log('Render() Called', time)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{time.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
