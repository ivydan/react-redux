import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

// Action
const increaseAction = { type: 'increase' }
// React component
class Counter extends Component {
    render() {
      const { value, onIncreaseClick } = this.props
      return (
        <div>
          <span>{value}</span>
          <button onClick={onIncreaseClick}>Increase</button>
        </div>
      )
    }
}
  
//   Counter.propTypes = {
//     value: PropTypes.number.isRequired,
//     onIncreaseClick: PropTypes.func.isRequired
//   }


// Map Redux state to component props
function mapStateToProps(state) {
    return {
      value: state.count
    }
  }
  
  // Map Redux actions to component props
  function mapDispatchToProps(dispatch) {
    return {
      onIncreaseClick: () => dispatch(increaseAction)
    }
  }

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default App;