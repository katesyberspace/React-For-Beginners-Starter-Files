import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import fishes from '../sample-fishes'
import Fish from './Fish'

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

  addToOrder = (key) => {
    // 1. copy order object
    const order = {...this.state.order}
    // 2. update order state 
    order[key] = order[key] + 1 || 1
    // 3. set state
    this.setState({ order })
  }

  // this fn goes to Inventory to load in the sample fish into state  
  addSampleFishes = () => {
    this.setState({ fishes })
  }

  render() {
    return (

      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="I Love Seafood"/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map( key => 
                <Fish 
                  key={key} 
                  index={key} 
                  details={this.state.fishes[key]} 
                  addToOrder={this.addToOrder}
                />
            )}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} addSampleFishes={this.addSampleFishes}/>
      </div> 

    )
  }
  
}


export default App;