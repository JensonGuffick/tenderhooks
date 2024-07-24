const sqlite3 = require('sqlite3').verbose();
const path = require('path');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const { name, email } = JSON.parse(event.body);

  if (!name || !email) {
    return {
      statusCode: 400,
      body: 'Name and email are required.',
    };
  }

  const db = new sqlite3.Database(path.resolve(__dirname, 'mydb.db'));

  return new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO subscribers (name, email) VALUES (?, ?)',
      [name, email],
      function (err) {
        db.close();
        if (err) {
          return reject({
            statusCode: 500,
            body: 'Error inserting data.',
          });
        }
        resolve({
          statusCode: 200,
          body: 'Subscription successful!',
        });
      }
    );
  });
};
