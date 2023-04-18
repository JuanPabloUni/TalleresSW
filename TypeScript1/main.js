"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Data_1 = require("./Data");
var tableBody = document.querySelector('#series-table tbody');
if (tableBody !== null) {
    for (var _i = 0, lista_series_1 = Data_1.lista_series; _i < lista_series_1.length; _i++) {
        var Series_1 = lista_series_1[_i];
        var row = document.createElement('tr');
        row.innerHTML = "\n      <td>".concat(Series_1.getId(), "</td>\n      <td>").concat(Series_1.getName(), "</td>\n      <td>").concat(Series_1.getChannel(), "</td>\n      <td>").concat(Series_1.getSeasons(), "</td>\n    ");
        tableBody.appendChild(row);
    }
}
else {
    console.log("NO HAY TABLEBODY");
}
