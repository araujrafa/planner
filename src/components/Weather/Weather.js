import React from 'react';

export default ({weather, toggleCheckboxChange, label}) => (
  <div>
    <label>{label}</label>
    <div className='form-grup'>
      {weather.map(wth => {
        return (
          <div className="form-check form-check-inline" key={wth.name}>
            <input
              className="form-check-input"
              type="checkbox"
              value={wth.name}
              onChange={toggleCheckboxChange}
              id={wth.name}
              />
            <label className="form-check-label" htmlFor={wth.name}>{wth.name}</label>
          </div>
        )
    })}
    </div>
  </div>
);
