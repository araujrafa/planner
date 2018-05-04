import React from 'react';

export default ({value, onChangeText, type, label}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        className="form-control" 
        type={type}
        value={value}
        onChange={onChangeText}
      />  
    </div>
  )
}