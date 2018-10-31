import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import fishes from '../sample-fishes'
import Fish from './Fish'
import base from '../base'

class App extends React.Component {

// STATE 

  state = {
    fishes: {},
    order: {}
  }

// LIFECYCLE METHODS

  componentDidMount(){
    const { params } = this.props.match
    
    console.log(params.storeId)
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    })
  }

  componentWillUnmount(){
    console.log('unmounted')
    base.removeBinding(this.ref)
  }


// CUSTOM METHODS   

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


// RENDER METHOD

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
        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Inventory addFish={this.addFish} addSampleFishes={this.addSampleFishes}/>
      </div> 

    )
  }
  
}


export default App;