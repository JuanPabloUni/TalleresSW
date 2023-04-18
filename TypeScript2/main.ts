import { lista_series } from './Data.js';
import { Series } from './Series.js';

const tableBody = document.querySelector('#series-table tbody');
const tableFooter = document.querySelector('#series-table tfoot');
const seriesDetail = document.querySelector('#series-detail');
const totalSeries = lista_series.length;
let totalSeasons = 0;

function createCard(series: Series): HTMLElement {
  const card = document.createElement('div');
  card.classList.add('card', 'my-3');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = series.getName();
  cardBody.appendChild(cardTitle);

  const cardSubtitle = document.createElement('h6');
  cardSubtitle.classList.add('card-subtitle', 'mb-2', 'text-muted');
  cardSubtitle.textContent = `Channel: ${series.getChannel()} | Seasons: ${series.getSeasons()}`;
  cardBody.appendChild(cardSubtitle);

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  // Replace with actual description if available
  cardText.textContent = 'No description available.';
  cardBody.appendChild(cardText);

  card.appendChild(cardBody);
  return card;
}

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

    row.addEventListener('click', () => {
      if (seriesDetail !== null) {
        while (seriesDetail.firstChild) {
          seriesDetail.removeChild(seriesDetail.firstChild);
        }
        const card = createCard(Series);
        seriesDetail.appendChild(card);
      }
    });
  }
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