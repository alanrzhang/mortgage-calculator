const conn = new Mongo();
const db = conn.getDB('zillower');

db.mortgage.createIndex({ address: 1 });
