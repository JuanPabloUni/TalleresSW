import { lista_series } from './Data.js';
var tableBody = document.querySelector('#series-table tbody');
var tableFooter = document.querySelector('#series-table tfoot');
var seriesDetail = document.querySelector('#series-detail');
var totalSeries = lista_series.length;
var totalSeasons = 0;
function createCard(series) {
    var card = document.createElement('div');
    card.classList.add('card', 'my-3');
    var cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = series.getName();
    cardBody.appendChild(cardTitle);
    var cardSubtitle = document.createElement('h6');
    cardSubtitle.classList.add('card-subtitle', 'mb-2', 'text-muted');
    cardSubtitle.textContent = "Channel: ".concat(series.getChannel(), " | Seasons: ").concat(series.getSeasons());
    cardBody.appendChild(cardSubtitle);
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    // Replace with actual description if available
    cardText.textContent = 'No description available.';
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    return card;
}
if (tableBody !== null) {
    var _loop_1 = function (Series_1) {
        var row = document.createElement('tr');
        row.innerHTML = "\n      <td>".concat(Series_1.getId(), "</td>\n      <td>").concat(Series_1.getName(), "</td>\n      <td>").concat(Series_1.getChannel(), "</td>\n      <td>").concat(Series_1.getSeasons(), "</td>\n    ");
        tableBody.appendChild(row);
        totalSeasons += Series_1.getSeasons();
        row.addEventListener('click', function () {
            if (seriesDetail !== null) {
                while (seriesDetail.firstChild) {
                    seriesDetail.removeChild(seriesDetail.firstChild);
                }
                var card = createCard(Series_1);
                seriesDetail.appendChild(card);
            }
        });
    };
    for (var _i = 0, lista_series_1 = lista_series; _i < lista_series_1.length; _i++) {
        var Series_1 = lista_series_1[_i];
        _loop_1(Series_1);
    }
}
