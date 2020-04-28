import React, { Component } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import './App.css'
import MaterialIcon, { colorPalette } from 'material-icons-react'

class PendingTasks extends Component {
  timeout = undefined
  constructor(props) {
    super(props)
    this.state = {
      isBusinessInfoCompleted: false,
      isProductsAndCompleted: false,
      isKnowledgeBaseCompleted: false,
      isCustomizeBotCompleted: false,
      isDeployCompleted: false,
      percentage: 0,
    }
  }

  componentDidMount() {
    this.timeout = window.setTimeout(() => {
      this.setState({
        percentage: 70,
      })
    }, 200)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.valueEnd !== this.props.valueEnd) {
      this.setState({
        percentage: 70,
      })
    }
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeout)
  }

  render() {
    const {
      isBusinessInfoCompleted,
      isProductsAndCompleted,
      isKnowledgeBaseCompleted,
      isCustomizeBotCompleted,
      isDeployCompleted,
      percentage,
    } = this.state
    const pendingTasks = [
      'isBusinessInfoCompleted',
      'isProductsAndCompleted',
      'isKnowledgeBaseCompleted',
      'isCustomizeBotCompleted',
      'isDeployCompleted',
    ]
    return (
      <section className='agentz-progressbar'>
        <div>
          <div className='agentz-progressbar-header'>Complete your Setup</div>
        </div>
        <div className='agentz-progressbar-description'>
          <span className='agentz-progressbar-desc'>
            Complete the following steps to get your digital receptionist ready to be deployed
          </span>
          <div class='agentz-progressbar-bar'>
            <svg class='agentz-progressbar-svg' height='80' width='80'>
              <circle class='agentz-progress-one' transform='rotate(-88 40 40)' cx='40' cy='40' r='39'></circle>
              <circle class='agentz-progress-two' ransform='rotate(2 40 40)' cx='40' cy='40' r='39'></circle>
              <circle class='agentz-progress-three' transform='rotate(92 40 40)' cx='40' cy='40' r='39'></circle>
              <circle
                class='agentz-progress-four'
                style={{ strokeDasharray: '326.4' }}
                transform='rotate(182 40 40)'
                cx='40'
                cy='40'
                r='39'
              ></circle>
            </svg>
            85%<div class='agentz-test-1'></div>
            <div class='agentz-test-2'></div>
          </div>
        </div>
        {!isBusinessInfoCompleted && (
          <a className='agentz-progress-quicklink'>
            <div className='agentz-progress-row'>
              <span className='agentz-progress-starticon'>
                <MaterialIcon icon='notes' />
              </span>
              <span className='agentz-progress-linkinfo'>
                Help the digital receptionist answer a few basic questions
              </span>
            </div>
          </a>
        )}
        {!isProductsAndCompleted && (
          <a className='agentz-progress-quicklink'>
            <div className='agentz-progress-row'>
              <span className='agentz-progress-starticon'>
                <MaterialIcon icon='notes' />
              </span>
              <span className='agentz-progress-linkinfo'>
                Tell the digital receptionist how to answer questions related to the products or services you offer
              </span>
            </div>
          </a>
        )}
        {!isKnowledgeBaseCompleted && (
          <a className='agentz-progress-quicklink'>
            <div className='agentz-progress-row'>
              <span className='agentz-progress-starticon'>
                <MaterialIcon icon='notes' />
              </span>
              <span className='agentz-progress-linkinfo'>
                Help the digital receptionist answer other questions that are commonly asked
              </span>
            </div>
          </a>
        )}
        {!isCustomizeBotCompleted && (
          <a className='agentz-progress-quicklink'>
            <div className='agentz-progress-row'>
              <span className='agentz-progress-starticon'>
                <MaterialIcon icon='notes' />
              </span>
              <span className='agentz-progress-linkinfo'>
                Tell the digital receptionist how you want it engage your online visitors
              </span>
            </div>
          </a>
        )}
        {!isDeployCompleted && (
          <a className='agentz-progress-quicklink'>
            <div className='agentz-progress-row'>
              <span className='agentz-progress-starticon'>
                <MaterialIcon icon='notes' />
              </span>
              <span className='agentz-progress-linkinfo'>Deploy the digital receptionist</span>
            </div>
          </a>
        )}
      </section>
    )
  }
}

export default PendingTasks
