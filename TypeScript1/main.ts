import { lista_series } from './Data.js';
import { Series } from './Series.js';

const tableBody = document.querySelector('#series-table tbody');
const tableFooter = document.querySelector('#series-table tfoot');
const totalSeries = lista_series.length;
let totalSeasons = 0;

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

        totalSeasons += Series.getSeasons();
    }

    if (tableFooter !== null) {
      const avgSeasons = totalSeasons / totalSeries;
      const footerRow = document.createElement('tr');
      footerRow.innerHTML = `
        <td colspan="3" style="text-align: right;"><strong>Average Seasons:</strong></td>
        <td>${avgSeasons.toFixed(2)}</td>
        `;
      tableFooter.appendChild(footerRow);
    }
}