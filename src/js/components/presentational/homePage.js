import React, { PropTypes } from 'react';
import radium from 'radium';

const HomePage = ({ counter, addHandler, subtractHandler }) => (
  <div>
    <button onClick={addHandler}>Add</button>
    <div> { counter } </div>
    <button onClick={subtractHandler}>Subtract</button>
  </div>
);

HomePage.propTypes = {
  counter: PropTypes.number,
  addHandler: PropTypes.func,
  subtractHandler: PropTypes.func,
};

export default radium(HomePage);
