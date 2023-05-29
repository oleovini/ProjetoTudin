const { Pool } = require('pg');

let connect = async function () {
  try {
    if (global.connection) {
      return Promise.resolve(global.connection);
    }

    const pool = new Pool({
      connectionString: 'postgres://hbbjcfqm:YKWkX4EdrerSIOYmjLSpPv-BR5--ivNQ@silly.db.elephantsql.com/hbbjcfqm'
    });

    global.connection = pool;
    return Promise.resolve(pool);
  } catch (error) {
    console.error('Erro ao estabelecer a conexão:', error);
    throw error;
  }
};

module.exports = { connect };
