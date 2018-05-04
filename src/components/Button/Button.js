import React from 'react';

export default ({text, onClickButton}) => (
  <button onClick={onClickButton} className="btn btn-success">
    {text}
  </button>
)