import React from 'react'
import {getFunName} from '../helpers'

export default class StorePicker extends React.Component {

  myInput = React.createRef()

  goToStore = (event)=>{
    // 1. prevent default action of submitting form
    event.preventDefault()
    // get the value frm the input
    const storeName = this.myInput.value.value
    // change url to /store/storeName
    this.props.history.push(`/store/${storeName}`)
  }

  render() {
    return (
      <form 
        className="store-selector" onSubmit={ this.goToStore } >
        <h2>Please Enter A Store</h2>
        <input 
          type="text" 
          required placeholder="Store Name" 
          defaultValue={getFunName()}
          ref= {this.myInput}/>
        <button type="submit"> Visit Store </button>
      </form>
    )
  }

}