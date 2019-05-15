import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import Hello from './Hello';
import reducer from "./reducer";

const store = createStore(reducer);

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Fragment>
       <Hello />
      </Fragment>
    );
  }
}

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
