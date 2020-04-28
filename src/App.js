import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import AgentzExpansionPanel from './AgentzExpansionPanel'
import './App.css'
import SearchInput from './AgentzSearchComponent'
import MultiSelect from './MultiSelectBar'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { colourOptions } from './data'
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';

const animatedComponents = makeAnimated()
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndustry: [],
      selectedtag: [],
      industry: [
        { id: 0, label: 'Travel' },
        { id: 1, label: 'Fashion' },
        { id: 2, label: 'Gym' },
        { id: 3, label: 'Health' },
      ],
      tag: [
        { id: 0, label: 'Custom' },
        { id: 1, label: 'Pre-Trained' },
        { id: 2, label: 'Products' },
        { id: 3, label: 'Basic' },
      ],
    }
  }

  handleSelectedIndustry = (selectedIndustry) => {
    this.setState({ selectedIndustry })
  }
  handleSelectedTag = (selectedtag) => {
    this.setState({ selectedtag })
  }
  render() {
    const data =    [{ value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },];
    const items = [
      { label: 'Travel', value: 1 },
      { label: 'Fashion', value: 2 },
      { label: 'Gym', value: 3 },
      { label: 'Home Improve', value: 4 },
      { label: 'Health', value: 5 },
    ]
    const options1 = [
      { label: 'Custom', value: 1 },
      { label: 'Pre-Trained', value: 2 },
      { label: 'Products', value: 3 },
      { label: 'Services', value: 4 },
      { label: 'Basic', value: 5 },
    ]
    const { industry, selectedIndustry, tag, selectedtag } = this.state
    return (
      <div style={{maxWidth: "800px",
        margin: "12.5vh auto"}}>
        <div class='agentz-kb-typography'>
          <Typography variant='h6' gutterBottom>
            Manage your Agent's Knowledge Base
          </Typography>
          <Typography variant='body2' gutterBottom>
            Your agent can understand the following requests and answer them appropriately.
          </Typography>
        </div>

        <div className='agentz-custom-topbar'>

            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              placeholder={'Filter'}
              options={data}
              className='agentz-custom-topselectbar'
            />
          <div className='agentz-custom-topsearchbar'>
            <SearchInput />
          </div>
        </div>
        <div className='agentz-expand-comp'>
          <div className='agentz-expand-header'>
            <div>
              <div className='agentz-expand-subheader'>Questions and Answers</div>
            </div>
          </div>
          <AgentzExpansionPanel />
          <div className='agentz-expand-footer'>
            <div className='agentz-expand-footerleft'>
              <button className='agentz-expand-footerbutton'><AddIcon/><p style={{marginLeft:"8px"}}>Add custom user query</p></button>
            </div>
            <div className='agentz-expand-footerright'>
              <button className='agentz-expand-footerbutton'><AddIcon/><p style={{marginLeft:"8px"}}>Add pretrained user query</p></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
