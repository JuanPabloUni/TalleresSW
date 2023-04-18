import { lista_series } from './Data.js';
import { Series } from './Series';

const tableBody = document.querySelector('#series-table tbody');

if (tableBody !== null) {
    for (const series of lista_series) {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${series.getId()}</td>
          <td>${series.getName()}</td>
          <td>${series.getChannel()}</td>
          <td>${series.getSeasons()}</td>
        `;
        tableBody.appendChild(row);
    }
}