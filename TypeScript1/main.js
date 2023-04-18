import { lista_series } from './Data.js';
var tableBody = document.querySelector('#series-table tbody');
if (tableBody !== null) {
    for (var _i = 0, lista_series_1 = lista_series; _i < lista_series_1.length; _i++) {
        var series = lista_series_1[_i];
        var row = document.createElement('tr');
        row.innerHTML = "\n          <td>".concat(series.getId(), "</td>\n          <td>").concat(series.getName(), "</td>\n          <td>").concat(series.getChannel(), "</td>\n          <td>").concat(series.getSeasons(), "</td>\n        ");
        tableBody.appendChild(row);
    }
}
