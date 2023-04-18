import { lista_series } from './Data.js';
var tableBody = document.querySelector('#series-table tbody');
var tableFooter = document.querySelector('#series-table tfoot');
var totalSeries = lista_series.length;
var totalSeasons = 0;
if (tableBody !== null) {
    for (var _i = 0, lista_series_1 = lista_series; _i < lista_series_1.length; _i++) {
        var Series_1 = lista_series_1[_i];
        var row = document.createElement('tr');
        row.innerHTML = "\n          <td>".concat(Series_1.getId(), "</td>\n          <td>").concat(Series_1.getName(), "</td>\n          <td>").concat(Series_1.getChannel(), "</td>\n          <td>").concat(Series_1.getSeasons(), "</td>\n        ");
        tableBody.appendChild(row);
        totalSeasons += Series_1.getSeasons();
    }
    if (tableFooter !== null) {
        var avgSeasons = totalSeasons / totalSeries;
        var footerRow = document.createElement('tr');
        footerRow.innerHTML = "\n        <td colspan=\"3\" style=\"text-align: right;\"><strong>Average Seasons:</strong></td>\n        <td>".concat(avgSeasons.toFixed(2), "</td>\n        ");
        tableFooter.appendChild(footerRow);
    }
}
