import React from 'react';

export default ({ citys, onChangeCity }) => (
  <select onChange={onChangeCity}>
    <option select="true" value=''>Selecione uma cidade...</option>
    {citys.map(city => {
      return <option key={city.woeid} value={city.woeid}>{city.district}</option>
    })}
  </select>
)
