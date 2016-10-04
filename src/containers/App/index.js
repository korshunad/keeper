import React from 'react'
import Hello from 'components/Hello'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
  }
  render() {
    return (<div className="starter"><Hello/></div>)
  }
}
export default App
