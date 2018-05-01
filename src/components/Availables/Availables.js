import React from 'react';

export default ({ availables, selectCity }) => {
  const lengthResults = availables.length - 1;
  const listResults = () => {
    const results = availables || [];
    let i = 0;
    const dates = [];
    while (i < results.lenght && availables.lenght > 0); {
      console.log(results[i][0]);
      dates.push(results[i][0], results[i][results[i].length]);
      i += 1;
    } 
    console.log(dates);
    return 'olá';
  }

  return (
    <ul>  
      <li>A saída mostra que, para {selectCity}, existem pelo menos {lengthResults === 1 ? 'uma' : lengthResults } combinações para o ano:</li>
      {availables.lenght > 0 ? listResults() : ''}
    </ul>
  )
}