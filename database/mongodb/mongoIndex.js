const conn = new Mongo();
const db = conn.getDB('zillower');

// id was already created?
// db.mortgage.createIndex({ id: 1 });
db.mortgage.createIndex({ address: 1 });
