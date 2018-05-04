import React from 'react';

export default ({ citys, onChangeCity, label }) => (
  <div className="form-group">
    <label>{label}</label>
    <select onChange={onChangeCity} className="form-control">
      <option select="true" value=''>Selecione uma cidade...</option>
      {citys.map(city => {
        return <option key={city.woeid} value={city.woeid}>{city.district}</option>
      })}
    </select>
  </div>
)
