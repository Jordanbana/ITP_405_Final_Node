var bookshelf = require('./../bookshelf')

var Videos = bookshelf.Model.extend({
  tableName: 'videos'
});

module.exports = Videos;
