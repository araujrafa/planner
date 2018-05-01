import React from 'react';

export default ({value, onChangeText, type}) => {
  return (
    <input 
      type={type}
      value={value}
      onChange={onChangeText}
    />  
  )
}