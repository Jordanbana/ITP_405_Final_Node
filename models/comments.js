var bookshelf = require('./../bookshelf')

var Comments = bookshelf.Model.extend({
  tableName: 'comments'
});

module.exports = Comments;
