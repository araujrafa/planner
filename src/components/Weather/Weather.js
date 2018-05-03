import React from 'react';

export default ({weather, toggleCheckboxChange}) => (
  <div className="checkbox">
    <select multiple>
    {weather.map(wth => {
      return (
        <option key={wth.id} value={wth.name}>
          {/* <input
            type="checkbox"
            value={wth.name}
            onChange={toggleCheckboxChange}
            /> */}
          {wth.name}
        </option>
      )
    })}
    </select>
  </div>
);
