import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'


class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  addFish = (fish)=>{
    // copy existing state -- immutability
    const fishes = {...this.state.fishes}
    // add new fish
    fishes[`fish${Date.now()}`] = fish
    // setState - new ES6 syntax { fishes: fishes }  same as { fishes }
    this.setState({
      fishes
    })
  }

  render() {
    return (

      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Wes is Cool"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish}/>
      </div> 

    )
  }
  
}


export default App;