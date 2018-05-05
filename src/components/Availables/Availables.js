import React from 'react';

export default ({ availables, selectCity, show }) => {
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho','Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const parseDate = (date) => {
    const splitDate = date.split('-');
    return [splitDate[2], months[+splitDate[1] - 1]];
  };

  const listResults = () => {
    const results = availables || [];
    // console.log(results)
    return results.map((elem, i) => {
      const date1 = parseDate(elem[0].date);
      const date2 = parseDate(elem[elem.length - 1].date);
      return (
        <li key={i}>
          De {date1[0]} de {date1[1]} à {date2[0]} de {date2[1]}
        </li>
      );
    });
  }

  return (
    <div className={`card ${show ? '' : 'd-none'}`} style={{marginTop: '20px'}}>
      <div className="card-body">
        <p>A saída mostra que, para {selectCity}, existem pelo menos {availables.length === 1 ? 'uma' : availables.length } combinações para o ano:</p>
        <ul>
          {availables.length > 0 ? listResults() : ''}
        </ul>      
      </div>
    </div>
    
  )
}