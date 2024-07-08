const sqlite = require('sqlite3').verbose();
const dbConfig = require('../../config/dbConfig');

module.exports = new Promise((resolve, reject) => {
  dbConfig.then((db) => {
    db.run(`
      CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        password TEXT
        sdfdf
        
      )
    `, (err) => {
        if (err) return reject(err);
        
        resolve({
          create: (user) => {
            return new Promise((res, rej) => {
              db.run(`INSERT INTO Users (email, password) VALUES (?, ?)`, 
              [user.email, user.password], 
              function (err) {
                if (err) return rej(err);
                res({ id: this.lastID, ...user });
              });
            });
          },
          findOne: (query) => {
            return new Promise((res, rej) => {
              db.get(`SELECT * FROM Users WHERE email = ?`, [query.email], (err, row) => {
                if (err) return rej(err);
                res(row);
              });
            });
          }
        });
    });
  }).catch(console.error);
});
