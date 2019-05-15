import React from 'react';
import {connect} from "react-redux";

class Hello extends React.Component {

  render() {
    return (
      <React.Fragment>
        <h4>{this.props.count}</h4>
        <button onClick={this.props.onInc}>Inc</button>
        <button onClick={this.props.onDec}>Dec</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    count: state.value,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInc: () => dispatch({type:"UP"}),
    onDec: () => dispatch({type:"DOWN"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
