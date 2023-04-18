import { lista_series } from './Data';
import { Series } from './Series';

const tableBody = document.querySelector('#series-table tbody');

if (tableBody !== null) {
  for (const Series of lista_series) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${Series.getId()}</td>
      <td>${Series.getName()}</td>
      <td>${Series.getChannel()}</td>
      <td>${Series.getSeasons()}</td>
    `;
    tableBody.appendChild(row);
  }
}