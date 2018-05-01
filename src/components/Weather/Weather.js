import React from 'react';

export default ({weather, toggleCheckboxChange}) => (
  <div className="checkbox">
    {weather.map(wth => {
      return (
        <label key={wth.id}>
          <input
            type="checkbox"
            value={wth.name}
            onChange={toggleCheckboxChange}
            />
          {wth.name}
        </label>
      )
    })}
  </div>
);
