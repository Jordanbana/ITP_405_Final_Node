var knex = require('knex')({
  client: 'mysql',
  connection: {
    host       : 'itp460.usc.edu',
    user       : 'jordan',
    password   : '000jordan000',
    database   : 'jordan',
    charset    : 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
