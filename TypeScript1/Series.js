"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Series = void 0;
var Series = /** @class */ (function () {
    function Series(id, name, channel, seasons) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
    }
    Series.prototype.getId = function () {
        return this.id;
    };
    Series.prototype.getName = function () {
        return this.name;
    };
    Series.prototype.getChannel = function () {
        return this.channel;
    };
    Series.prototype.getSeasons = function () {
        return this.seasons;
    };
    return Series;
}());
exports.Series = Series;
