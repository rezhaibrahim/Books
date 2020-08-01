const env = {
        database: 'arkademy',
        username: 'root',
        password: 'rezha',
        host: 'localhost',
        dialect: 'mysql',
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
      };
       
      module.exports = env;