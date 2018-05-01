import React from 'react';

export default ({text, onClickButton}) => (
  <button onClick={onClickButton}>
    {text}
  </button>
)