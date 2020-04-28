import React, { Component } from 'react'
import './App.css'
import Switch from '@material-ui/core/Switch'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

class ExpansionPanel extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <div className='agentz-middleexpand-comp'>
          <div className='agentz-switch-button'>
            <Switch color='primary' name='checkedB' inputProps={{ 'aria-label': 'primary checkbox' }} />
          </div>
          <div className='agentz-expand-overview'>Services Offered</div>
          <div className='agentz-rightside-arrow'><KeyboardArrowRightIcon /></div>
        </div>
        <div className='agentz-middleexpand-comp'>
          <div className='agentz-switch-button'>
            <Switch color='primary' name='checkedB' inputProps={{ 'aria-label': 'primary checkbox' }} />
          </div>
          <div className='agentz-expand-overview'>Products Offered</div>
          <div className='agentz-rightside-arrow'><KeyboardArrowRightIcon /></div>
        </div>
        <div className='agentz-middleexpand-comp'>
          <div className='agentz-switch-button'>
            <Switch color='primary' name='checkedB' inputProps={{ 'aria-label': 'primary checkbox' }} />
          </div>
          <div className='agentz-expand-overview'>Cost of service</div>
          <div className='agentz-rightside-arrow'><KeyboardArrowRightIcon /></div>
        </div>
        <div className='agentz-middleexpand-comp'>
          <div className='agentz-switch-button'>
            <Switch color='primary' name='checkedB' inputProps={{ 'aria-label': 'primary checkbox' }} />
          </div>
          <div className='agentz-expand-overview'>Deep Learning</div>
          <div className='agentz-rightside-arrow'><KeyboardArrowRightIcon /></div>
        </div>
      </React.Fragment>
    )
  }
}

export default ExpansionPanel
