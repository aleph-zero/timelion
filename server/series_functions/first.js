var alter = require('../utils/alter.js');

module.exports = {
  args: [
    {
      name: 'inputSeries',
      types: ['seriesList']
    }
  ],
  help: 'This is an internal function that simply returns the input series. Don\'t use this',
  fn: function first (inputSeries) {
    return alter([inputSeries], function (args) {
      return args[0];
    });
  }
};