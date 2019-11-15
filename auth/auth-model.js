const db = require('../database/dbConfig')

module.exports = {
    register,
    findBy
}

function findBy(filter) {
    return db('users').where(filter);
  }
  

function register(user) {
    return db('users')
    .insert(user, 'id')
};


//done